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
    else return ['I WILL ', 'MAKE YOU MONEY'];
  };

  return (
    <div id='content-container'>
      <div className='content'>
        <div id='iam'>
          <span id='prefix'>{getPrefixText()[0]}</span>
          <span className='invisible'>{getPrefixText()[1]}</span>
        </div>

        <div className='first'>
          <span className='invisible' ref={meRef}>
            I
          </span>
          <span className='invisible'> AM</span>
          <span> BRADEN</span>
          <span> WALKER</span>
        </div>

        <div className='introText'>
          <span className='invisible' ref={rollRef}>
            I
          </span>
          <span className='invisible'> AM</span>
          <span className='invisible'> A</span>
          <span> FULL</span>
          <span> STACK</span>
          <span> DEVELOPER</span>
        </div>

        <div className='introText'>
          <span className='invisible' ref={adjectiveRef}>
            I
          </span>
          <span className='invisible'> AM</span>
          <span> CREATIVE</span>
        </div>

        <div className='introText'>
          <span className='invisible' ref={realRef}>
            I
          </span>
          <span className='invisible'> WILL</span>
          <span> MAKE</span>
          <span> YOU</span>
          <span> MONEY</span>
        </div>
      </div>

      <div id='vignette' />
    </div>
  );
};

export default Content;
