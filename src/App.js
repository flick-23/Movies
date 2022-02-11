import "./App.css";
import React from "react";
import Hero from "./components/Hero/Hero";
import { MovieState } from "./components/Context/MovieContext";
function App() {
  return (
    <MovieState>
      <Hero />
    </MovieState>
  );
}

export default App;
