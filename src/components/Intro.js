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

  let allInView = +`${+meTextInView}${+roleTextInView}${+adjectiveTextInView}${+realTextInView}${+projectsTextInView}`;

  console.log(adjectiveTextInView);

  const calcPeek = {
    marginBottom: ratio > 1 ? 'calc(-20vh - 2.9vw)' : 'calc(-20vh - 3.7vw)'
  };

  const calcFontSize = {
    fontSize: ratio > 1 ? '8vw' : `11vw`
  };

  const calcOverlayPosition = {
    position: 'fixed',
    top: 0
  };

  return (
    <div className='introContainer'>
      <div
        className={`scrollerSection ${meSectionInView ? 'snap' : ''}`}
        style={calcPeek}
        ref={meSection}
      >
        <h1 className='introText' style={calcFontSize} ref={meText}>
          I AM BRADEN WALKER
        </h1>
      </div>
      <div
        className={`scrollerSection ${roleSectionInView ? 'snap' : ''}`}
        style={calcPeek}
        ref={roleSection}
      >
        <h2 className='introText' style={calcFontSize} ref={roleText}>
          I AM A FULL STACK DEVELOPER
        </h2>
      </div>
      <div
        className={`scrollerSection ${adjectiveTextInView ? 'snap' : ''}`}
        style={calcPeek}
        ref={adjectiveSection}
      >
        <h2 className='introText' style={calcFontSize} ref={adjectiveText}>
          I AM CREATIVE
        </h2>
      </div>

      <div className='scrollerSection' style={calcOverlayPosition}>
        <h2 className='introText' style={calcFontSize}>
          I AM BRADEN WALKER
        </h2>
      </div>
    </div>
  );
};

export default Intro;
