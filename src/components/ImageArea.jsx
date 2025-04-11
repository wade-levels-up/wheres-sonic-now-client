import React, { useState, useEffect } from "react";

const ImageArea = () => {
  const imageUrl = "src/assets/ice-cap-zone.webp";
  const [originalImageSize, setOriginalImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;

    // Load the image to get its original dimensions
    image.onload = () => {
      setOriginalImageSize({ width: image.width, height: image.height });
    };
  }, [imageUrl]);

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect(); // Get the image's position and size
    const x = e.clientX - rect.left; // Calculate x relative to the image
    const y = e.clientY - rect.top;  // Calculate y relative to the image

    // Normalize the coordinates based on the original image size
    const normalizedX = (x / rect.width) * originalImageSize.width;
    const normalizedY = (y / rect.height) * originalImageSize.height;

    console.log(normalizedX, normalizedY );

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

  return <img
        src={imageUrl}
        alt=""
        onClick={handleImageClick}
        style={{ maxWidth: "100%", height: "auto", cursor: "crosshair" }}
      />
};

export default ImageArea;