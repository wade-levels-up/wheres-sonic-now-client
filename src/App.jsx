import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import ImageArea from "./components/ImageArea";
import CharacterList from "./components/CharacterList";
import Timer from "./components/Timer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/ice-cap-zone",
    element: <ImageArea />
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
