import React, { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import ImageArea from "./components/ImageArea";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ice-cap-zone",
    element: <ImageArea />
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
