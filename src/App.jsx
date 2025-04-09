import styled from "styled-components"

const StyledCanvas = styled.canvas`
  border: 1px solid black;
  width: 100vw;
  height: 100vh;
  background-color: slategray;
`

function logMouseCoordinates(e) {
  console.log(e.pageX, e.pageY);
}

function App() {
  return <StyledCanvas id="myCanvas" onClick={logMouseCoordinates}></StyledCanvas>
}

export default App
