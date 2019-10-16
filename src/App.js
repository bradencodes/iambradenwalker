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

  function getScrollbarWidth() {
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
  }

  let scrollbarWidth = getScrollbarWidth();

  return (
    <div className='App'>
      <div
        className={`content ${ratio.isWide ? 'sideContent' : 'bottomContent'}`}
      >
        <Intro ratio={ratio} scrollbarWidth={scrollbarWidth} />
        <div style={{ width: '100%', height: '300vh' }}></div>
      </div>
      <Nav ratio={ratio} />
      <div
        id='frame'
        style={{
          borderWidth: `${1 + 0.5 / ratio.value}vw`,
          width: `calc(100% - ${scrollbarWidth}px)`
        }}
      />
    </div>
  );
}

export default App;
