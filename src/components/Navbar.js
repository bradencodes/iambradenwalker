import React, { Fragment, useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  console.log(hovered);

  const toggleHovered = () => {
    setHovered(prevState => !prevState);
  };

  return (
    <div
      className='navbar-container'
      onMouseEnter={() => toggleHovered()}
      onMouseLeave={() => toggleHovered()}
    >
      <div className='gradient' />

      <Flipper flipKey={hovered}>
        <div className='nav-link'>
          <Flipped flipId='intro-dot'>
            <div className='link-dot' />
          </Flipped>
          <div className='link-text'>Intro</div>
        </div>
        <div className='nav-link'>
          <Flipped flipId='projects-dot'>
            <div className='link-dot' />
          </Flipped>
          <div className='link-text'>Projects</div>
        </div>
        <div className='nav-link'>
          <Flipped flipId='contact-dot'>
            <div className='link-dot' />
          </Flipped>
          <div className='link-text'>Contact</div>
        </div>
      </Flipper>
    </div>
  );
};

export default Navbar;
