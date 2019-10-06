import React, { useState, useEffect } from 'react';
import './styles/main.css';

import Intro from './components/Intro';
import Nav from './components/Nav';

function App() {
  useEffect(() => {
    window.addEventListener('resize', updateRatio);
    return () => {
      window.removeEventListener('resize', updateRatio);
    };
  }, []);

  class Ratio {
    constructor(width, height) {
      this.value = width / height;
      this.isWide = this.value > 1;
      this.isTall = this.value <= 1;
    }
  }

  const [ratio, setRatio] = useState(
    new Ratio(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    )
  );

  const updateRatio = () => {
    setRatio(
      new Ratio(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  return (
    <div className='App'>
      <Nav ratio={ratio} />
      <div className={`content ${ratio.isWide ? 'sideContent' : 'bottomContent'}`}>
        <Intro ratio={ratio} />
        <div style={{ width: '100%', height: '3000px' }}></div>
      </div>
      <div id='frame' style={{ borderWidth: `${1 + 0.5 / ratio.value}vw` }} />
    </div>
  );
}

export default App;
