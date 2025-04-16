import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import MusicPlayer from "./MusicPlayer";
import styled from "styled-components";

const StyledImgArea = styled.img`
  min-width: 1000px;
  max-width: 1500px;
  flex-shrink: 0;
  height: auto;
  cursor: crosshair;
  position: relative;
`

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


const LevelPage = ({ imageUrl, musicPath }) => {
  const [originalImageSize, setOriginalImageSize] = useState({ width: 0, height: 0 });
  const [displayHitBox, setDisplayHitBox] = useState("none");
  const [clickPosition, setClickedPosition] = useState({ x: 0, y: 0});

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;

    // Load the image to get its original dimensions
    image.onload = () => {
      setOriginalImageSize({ width: image.width, height: image.height });
    };
  }, [imageUrl]);

  const handleImageClick = (e) => {
    setDisplayHitBox("flex");
    const rect = e.target.getBoundingClientRect(); // Get the image's position and size
    const x = e.clientX - rect.left; // Calculate x relative to the image
    const y = e.clientY - rect.top;  // Calculate y relative to the image

    // Normalize the coordinates based on the original image size
    const normalizedX = (x / rect.width) * originalImageSize.width;
    const normalizedY = (y / rect.height) * originalImageSize.height;

    console.log(normalizedX, normalizedY );
    setClickedPosition({ x: e.clientX - 30, y: e.clientY - 25})

    // if ((normalizedX > 39 && normalizedX < 123) &&(normalizedY > 520 && normalizedY < 600)) {
    //   alert("You found Knuckles!")
    // }

    // if ((normalizedX > 898 && normalizedX < 1002) &&(normalizedY > 1370 && normalizedY < 1467)) {
    //   alert("You found Tails!")
    // }

    // if ((normalizedX > 2439 && normalizedX < 2537) &&(normalizedY > 872 && normalizedY < 975)) {
    //   alert("You found Sonic!")
    // }
  };

  return (
    <>
      <Header title="Where's Sonic Now?"/>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", flexWrap: "wrap"}}>
                <nav style={{display: "flex", gap: "16px"}}>
                    <Button text="Home" href={"/"}/>
                    <Button text="About" href={"/about"}/>
                    <Button text="Credits" href={"/credits"}/>
                </nav>
                <MusicPlayer source={musicPath}/>
            </div>
            <StyledMain>
              <StyledImgArea src={imageUrl} alt="" onClick={handleImageClick} />
              <HitBox style={{ '--display': displayHitBox, '--x': clickPosition.x + "px", '--y': clickPosition.y + "px"}}>
                <span>Who is this?</span>
                <form action="">
                  <label htmlFor="item"></label>
                  <select name="item" id="item">
                    <option value="sonic">Sonic</option>
                    <option value="tails">Tails</option>
                    <option value="knuckles">Knuckles</option>
                  </select>
                  <button type="submit">Submit</button>
                </form>
              </HitBox>
            </StyledMain>
      <Footer />
    </>
  )
};

export default LevelPage;