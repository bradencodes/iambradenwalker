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

  const [snapState, setSnapState] = useState({
    closestSection: '#meSection',
    isSnapping: false,
    timer: null
  });

  const scrollToClosestSection = () => {
    if (!snapState.closestSection) return;
    function getElementY(query) {
      return (
        window.pageYOffset +
        document.querySelector(query).getBoundingClientRect().top
      );
    }

    function doScrolling(element, duration) {
      var startingY = window.pageYOffset;
      var elementY = getElementY(element);
      // If element is close to page's bottom then window will scroll only to some position above the element.
      var targetY =
        document.body.scrollHeight - elementY < window.innerHeight
          ? document.body.scrollHeight - window.innerHeight
          : elementY;
      var diff = targetY - startingY;
      // Easing function: easeInOutCubic
      // From: https://gist.github.com/gre/1650294
      var easing = function(t) {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      var start;

      if (!diff) return;
      else {
        setSnapState({ ...snapState, isSnapping: true });
      }

      // Bootstrap our animation - it will get called right before next frame shall be rendered.
      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        // Elapsed miliseconds since start of scrolling.
        var time = timestamp - start;
        // Get percent of completion in range [0, 1].
        var percent = Math.min(time / duration, 1);
        // Apply the easing.
        // It can cause bad-looking slow frames in browser performance tool, so be careful.
        percent = easing(percent);

        window.scrollTo(0, startingY + diff * percent);

        // Proceed with animation as long as we wanted it to.
        if (time < duration && snapState.isSnapping) {
          window.requestAnimationFrame(step);
        } else {
          setSnapState({ ...snapState, isSnapping: false });
        }
      });
    }

    doScrolling(snapState.closestSection, 350);
  };

  const setTimer = () => {
    setSnapState({ ...snapState, isSnapping: false });
    if (snapState.timer) window.clearTimeout(snapState.timer);
    setSnapState({
      ...snapState,
      timer: window.setTimeout(() => {
        scrollToClosestSection();
      }, 50)
    });
  };

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
    window.addEventListener('scroll', setTimer);
    return () => {
      window.removeEventListener('resize', updateRatio);
      window.removeEventListener('scroll', setTimer);
    };
  }, [Ratio]);

  return (
    <div className='App'>
      <Nav ratio={ratio} />
      <div
        className={`content ${ratio.isWide ? 'sideContent' : 'bottomContent'}`}
      >
        <Intro
          ratio={ratio}
          snapState={snapState}
          setSnapState={setSnapState}
        />
        <div style={{ width: '100%', height: '3000px' }}></div>
      </div>
      <div id='frame' style={{ borderWidth: `${1 + 0.5 / ratio.value}vw` }} />
    </div>
  );
}

export default App;
