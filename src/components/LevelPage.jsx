import React, { useState, useEffect, useContext, useRef } from "react";
import { GlobalContext } from "../App";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import MusicPlayer from "./MusicPlayer";
import GameScore from "./GameScore";
import styled from "styled-components";

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
    background: center / contain repeat-x url("/src/assets/background-title.gif");
    justify-content: center;
    align-items: center;

    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    background-color: blue;
`

const HitBox = styled.div`
    width: 50px;
    height: 50px;
    border: 3px solid red;
    border-radius: 6px;
    display: var(--display);
    position: absolute;
    left: var(--x);
    top: var(--y);
    z-index: 5;

    span {
      position: absolute;
      text-align: center;
      width: 100px;
      background-color: rgba(0, 0, 0, 0.8);
      left: -24px;
      top: -36px;
      border-radius: 6px;
    }

    form {
      position: relative;
      top: 60px;
      left: -22px;
    }

    select {
      cursor: pointer;
      padding: 3px 6px;
      color: aliceblue;
      background-color: black;
      border-radius: 6px;
    }

    button {
      width: 100%;
      color: aliceblue;
      background-color: red;
      border-radius: 6px;
    }
`

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);

  h2 {
    font-size: 2rem;
    animation: 1s ease 1 fly-in;
  }
`

const LevelPage = ({ name, imageUrl, musicPath }) => {
  const musicRef = useRef(null);

  const [gameStarted, setGameStarted] = useState(false); 
  const [gameOver, setGameOver] = useState(false);
  const [itemSelection, setItemSelection] = useState("Sonic");
  const [originalImageSize, setOriginalImageSize] = useState({ width: 0, height: 0 });
  const [displayHitBox, setDisplayHitBox] = useState("none");
  const [clickPosition, setClickedPosition] = useState({ x: 0, y: 0});
  const [pixelPosition, setPixelPosition] = useState({ x: 0, y: 0});
  const [itemState, setItemState] = useState({ sonic: false, tails: false, knuckles: false});


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

    const response = await fetch(
      `http://localhost:3030/levels/${name}`,
      {
        method: "GET",
        credentials: "include", // Include cookies in the req
      }
    )

    if (response.ok) {
      setGameStarted(true)
    } else {
      const errorData = await response.json();
      console.error(`${errorData.message}`);
    }
  }

  const handleImageClick = (e) => {
    setDisplayHitBox("flex");
    const rect = e.target.getBoundingClientRect(); // Get the image's position and size
    const x = e.clientX - rect.left; // Calculate x relative to the image
    const y = e.clientY - rect.top;  // Calculate y relative to the image

    // Normalize the coordinates based on the original image size
    const normalizedX = (x / rect.width) * originalImageSize.width;
    const normalizedY = (y / rect.height) * originalImageSize.height;

    console.log(normalizedX, normalizedY);
    setPixelPosition({ x: normalizedX, y: normalizedY});
    setClickedPosition({ x: x - 25, y: y - 25})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplayHitBox("none");

    console.log(itemSelection, name, clickPosition.x, clickPosition.y)

    const response = await fetch(
      `http://localhost:3030/levels`,
      {
        method: "POST",
        credentials: "include", // Include cookies in the req
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: itemSelection.toLowerCase(), levelId: name, x: pixelPosition.x, y: pixelPosition.y }),
      }
    )

    if (response.ok) {
      const data = await response.json()
      if (data.isFound) {
        playSFX("correct");
        const lowerCaseItemSelection = itemSelection.toLowerCase()
        setItemState({ ...itemState, [lowerCaseItemSelection]: true });
        if (data.allFound) {
          setGameOver(true);
          musicRef.current.pause();
          playSFX("Level Complete")
          console.log(`You found them all!`);
        } else {
          console.log(`You found ${itemSelection}!`);
        }
      } else {
        playSFX("wrong");
        console.log(`That's not ${itemSelection}!`)
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
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", flexWrap: "wrap"}}>
                <nav style={{display: "flex", gap: "16px"}}>
                    <Button text="Home" href={"/"}/>
                    <Button text="About" href={"/about"}/>
                    <Button text="Credits" href={"/credits"}/>
                </nav>
                {gameStarted ? (<GameScore itemState={itemState} gameOver={gameOver} />) : <></>}
                <MusicPlayer ref={musicRef} source={musicPath} autoPlay={false}/>
            </div>
            <StyledMain>
              {gameStarted ? (
                  <StyledImgContainer>
                  <StyledImgArea src={imageUrl} alt="" onClick={handleImageClick} />
                  <HitBox style={{ '--display': displayHitBox, '--x': clickPosition.x + "px", '--y': clickPosition.y + "px"}}>
                    <span>Who is this?</span>
                    <form onSubmit={handleSubmit} action="">
                      <label htmlFor="item"></label>
                      <select name="item" id="item" value={itemSelection} onChange={(e) => setItemSelection(e.target.value)}>
                        <option value="Sonic">Sonic</option>
                        <option value="Tails">Tails</option>
                        <option value="Knuckles">Knuckles</option>
                      </select>
                      <label hidden htmlFor="x">
                        <input type="number" name="x" id="x" value={clickPosition.x} readOnly/>
                      </label>
                      <label hidden htmlFor="y">
                        <input type="number" name="y" id="y" value={clickPosition.y} readOnly/>
                      </label>
                      <button type="submit">Submit</button>
                    </form>
                  </HitBox>
                </StyledImgContainer>
              ) : (
                <StyledModal>
                    <h2>Ready?</h2>
                    <Button text="Start" func={startGame} style={{animation: "1s linear infinite pulse-red"}}/>
                </StyledModal>
              )}
            </StyledMain>
      <Footer />
    </>
  )
};

export default LevelPage;