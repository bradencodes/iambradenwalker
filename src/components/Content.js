import React from 'react';

const Content = () => {
  return (
    <div id='content-container'>
      <div className='content'>
        <div id='iam'>
          I AM <span className='invisible'>BRADEN WALKER</span>
        </div>
        <div className='first'>
          <span className='invisible'>I AM </span>BRADEN WALKER
        </div>

        <div className='introText'>
          <span className='invisible'>I AM A </span>FULL STACK DEVELOPER
        </div>

        <div className='introText'>
          <span className='invisible'>I AM </span>CREATIVE
        </div>

        <div className='introText'>
          <span className='invisible'>I WILL </span>MAKE YOU MONEY
        </div>
      </div>

      <div id='vignette' />
    </div>
  );
};

export default Content;
