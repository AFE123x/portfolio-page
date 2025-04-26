// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Navbar from './assets/Navbar'
import Home from   './assets/Home'
import Experience from './assets/experience';
import Projects from './assets/Projects';
import Contact from './assets/Contact';
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
