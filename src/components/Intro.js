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

  const calcPeek = {
    marginBottom: ratio > 1 ? 'calc(-20vh - 2.9vw)' : 'calc(-20vh - 3.7vw)'
  };

  const calcFontSize = {
    fontSize: ratio > 1 ? '8vw' : `11vw`
  };

  const overlaySectionStyle = {
    width: ratio > 1 ? '67vw' : '100%',
    position: 'fixed',
    right: 0,
    top: 0
  };

  const makeInvisibleText = words => (
    <>
      {words.map(word => (
        <span className='invisible'>{word}</span>
      ))}
    </>
  );

  const makeAnimatedText = words => (
    <>
      {words.map(word => (
        <span>{word}</span>
      ))}
    </>
  );

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
        className={`scrollerSection ${allInView > 1 ? 'snap' : ''}`}
        style={calcPeek}
        ref={meSection}
      >
        <h1 className='introText' style={calcFontSize} ref={meText}>
          {makeInvisibleText(['I ', 'AM '])}BRADEN WALKER.
        </h1>
      </div>
      <div
        className={`scrollerSection ${allInView > 1 ? 'snap' : ''}`}
        style={calcPeek}
        ref={roleSection}
      >
        <h2 className='introText' style={calcFontSize} ref={roleText}>
          {makeInvisibleText(['I ', 'AM ', 'A '])}FULL STACK DEVELOPER.
        </h2>
      </div>
      <div
        className={`scrollerSection ${allInView > 1 ? 'snap' : ''}`}
        style={calcPeek}
        ref={adjectiveSection}
      >
        <h2 className='introText' style={calcFontSize} ref={adjectiveText}>
          {makeInvisibleText(['I ', 'AM '])}CREATIVE.
        </h2>
      </div>

      <div className='overlaySection' style={overlaySectionStyle}>
        <h2 className='introText' style={calcFontSize}>
          {handleOverlayText()}
        </h2>
      </div>
    </div>
  );
};

export default Intro;
