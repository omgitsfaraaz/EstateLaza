import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyle from './globalStyles';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData, InfoData1 } from './data/InfoData';
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css';
import InfoSection1 from './components/InfoSection1';


function App() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection1 {...InfoData1} />
      <div className="grids">
        <div data-aos="zoom-in-right" className="boxes">1</div>
        <div data-aos="zoom-out" className="boxes">2</div>
        <div data-aos="zoom-out-up" className="boxes">3</div>
        <div data-aos="zoom-out-down" className="boxes">4</div>
        <div data-aos="zoom-out-left" className="boxes">5</div>
      </div>
    </>
  );
}

export default App;
