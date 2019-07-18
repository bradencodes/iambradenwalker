import React, { Fragment } from 'react';

const Intro = ({ meRef, roleRef, adjectiveRef, realRef }) => {
  return (
    <Fragment>
      <div className='first snap'>
        <div className='intro-text-container'>
          <span className='invisible' ref={meRef}>
            I
          </span>
          <span className='invisible'> AM</span>
          <span> BRADEN</span>
          <span> WALKER.</span>
        </div>
      </div>

      <div className='intro-text snap'>
        <div className='intro-text-container'>
          <span className='invisible' ref={roleRef}>
            I
          </span>
          <span className='invisible'> AM</span>
          <span className='invisible'> A</span>
          <span> FULL</span>
          <span> STACK</span>
          <span> DEVELOPER.</span>
        </div>
      </div>

      <div className='intro-text snap'>
        <div className='intro-text-container'>
          <span className='invisible' ref={adjectiveRef}>
            I
          </span>
          <span className='invisible'> AM</span>
          <span> CREATIVE.</span>
        </div>
      </div>

      <div className='intro-text snap'>
        <div className='intro-text-container'>
          <span className='invisible' ref={realRef}>
            I
          </span>
          <span className='invisible'> WILL</span>
          <span> MAKE</span>
          <span> YOU</span>
          <span> MONEY.</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;
