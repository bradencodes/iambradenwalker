import React, { Fragment, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';
import { Flipper, Flipped } from 'react-flip-toolkit';
import ScrollSnap from 'scroll-snap';

import Intro from './content/Intro';
import Projects from './content/Projects';

const snapConfig = {
  scrollSnapDestination: '0% 100%',
  scrollTimeout: 100,
  scrollTime: 300
};

const Content = () => {
  // Snapping
  let container = useRef();

  useEffect(() => {
    const element = container.current;
    const snapObject = new ScrollSnap(element, snapConfig);
    snapObject.bind();
  });

  //Intersection observers
  const [meRef, meInView] = useInView({
    threshhold: 1
  });

  const [roleRef, roleInView] = useInView({
    threshhold: 1
  });

  const [adjectiveRef, adjectiveInView] = useInView({
    threshhold: 1
  });

  const [realRef, realInView] = useInView({
    threshhold: 1
  });

  const [projectsRef, projectsInView] = useInView({
    threshhold: 1
  });

  let allInView = +`${+meInView}${+roleInView}${+adjectiveInView}${+realInView}${+projectsInView}`;

  const prefixAppear = el => {
    el.style.opacity = 1;
    el.classList.remove('offset');
    setTimeout(() => {
      el.classList.remove('transition');
    }, 300);
  };

  const getPrefixText = () => {
    let prefix = [];
    if (meInView) prefix = ['I', ' AM'];
    else if (roleInView) prefix = ['I', ' AM', ' A'];
    else if (adjectiveInView) prefix = ['I', ' AM'];
    else if (realInView) prefix = ['I', ' WILL'];
    else if (projectsInView) prefix = ['I', ' HAVE'];
    else prefix = [];

    return prefix.map((word, i) => (
      <Fragment key={word}>
        <Flipped flipId={word} onAppear={prefixAppear}>
          <span className='transition offset'>{word}</span>
        </Flipped>
      </Fragment>
    ));
  };

  const getInvisibleText = () => {
    let invs = [];
    if (meInView) invs = [' BRADEN', ' WALKER.'];
    else if (roleInView) invs = [' FULL', ' STACK', ' DEVELOPER.'];
    else if (adjectiveInView) invs = [' CREATIVE.'];
    else if (realInView) invs = [' MAKE', ' YOU', ' MONEY.'];
    else if (projectsInView) invs = [' PROJECTS.'];
    else invs = [];

    return invs.map((word, i) => (
      <span className='invisible' key={i}>
        {word}
      </span>
    ));
  };

  return (
    <Fragment>
      <div className='content' ref={container}>
        <Flipper className={'iam'} flipKey={allInView} spring={'wobbly'}>
          <div className='intro-text-container'>
            {getPrefixText()}

            {getInvisibleText()}
          </div>
        </Flipper>

        <Intro
          meRef={meRef}
          roleRef={roleRef}
          adjectiveRef={adjectiveRef}
          realRef={realRef}
        />

        <Projects projectsRef={projectsRef} />
      </div>

      {/* <div id='vignette' /> */}
    </Fragment>
  );
};

export default Content;
