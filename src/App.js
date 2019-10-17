import React, { useState, useEffect, useRef } from 'react';
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

  const [isStuck, setIsStuck] = useState(false);

  const lastKnownScroll = useRef(0);

  useEffect(() => {
    const updateRatio = () => {
      setRatio(
        new Ratio(
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
        )
      );
    };

    const isChromium = window.chrome;
    const winNav = window.navigator;
    const vendorName = winNav.vendor;
    const isOpera = typeof window.opr !== 'undefined';
    const isIEedge = winNav.userAgent.indexOf('Edge') > -1;
    const isIOSChrome = winNav.userAgent.match('CriOS');

    const handleWheel = () => {
      if (
        isIOSChrome ||
        (isChromium !== null &&
          typeof isChromium !== 'undefined' &&
          vendorName === 'Google Inc.' &&
          isOpera === false &&
          isIEedge === false)
      ) {
        if (lastKnownScroll.current === window.scrollY) {
          setIsStuck(true);
          document.body.setAttribute(
            'style',
            'scroll-snap-type: none !important;'
          );
          document
            .getElementsByTagName('html')[0]
            .setAttribute('style', 'scroll-snap-type: none !important;');
        } else if (isStuck) {
          setIsStuck(false);
          document.body.setAttribute(
            'style',
            'scroll-snap-type: y mandatory !important;'
          );
          document
            .getElementsByTagName('html')[0]
            .setAttribute('style', 'scroll-snap-type: y mandatory !important;');
        }
        lastKnownScroll.current = window.scrollY;
        if (isStuck) {
          console.log('isStuck');
        }
      }
    };

    window.addEventListener('resize', updateRatio);
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('resize', updateRatio);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [Ratio, isStuck]);

  return (
    <div className='App'>
      <div
        className={`content ${ratio.isWide ? 'sideContent' : 'bottomContent'}`}
      >
        <Intro ratio={ratio} isStuck={isStuck} />
        <div style={{ width: '100%', height: '300vh' }}></div>
      </div>
      <Nav ratio={ratio} />
      <div
        id='frame'
        style={{
          borderWidth: `${1 + 0.5 / ratio.value}vw`
        }}
      />
    </div>
  );
}

export default App;
