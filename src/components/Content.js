import React from 'react';
import { useInView } from 'react-intersection-observer';

const Content = () => {
  const [meRef, meInView] = useInView({
    threshhold: 0.2
  });

  const [rollRef, rollInView] = useInView({
    threshhold: 0.2
  });

  const [adjectiveRef, adjectiveInView] = useInView({
    threshhold: 0.2
  });

  const [realRef, realInView] = useInView({
    threshhold: 0.2
  });

  const getPrefixText = () => {
    if (meInView) return ['I AM ', 'BRADEN WALKER'];
    else if (rollInView) return ['I AM A ', 'FULL STACK DEVELOPER'];
    else if (adjectiveInView) return ['I AM ', 'CREATIVE'];
    else if (realInView) return ['I WILL ', 'MAKE YOU MONEY'];
    else return ['', ''];
  };

  return (
    <div id='content-container'>
      <div className='content'>
        <div id='iam'>
          {getPrefixText()[0]}
          <span className='invisible'>{getPrefixText()[1]}</span>
        </div>
        <div className='first'>
          <span className='invisible' ref={meRef}>
            I AM{' '}
          </span>
          BRADEN WALKER
        </div>

        <div className='introText'>
          <span className='invisible' ref={rollRef}>
            I AM A{' '}
          </span>
          FULL STACK DEVELOPER
        </div>

        <div className='introText'>
          <span className='invisible' ref={adjectiveRef}>
            I AM{' '}
          </span>
          CREATIVE
        </div>

        <div className='introText'>
          <span className='invisible' ref={realRef}>
            I WILL{' '}
          </span>
          MAKE YOU MONEY
        </div>
      </div>

      <div id='vignette' />
    </div>
  );
};

export default Content;
