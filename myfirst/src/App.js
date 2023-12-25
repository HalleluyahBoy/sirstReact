import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./door.png";
import happy from "./happy.jpg";

// The NAv section, the display will be flex, depending on the screensize, also here threr will be 3 components, portfolio, logo and the hamburger that will animate smoothly and a ul will slide omn to the page, when any of the uls are clicked, the <ul will slide in a section which it it should render a a div with sme text
function Nav() {
  // create the nav with three compononts, logo, search and about
  // con
  return (
    // create the nav with three compononts, logo, search and about
    <div>Evidence</div>
  );
}

function App() {
  const [imageSource, setImageSource] = useState(logo);

  useEffect(() => {
    autoSlide(setImageSource);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="App">
      {Nav()}
      <header className="App-header">
        <img src={imageSource} className="App-logo" alt="logo" id="slide" />
        <p>
          Evidence go to <code>src/App.js</code>, edit save to reload.
        </p>
        <div className="HeroSection">Erico</div>
        <a
          className="App-link"
          href="Baza.ng"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenCode.hq
        </a>
      </header>
    </div>
  );
}

export default App;
