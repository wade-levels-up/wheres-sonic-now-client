import { useEffect, useRef } from "react";
import styled from "styled-components"
import iceCapZone from "./assets/ice-cap-zone.webp"

const StyledCanvas = styled.canvas`
  border: 1px solid black;
  background-image: url(${iceCapZone});
  background-repeat: no-repeat;
  background-size: cover;
  width: fit-content;
  height: fit-content;
  background-color: aliceblue;
`

function logMouseCoordinates(e, canvasRef) {
  const canvas = canvasRef.current;
  const rect = canvas.getBoundingClientRect(); // Get canvas position relative to the viewport
  const x = e.clientX - rect.left; // Adjust X coordinate
  const y = e.clientY - rect.top;  // Adjust Y coordinate
  const ctx = canvas.getContext("2d");

  // Clear the entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "red"; // Set the border color to red
  ctx.lineWidth = 5; // Set the border thickness
  ctx.strokeRect(x - 35, y - 35, 70, 70); // Draw a square centered at the mouse position
}

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
  }, []);

  return <StyledCanvas id="myCanvas" ref={canvasRef} onClick={(e) => logMouseCoordinates(e, canvasRef)}></StyledCanvas>
}

export default App
