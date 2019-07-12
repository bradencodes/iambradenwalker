import React, { Fragment } from 'react';
import { useInView } from 'react-intersection-observer';
import { Flipper, Flipped } from 'react-flip-toolkit';

const Content = () => {
  const [meRef, meInView] = useInView({
    threshhold: 0.2
  });

  const [roleRef, roleInView] = useInView({
    threshhold: 0.2
  });

  const [adjectiveRef, adjectiveInView] = useInView({
    threshhold: 0.2
  });

  const [realRef, realInView] = useInView({
    threshhold: 0.2
  });

  let allInView = +`${+meInView}${+roleInView}${+adjectiveInView}${+realInView}`;

  const getPrefixText = () => {
    let prefix = [];
    if (meInView) prefix = ['I', 'AM'];
    else if (roleInView) prefix = ['I', 'AM', 'A'];
    else if (adjectiveInView) prefix = ['I', 'AM'];
    else prefix = ['I', 'WILL'];

    return prefix.map((word, i) => (
      <Fragment key={i}>
        <Flipped flipId={word}>
          <span>{word}</span>
        </Flipped>
      </Fragment>
    ));
  };

  const getInvisibleText = () => {
    let invs = [];
    if (meInView) invs = ['BRADEN', 'WALKER.'];
    else if (roleInView) invs = ['FULL', 'STACK', 'DEVELOPER.'];
    else if (adjectiveInView) invs = ['CREATIVE.'];
    else invs = ['MAKE', 'YOU', 'MONEY.'];

    return invs.map((word, i) => (
      <span className='invisible' key={i}>
        {word}
      </span>
    ));
  };

  return (
    <div id='content-container'>
      <div className='content'>
        <Flipper className={'iam'} flipKey={allInView}>
          <div className='intro-text-container'>
            {getPrefixText()}

            {getInvisibleText()}
          </div>
        </Flipper>

        <div className='first'>
          <div className='intro-text-container'>
            <span className='invisible' ref={meRef}>
              I
            </span>
            <span className='invisible'>AM</span>
            <span>BRADEN</span>
            <span>WALKER.</span>
          </div>
        </div>

        <div className='intro-text'>
          <div className='intro-text-container'>
            <span className='invisible' ref={roleRef}>
              I
            </span>
            <span className='invisible'>AM</span>
            <span className='invisible'>A</span>
            <span>FULL</span>
            <span>STACK</span>
            <span>DEVELOPER.</span>
          </div>
        </div>

        <div className='intro-text'>
          <div className='intro-text-container'>
            <span className='invisible' ref={adjectiveRef}>
              I
            </span>
            <span className='invisible'>AM</span>
            <span>CREATIVE.</span>
          </div>
        </div>

        <div className='intro-text'>
          <div className='intro-text-container'>
            <span className='invisible' ref={realRef}>
              I
            </span>
            <span className='invisible'>WILL</span>
            <span>MAKE</span>
            <span>YOU</span>
            <span>MONEY.</span>
          </div>
        </div>
      </div>

      <div id='vignette' />
    </div>
  );
};

export default Content;
