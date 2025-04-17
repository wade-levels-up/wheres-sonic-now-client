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


const LevelPage = ({ name, imageUrl, musicPath }) => {
  const [itemSelection, setItemSelection] = useState("sonic");
  const [originalImageSize, setOriginalImageSize] = useState({ width: 0, height: 0 });
  const [displayHitBox, setDisplayHitBox] = useState("none");
  const [clickPosition, setClickedPosition] = useState({ x: 0, y: 0});
  const [pixelPosition, setPixelPosition] = useState({ x: 0, y: 0}); 

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

    console.log(normalizedX, normalizedY);
    setPixelPosition({ x: normalizedX, y: normalizedY});
    setClickedPosition({ x: e.clientX - 30, y: e.clientY - 25})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplayHitBox("none");

    console.log(itemSelection, name, clickPosition.x, clickPosition.y)

    const response = await fetch(
      `http://localhost:3030/levels`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: itemSelection, levelId: name, x: pixelPosition.x, y: pixelPosition.y }),
      }
    )

    if (response.ok) {
      const data = await response.json()
      if (data.isFound) {
        alert(`You found ${itemSelection}!`);
      }
    } else {
      const errorData = await response.json();
      console.error(`${errorData.message}`);
    }
  }

  return (
    <>
      <Header title={name}/>
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
                <form onSubmit={handleSubmit} action="">
                  <label htmlFor="item"></label>
                  <select name="item" id="item" value={itemSelection} onChange={(e) => setItemSelection(e.target.value)}>
                    <option value="sonic">Sonic</option>
                    <option value="tails">Tails</option>
                    <option value="knuckles">Knuckles</option>
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
            </StyledMain>
      <Footer />
    </>
  )
};

export default LevelPage;