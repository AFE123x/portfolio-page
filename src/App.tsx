import { useState, useEffect } from 'react';
import Navbar from './assets/Navbar'
import Home from   './assets/Home'
import About from './assets/About';
import Experience from './assets/Experience';
import Projects from './assets/Projects';
import Interests from './assets/Interests';
import Contact from './assets/Contact';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Randomly assign PlayStation colors (blue, red, green, pink) to each line
  const playstationColors = ['blue', 'red', 'green', 'pink'];
  const getRandomColor = () => playstationColors[Math.floor(Math.random() * playstationColors.length)];
  
  const horizontalColors = Array.from({ length: 4 }, () => getRandomColor());
  const verticalColors = Array.from({ length: 3 }, () => getRandomColor());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'transparent' }}>
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      
      {/* Tron animated lines - PlayStation themed */}
      <div className="tron-lines">
        <div className={`tron-line-horizontal-${horizontalColors[0]}`}></div>
        <div className={`tron-line-horizontal-${horizontalColors[1]}`}></div>
        <div className={`tron-line-horizontal-${horizontalColors[2]}`}></div>
        <div className={`tron-line-horizontal-${horizontalColors[3]}`}></div>
        <div className={`tron-line-vertical-${verticalColors[0]}`}></div>
        <div className={`tron-line-vertical-${verticalColors[1]}`}></div>
        <div className={`tron-line-vertical-${verticalColors[2]}`}></div>
      </div>
      {/* Tron corner accents */}
      <div className="tron-corner tron-corner-top-left"></div>
      <div className="tron-corner tron-corner-top-right"></div>
      <div className="tron-corner tron-corner-bottom-left"></div>
      <div className="tron-corner tron-corner-bottom-right"></div>
      
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Interests/>
      <Contact/>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
