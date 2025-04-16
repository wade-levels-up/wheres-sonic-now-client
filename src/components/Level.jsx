import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledImgArea = styled.img`
  min-width: 1000px;
  max-width: 1500px;
  flex-shrink: 0;
  height: auto;
  cursor: crosshair;
  position: relative;
`

const HitBox = styled.div`
    width: 50px;
    height: 50px;
    border: 3px solid red;
    display: var(--display);
    position: absolute;
    left: var(--x);
    top: var(--y);
    z-index: 5;
`


const Level = ({ imageUrl }) => {
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
    setClickedPosition({ x: e.clientX - 25, y: e.clientY - 25})

    if ((normalizedX > 39 && normalizedX < 123) &&(normalizedY > 520 && normalizedY < 600)) {
      alert("You found Knuckles!")
    }

    if ((normalizedX > 898 && normalizedX < 1002) &&(normalizedY > 1370 && normalizedY < 1467)) {
      alert("You found Tails!")
    }

    if ((normalizedX > 2439 && normalizedX < 2537) &&(normalizedY > 872 && normalizedY < 975)) {
      alert("You found Sonic!")
    }
  };

  return (
    <>
      <StyledImgArea src={imageUrl} alt="" onClick={handleImageClick} />
      <HitBox style={{ '--display': displayHitBox, '--x': clickPosition.x + "px", '--y': clickPosition.y + "px"}} />
    </>
  )
};

export default Level;