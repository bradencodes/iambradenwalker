import React from 'react';

const Nav = ({ ratio }) => {
  return (
    <div id='navContainer' className={ratio.isWide ? 'sideNav' : 'topNav'}>
      <div className='background' />

      <div className='spacingHelper' />

      <div className='optionContainer'>
        <div className='dot filled' />
        <span className='text focused'>Intro</span>
      </div>

      <div className='optionContainer'>
        <div className='dot' />
        {/* <span className='text'>Projects</span> */}
      </div>

      <div className='optionContainer'>
        <div className='dot' />
        {/* <span className='text'>Contact</span> */}
      </div>

      <div className='spacingHelper' />
    </div>
  );
};

export default Nav;
