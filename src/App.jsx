import React, { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LevelSelectPage from "./components/LevelSelectPage";
import HomePage from "./components/HomePage";
import LevelPage from "./components/LevelPage";
import AboutPage from "./components/AboutPage";
import CreditsPage from "./components/CreditsPage";

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
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/credits",
    element: <CreditsPage />,
  },
  {
    path: "/angel-island-zone",
    element: <LevelPage name={"angel-island-zone"} musicPath={"/assets/angelislandzone.mp3"} imageUrl={"src/assets/angel-island-zone.webp"}/>
  },
  {
    path: "/hydro-city-zone",
    element: <LevelPage name={"hydro-city-zone"} musicPath={"/assets/hydrocityzone.mp3"} imageUrl={"src/assets/hydro-city-zone.webp"}/>
  },
  {
    path: "/marble-garden-zone",
    element: <LevelPage name={"marble-garden-zone"} musicPath={"/assets/marblegardenzone.mp3"} imageUrl={"src/assets/marble-garden-zone.webp"}/>
  },
  {
    path: "/carnival-night-zone",
    element: <LevelPage name={"carnival-night-zone"} musicPath={"/assets/carnivalnightzone.mp3"} imageUrl={"src/assets/carnival-night-zone.webp"}/>
  },
  {
    path: "/ice-cap-zone",
    element: <LevelPage name={"ice-cap-zone"} musicPath={"/assets/icecapzone.mp3"} imageUrl={"src/assets/ice-cap-zone.webp"}/>
  },
  {
    path: "/launch-base-zone",
    element: <LevelPage name={"launch-base-zone"} musicPath={"/assets/launchbasezone.mp3"} imageUrl={"src/assets/launch-base-zone.webp"}/>
  },
])

//SFX

const sfxLevelSelect = new Audio("/assets/sfx-level-select.mp3")
const sfxOptionSelect = new Audio("/assets/sfx-option-select.mp3")
const sfxWrong = new Audio("/assets/sfx-wrong.mp3")
const sfxCorrect = new Audio("/assets/sfx-correct.mp3")
const sfxLevelComplete = new Audio("/assets/level-complete.mp3")
const sfxChaching = new Audio("/assets/sfx-chaching.mp3")

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

  if (sfxName === "wrong") {
    sfxWrong.play()
    sfxWrong.currentTime = 0;
  }

  if (sfxName === "correct") {
    sfxCorrect.play()
    sfxCorrect.currentTime = 0;
  }

  if (sfxName === "Level Complete") {
    sfxLevelComplete.play()
    sfxLevelComplete.currentTime = 0;
  }

  if (sfxName === "Chaching") {
    sfxChaching.play()
    sfxChaching.currentTime = 0;
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
