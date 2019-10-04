import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';
import { Flipper, Flipped } from 'react-flip-toolkit';

const Intro = ({ ratio }) => {
  //Intersection observers
  const [meText, meTextInView] = useInView({
    threshhold: 1
  });
  const [roleText, roleTextInView] = useInView({
    threshhold: 1
  });
  const [adjectiveText, adjectiveTextInView] = useInView({
    threshhold: 1
  });
  const [realText, realTextInView] = useInView({
    threshhold: 1
  });
  const [projectsText, projectsTextInView] = useInView({
    threshhold: 1
  });

  const [meSection, meSectionInView] = useInView({
    threshhold: 1
  });
  const [roleSection, roleSectionInView] = useInView({
    threshhold: 1
  });
  const [adjectiveSection, adjectiveSectionInView] = useInView({
    threshhold: 1
  });
  const [realSection, realSectionInView] = useInView({
    threshhold: 1
  });
  const [projectsSection, projectsSectionInView] = useInView({
    threshhold: 1
  });
  let allInView = +`${+meTextInView}${+roleTextInView}${+adjectiveTextInView}`;

  const snapSectionStyle = {
    marginBottom: ratio > 1 ? 'calc(-20vh - 2.6vw)' : 'calc(-20vh - 3.7vw)'
  };

  const calcFontSize = {
    fontSize: ratio > 1 ? '7vw' : `11vw`
  };

  const overlaySectionStyle = {
    width: ratio > 1 ? '67vw' : '100%'
  };

  const makeInvisibleText = words => (
    <>
      {words.map(word => (
        <span key={word} className='invisible'>
          {word}
        </span>
      ))}
    </>
  );

  const makeVisibleText = words => (
    <>
      {words.map(word => (
        <span key={word}>{word}</span>
      ))}
    </>
  );

  const makeAnimatedText = words => {
    const onAppear = (el, i) => {
      const childSpan = el.querySelector('span');
      el.style.opacity = 1;
      childSpan.classList.add('slideIn');
      setTimeout(() => {
        childSpan.classList.remove('slideIn');
      }, 350);
    };

    const onExit = (el, i, removeElement) => {
      const childSpan = el.querySelector('span');
      childSpan.classList.add('slideOut');
      setTimeout(removeElement, 300);
    };

    return (
      <>
        {words.map(word => (
          <Flipped key={word} flipId={word} onAppear={onAppear} onExit={onExit}>
            <div className='hideOverflow'>
              <span>{word}</span>
            </div>
          </Flipped>
        ))}
      </>
    );
  };

  const handleOverlayText = () => {
    if (meTextInView)
      return (
        <>
          {makeAnimatedText(['I ', 'AM '])}
          {makeInvisibleText(['BRADEN ', 'WALKER.'])}
        </>
      );
    else if (roleTextInView)
      return (
        <>
          {makeAnimatedText(['I ', 'AM ', 'A '])}
          {makeInvisibleText(['FULL ', 'STACK ', 'DEVELOPER.'])}
        </>
      );
    else if (adjectiveTextInView)
      return (
        <>
          {makeAnimatedText(['I ', 'AM '])}
          {makeInvisibleText(['CREATIVE.'])}
        </>
      );
  };

  return (
    <div className='introContainer'>
      <div
        className={`snapSection ${allInView > 1 ? 'snap' : ''}`}
        style={snapSectionStyle}
        ref={meSection}
      >
        <h1 className='introText' style={calcFontSize} ref={meText}>
          {makeInvisibleText(['I ', 'AM '])}
          {makeVisibleText(['BRADEN ', 'WALKER.'])}
        </h1>
      </div>
      <div
        className={`snapSection ${allInView > 1 ? 'snap' : ''}`}
        style={snapSectionStyle}
        ref={roleSection}
      >
        <h2 className='introText' style={calcFontSize} ref={roleText}>
          {makeInvisibleText(['I ', 'AM ', 'A '])}
          {makeVisibleText(['FULL ', 'STACK ', 'DEVELOPER.'])}
        </h2>
      </div>
      <div
        className={`snapSection ${allInView > 1 ? 'snap' : ''}`}
        style={snapSectionStyle}
        ref={adjectiveSection}
      >
        <h2 className='introText' style={calcFontSize} ref={adjectiveText}>
          {makeInvisibleText(['I ', 'AM '])}
          {makeVisibleText(['CREATIVE.'])}
        </h2>
      </div>

      <Flipper flipKey={allInView} spring={'wobbly'}>
        <div className='overlaySection' style={overlaySectionStyle}>
          <h2 className='introText' style={calcFontSize}>
            {handleOverlayText()}
          </h2>
        </div>
      </Flipper>
    </div>
  );
};

export default Intro;
