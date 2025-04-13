import React from "react";
import ImageArea from "./components/ImageArea";
import CharacterList from "./components/CharacterList";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <header>
        <h1>Where's Sonic Now</h1>
        <p>Can you find Sonic and his friends?</p>
        <div style={{display: "flex"}}>
          <CharacterList />
          <Timer />
        </div>
      </header>
      <main>
        <ImageArea />
      </main>
      <footer>Created by Wade</footer>
    </>
  )
}

export default App
