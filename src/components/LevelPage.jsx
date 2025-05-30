import React, { useState, useEffect, useContext, useRef } from "react";
import { GlobalContext } from "../App";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import MusicPlayer from "./MusicPlayer";
import GameScore from "./GameScore";
import GameOver from "./GameOver";
import styled from "styled-components";
import Loader from "./Loader";

const StyledImgArea = styled.img`
  min-width: 1000px;
  max-width: 1500px;
  flex-shrink: 0;
  height: auto;
  cursor: crosshair;
  position: relative;
`

const StyledImgContainer = styled.div`
  position: relative; 
  display: flex;
  overflow: scroll;
  max-width: 100vw;
`;

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
    background: center / contain repeat-x url("/assets/background-title.gif");
    justify-content: center;
    align-items: center;

    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    background-color: blue;

    animation: 1s ease 1 fade-in;
`

const HitBox = styled.div`
    width: 70px;
    height: 70px;
    border: 3px ridge gold;
    border-radius: 6px;
    display: var(--display);
    position: absolute;
    left: var(--x);
    top: var(--y);
    z-index: 5;
    outline: 3px solid yellow;
    animation: 200ms ease-in 1 zoom;

    button {
      width: 76px;
      font-size: 16px;
      color: aliceblue;
      background-color: red;
      border-radius: 6px;
      position: absolute;
      padding: 3px 3px;
      cursor: pointer;
      will-change: transform;
    }

    button:nth-child(1) {
      bottom: -36px;
      left: -6px;
      background-color: blue;
      animation: 600ms ease 1 spin-x;
    }

    button:nth-child(2) {
      left: -6px;
      bottom: -68px;
      background-color: orange;
      animation: 750ms ease 1 spin-x;
    }

    button:nth-child(3) {
      left: -6px;
      bottom: -102px;
      animation: 900ms ease 1 spin-x;
    }
`

const Marker = styled.img`
    width: 18px;
    height: 80px;
    display: var(--display);
    position: absolute;
    left: var(--x);
    top: var(--y);
    z-index: 4;
`

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);

  p {
    text-align: center;
    max-width: 35ch;
  }

  h2 {
    font-size: 2rem;
    animation: 1s ease 1 fly-in;
  }
`

const LevelPage = ({ name, imageUrl, musicPath }) => {
  const musicRef = useRef(null);

  const [gameStarted, setGameStarted] = useState(false); 
  const [gameOver, setGameOver] = useState(false);
  const [originalImageSize, setOriginalImageSize] = useState({ width: 0, height: 0 });
  const [displayHitBox, setDisplayHitBox] = useState({ display: "none" });
  const [clickPosition, setClickedPosition] = useState({ x: 0, y: 0});
  const [pixelPosition, setPixelPosition] = useState({ x: 0, y: 0});
  const [itemState, setItemState] = useState({ sonic: false, tails: false, knuckles: false});
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(false);


  const { playSFX } = useContext(GlobalContext);

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;

    // Load the image to get its original dimensions
    image.onload = () => {
      setOriginalImageSize({ width: image.width, height: image.height });
    };
  }, [imageUrl]);

  const startGame = async () => {
    setLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_API}/levels/${name}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        },
      }
    )

    if (response.ok) {
      const data = await response.json()
      sessionStorage.setItem("token", data.token);
      setGameStarted(true)
    } else {
      const errorData = await response.json();
      console.error(`${errorData.message}`);
    }
    setLoading(false);
  }

  const handleImageClick = (e) => {
    playSFX("Option Select")
    setDisplayHitBox({display: "none"});
    setTimeout(() => {
      setDisplayHitBox({display: "flex"});
    }, 0);
    
    const rect = e.target.getBoundingClientRect(); // Get the image's position and size
    const x = e.clientX - rect.left; // Calculate x relative to the image
    const y = e.clientY - rect.top;  // Calculate y relative to the image

    // Normalize the coordinates based on the original image size
    const normalizedX = (x / rect.width) * originalImageSize.width;
    const normalizedY = (y / rect.height) * originalImageSize.height;

    // Uncomment in the event I need to check x and y coords
    // console.log(normalizedX, normalizedY);
    setPixelPosition({ x: normalizedX, y: normalizedY});
    setClickedPosition({ x: x - 35, y: y - 35})
  };

  const handleSubmit = async (item) => {
    setDisplayHitBox({display: "none"});

    const response = await fetch(
      `${import.meta.env.VITE_API}/levels`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: item.toLowerCase(), levelId: name, x: pixelPosition.x, y: pixelPosition.y }),
      }
    )

    if (response.ok) {

      const data = await response.json()
      if (data.isFound) {
        setMarkers([...markers, {display: 'flex', x: clickPosition.x + 20, y: clickPosition.y - 40}])
        playSFX("correct");
        setItemState({ ...itemState, [item]: true });
        if (data.allFound) {
          setGameOver(true);
          musicRef.current.pause();
          playSFX("Level Complete")
        } 
      } else {
        playSFX("wrong");
      }
    } else {
      const errorData = await response.json();
      console.error(`${errorData.message}`);
    }
  }

  useEffect(() => {
    if (gameStarted && musicRef.current) {
      musicRef.current.play(); 
    } 

    if (gameOver) {
      musicRef.current.pause();
    }
  }, [gameStarted, gameOver]);

  return (
    <>
      <Header title={name}/>
      <div className="navContainer">
          {gameStarted && !gameOver ? 
            (<GameScore itemState={itemState} gameOver={gameOver} />) : 
            <nav>
            <Button text="Home" href={"/"}/>
            <Button text="About" href={"/about"}/>
            <Button text="Credits" href={"/credits"}/>
            </nav>
          }
          <MusicPlayer ref={musicRef} source={musicPath} autoPlay={false}/>
      </div>
      <StyledMain>
          {loading ? (
            <Loader />
          ) : (
            gameOver ? (
              <GameOver levelName={name} />
            ) : (
                gameStarted ? (
                  <StyledImgContainer>
                  <StyledImgArea src={imageUrl} alt="" onClick={handleImageClick} />
                  {markers.map((marker, index) => {
                    return <Marker key={index} src="/assets/starpost.gif" style={{ '--display': marker.display, '--x': marker.x + "px", '--y': marker.y + "px"}}/>
                  })}
                  {displayHitBox.display === "flex" ? ( 
                  <HitBox style={{ '--display': displayHitBox.display, '--x': clickPosition.x + "px", '--y': clickPosition.y + "px"}}>
                    <button onClick={() => handleSubmit('sonic')}>Sonic</button>
                    <button onClick={() => handleSubmit('tails')}>Tails</button>
                    <button onClick={() => handleSubmit('knuckles')}>Knuckles</button>
                  </HitBox>) : null}
                </StyledImgContainer>
                ) : (
                <StyledModal>
                    <h2>Ready?</h2>
                    <Button text="Start" func={startGame} style={{animation: "1s linear infinite pulse-red", fontSize: "22px"}}/>
                    <h3>Instructions</h3>
                    <p>Search image for Sonic, Tails and Knuckles</p>
                    <p>Click their image and select the right character name</p>
                    <p>If the character name and location is correct they'll be marked as found <i style={{color: "green"}} className="fa-solid fa-circle-check fa-lg"></i></p>
                    <p>Try to find them all in the shortest time possible</p>
                </StyledModal>
              )
            )
          )}
      </StyledMain>
      <Footer />
    </>
  )
};

export default LevelPage;