// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Navbar from './assets/Navbar'
import Home from   './assets/Home'
import Experience from './assets/Experience';
import Projects from './assets/Projects';
import Contact from './assets/Contact';
function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'transparent' }}>
      {/* Tron animated lines */}
      <div className="tron-lines">
        <div className="tron-line-horizontal"></div>
        <div className="tron-line-horizontal"></div>
        <div className="tron-line-horizontal"></div>
        <div className="tron-line-horizontal"></div>
        <div className="tron-line-vertical"></div>
        <div className="tron-line-vertical"></div>
        <div className="tron-line-vertical"></div>
      </div>
      {/* Tron corner accents */}
      <div className="tron-corner tron-corner-top-left"></div>
      <div className="tron-corner tron-corner-top-right"></div>
      <div className="tron-corner tron-corner-bottom-left"></div>
      <div className="tron-corner tron-corner-bottom-right"></div>
      <Navbar/>
      <Home/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
