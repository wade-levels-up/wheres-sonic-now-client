import React, { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LevelSelectPage from "./components/LevelSelectPage";
import HomePage from "./components/HomePage";
import Level from "./components/Level";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/level-select",
    element: <LevelSelectPage />,
  },
  {
    path: "/angel-island-zone",
    element: <Level imageUrl={"src/assets/ice-cap-zone.webp"}/>
  },
  {
    path: "/ice-cap-zone",
    element: <Level imageUrl={"src/assets/ice-cap-zone.webp"}/>
  },
])

//SFX

const sfxLevelSelect = new Audio("/src/assets/sfx-level-select.mp3")
const sfxOptionSelect = new Audio("/src/assets/sfx-option-select.mp3")


//////

export const GlobalContext = createContext({
  playSFX: () => {}
})

function playSFX(sfxName) {
  if (sfxName === "Level Select") {
    sfxLevelSelect.play()
    sfxLevelSelect.currentTime = 0;
  }

  if (sfxName === "Option Select") {
    sfxOptionSelect.play()
    sfxOptionSelect.currentTime = 0;
  }
}

function App() {
  return (
    <GlobalContext.Provider value={{ playSFX }}>
      <RouterProvider router={router}/>
    </GlobalContext.Provider>
  )
}

export default App
