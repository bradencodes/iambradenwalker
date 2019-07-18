import React, { Fragment } from 'react';
import { useInView } from 'react-intersection-observer';
import { Flipper, Flipped } from 'react-flip-toolkit';

import Intro from './content/Intro';

const Content = () => {
  //Intersection observers
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
    if (meInView) prefix = ['I', ' AM'];
    else if (roleInView) prefix = ['I', ' AM', ' A'];
    else if (adjectiveInView) prefix = ['I', ' AM'];
    else if (realInView) prefix = ['I', ' WILL'];
    else prefix = [];

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
    if (meInView) invs = [' BRADEN', ' WALKER.'];
    else if (roleInView) invs = [' FULL', ' STACK', ' DEVELOPER.'];
    else if (adjectiveInView) invs = [' CREATIVE.'];
    else invs = [' MAKE', ' YOU', ' MONEY.'];

    return invs.map((word, i) => (
      <span className='invisible' key={i}>
        {word}
      </span>
    ));
  };

  return (
    <Fragment>
      <div className='content'>
        <Flipper className={'iam'} flipKey={allInView} spring={'wobbly'}>
          <div className='intro-text-container'>
            {getPrefixText()}

            {getInvisibleText()}
          </div>
        </Flipper>

        <Intro meRef={meRef} roleRef={roleRef} adjectiveRef={adjectiveRef} realRef={realRef} />
      </div>

      <div id='vignette' />
    </Fragment>
  );
};

export default Content;
