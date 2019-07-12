import React, { Fragment, useState, useEffect } from 'react';
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
  console.log(allInView);

  const getPrefixText = () => {
    let prefix = '';
    if (meInView) prefix = 'I AM ';
    else if (roleInView) prefix = 'I AM A ';
    else if (adjectiveInView) prefix = 'I AM ';
    else prefix = 'I WILL ';

    return prefix;
  };

  const getInvisibleText = () => {
    let invs = [];
    if (meInView) invs = [' BRADEN', ' WALKER'];
    else if (roleInView) invs = [' FULL', ' STACK', ' DEVELOPER'];
    else if (adjectiveInView) invs = [' CREATIVE'];
    else invs = [' MAKE', ' YOU', ' MONEY'];

    return invs.map((word, i) => (
      <span className='invisible' key={i}>
        {word}
      </span>
    ));
  };

  return (
    <div id='content-container'>
      <div className='content'>
        <div className='first'>
          <span className='invisible' ref={meRef}>
            I AM
          </span>
          <span> BRADEN</span>
          <span> WALKER</span>
        </div>

        <div className='introText'>
          <span className='invisible' ref={roleRef}>
            I AM A
          </span>
          <span> FULL</span>
          <span> STACK</span>
          <span> DEVELOPER</span>
        </div>

        <div className='introText'>
          <span ref={adjectiveRef}>I AM</span>
          <span> CREATIVE</span>
        </div>

        <div className='introText'>
          <span className='invisible' ref={realRef}>
            I WILL
          </span>
          <span> MAKE</span>
          <span> YOU</span>
          <span> MONEY</span>
        </div>

        <Flipper className={'iam'} flipKey={allInView}>
          <Flipped flipId='prefix'>
            <span id='prefix-container'>{getPrefixText()}</span>
          </Flipped>

          {getInvisibleText()}
        </Flipper>
      </div>

      <div id='vignette' />
    </div>
  );
};

export default Content;
