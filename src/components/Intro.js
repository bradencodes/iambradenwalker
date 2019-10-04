import React from 'react';

const Intro = ({ ratio }) => {
  const calcPeek = {
    marginBottom: ratio > 1 ? 'calc(-20vh - 2.9vw)' : 'calc(-20vh - 3.7vw)'
  }

  const calcFontSize = {
    fontSize: ratio > 1 ? '8vw' : `11vw`
  }

  return (
    <div className='introContainer'>
      <div className='scrollerSection' style={calcPeek}>
        <h1 className='introText' style={calcFontSize}>I AM BRADEN WALKER</h1>
      </div>
      <div className='scrollerSection' style={calcPeek}>
        <h2 className='introText' style={calcFontSize}>I AM A FULL STACK DEVELOPER</h2>
      </div>
      <div className='scrollerSection' style={calcPeek}>
        <h2 className='introText' style={calcFontSize}>I AM CREATIVE</h2>
      </div>

      <div className='scrollerSection' style={calcPeek}>
        <h2 className='introText' style={calcFontSize}>I HAVE SOME PROJECTS</h2>
      </div>
    </div>
  );
};

export default Intro;
