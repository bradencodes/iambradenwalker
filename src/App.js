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

  const [ratio, setRatio] = useState(
    document.documentElement.clientWidth / document.documentElement.clientHeight
  );

  const updateRatio = () => {
    setRatio(
      document.documentElement.clientWidth /
        document.documentElement.clientHeight
    );
  };

  return (
    <div className='App'>
      <Nav ratio={ratio} />
      <div className={`content ${ratio > 1 ? 'sideContent' : 'bottomContent'}`}>
        <Intro ratio={ratio} />
        <div style={{ width: '100%', height: '3000px' }}></div>
      </div>
      <div id='frame' />
    </div>
  );
}

export default App;
