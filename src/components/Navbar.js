import React from 'react';

const Navbar = () => {
  return (
    <div id='navbar-container'>
      <div className='gradient' />

      <div className='nav-link'>
        <div className='link-dot'>
          <div className='link-text'>Intro</div>
        </div>
      </div>
      <div className='nav-link'>
        <div className='link-dot'>
          <div className='link-text'>Projects</div>
        </div>
      </div>
      <div className='nav-link'>
        <div className='link-dot'>
          <div className='link-text'>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
