import React from "react";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"
import Contact from "../src/Pages/Contact";
import Navbar from "./Components/Navbar/Navbar"
// import Wrapper from "../src/components/Wrapper/Wrapper"

import './App.css';




function App() {
  return (
    <div className="section">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;