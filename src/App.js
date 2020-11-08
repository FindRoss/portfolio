import React, { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Tech from "./components/Tech/Tech";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [bodyFixed, setBodyFixed] = useState(false);

  const setBodyFixedFunc = () => {
    setBodyFixed(true);
  }

  const setBodyUnfixedFunc = () => {
    setBodyFixed(false);
  }


  return (
    <>
      <div className={`App ${bodyFixed ? 'p-fixed' : ''}`}>
        <Header setBodyFixedFunc={setBodyFixedFunc} setBodyUnfixedFunc={setBodyUnfixedFunc} />
        <div className="main-content">
          <Hero />
          <About />
          <Tech />
          <Projects />
        </div>
        <Footer />
      </div >
    </>
  );
}

export default App;
