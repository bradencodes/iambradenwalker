import React, { useState, useEffect } from 'react';
import './styles/main.css';

import Intro from './components/Intro';
import Nav from './components/Nav';

function App() {
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

  useEffect(() => {
    const updateRatio = () => {
      setRatio(
        new Ratio(
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
        )
      );
    };

    window.addEventListener('resize', updateRatio);
    return () => {
      window.removeEventListener('resize', updateRatio);
    };
  }, [Ratio]);

  return (
    <div className='App'>
      <div
        className={`content ${ratio.isWide ? 'sideContent' : 'bottomContent'}`}
      >
        <Intro ratio={ratio} />
        <div style={{ width: '100%', height: '300vh' }}></div>
      </div>
      <Nav ratio={ratio} />
      <div
        id='frame'
        style={{
          borderWidth: `${1 + 0.5 / ratio.value}vw`,
          width: '100%'
        }}
      />
    </div>
  );
}

export default App;
