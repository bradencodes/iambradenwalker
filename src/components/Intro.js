import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';
import { Flipper, Flipped } from 'react-flip-toolkit';

const Intro = ({ ratio }) => {
  //Intersection observers
  const [meText, meTextInView] = useInView({
    threshhold: 1
  });
  const [roleText, roleTextInView] = useInView({
    threshhold: 1
  });
  const [adjectiveText, adjectiveTextInView] = useInView({
    threshhold: 1
  });
  const [realText, realTextInView] = useInView({
    threshhold: 1
  });
  const [projectsText, projectsTextInView] = useInView({
    threshhold: 1
  });

  const [meSection, meSectionInView] = useInView({
    threshhold: 1
  });
  const [roleSection, roleSectionInView] = useInView({
    threshhold: 1
  });
  const [adjectiveSection, adjectiveSectionInView] = useInView({
    threshhold: 1
  });
  const [realSection, realSectionInView] = useInView({
    threshhold: 1
  });
  const [projectsSection, projectsSectionInView] = useInView({
    threshhold: 1
  });
  let allInView = +`${+meTextInView}${+roleTextInView}${+adjectiveTextInView}${+realTextInView}`;

  const snapSectionStyle = {
    // marginBottom: ratio > 1 ? 'calc(-20vh - 3.6vw)' : 'calc(-20vh - 4.7vw)'
  };

  const introTextStyle = {
    fontSize: `${8 + 4 / ratio}vw`
  };

  const overlaySectionStyle = {
    width: ratio > 1 ? '80vw' : '100%',
    padding: ratio > 1 ? '20vh 5vw 0 0' : '20vh 5vw 0'
  };

  const makeInvisibleText = words => (
    <>
      {words.map(word => (
        <span
          key={word}
          className='invisible'
          dangerouslySetInnerHTML={{ __html: word }}
        ></span>
      ))}
    </>
  );

  const makeVisibleText = words => (
    <>
      {words.map(word => (
        <span key={word} dangerouslySetInnerHTML={{ __html: word }}></span>
      ))}
    </>
  );

  const makeAnimatedText = wordIndices => {
    const wordMatrix = [
      ['I '],
      ['AM ', 'WILL '],
      ['BRADEN ', 'A ', 'CREA&shy;TIVE.', 'MAKE ']
    ];

    const wordMatrixVisibility = [
      [true],
      [true, true],
      [false, true, false, false]
    ];

    return (
      <>
        {wordIndices.map((wordIndex, r) => (
          <Flipped key={r} flipId={`${r}`} translate>
            <div className='wordContainer'>
              <span className='sizer'>{wordMatrix[r][wordIndex]}</span>
              <div className='wordList'>
                {wordMatrix[r].map((word, c) => (
                  <span
                    style={{
                      transform: `translateY(${-100 * (wordIndex + 1)}%)`,
                      visibility: wordMatrixVisibility[r][c]
                        ? 'visible'
                        : 'hidden'
                    }}
                    key={word}
                    className='word'
                    dangerouslySetInnerHTML={{ __html: word }}
                  ></span>
                ))}
              </div>
            </div>
          </Flipped>
        ))}
      </>
    );
  };

  const handleOverlayText = () => {
    /*
    const wordMatrix = [
      ['I '],
      ['AM ', 'WILL '],
      ['BRADEN ', 'A ', 'CREATIVE.', 'MAKE ']
    ];

    const wordMatrixVisibility = [
      [true],
      [true, true],
      [false, true, false, false]
    ];
    */

    if (meTextInView)
      return (
        <>
          {makeAnimatedText([0, 0, 0])}
          {makeInvisibleText(['WALKER.'])}
        </>
      );
    else if (roleTextInView)
      return (
        <>
          {makeAnimatedText([0, 0, 1])}
          {makeInvisibleText(['FULL ', 'STACK ', 'DEVE&shy;LOPER.'])}
        </>
      );
    else if (adjectiveTextInView) return <>{makeAnimatedText([0, 0, 2])}</>;
    else if (realTextInView)
      return (
        <>
          {makeAnimatedText([0, 1, 3])}
          {makeInvisibleText(['YOU ', 'MONEY.'])}
        </>
      );
    else
      return (
        <>
          {makeAnimatedText([0, 0, 0])}
          {makeInvisibleText(['WALKER.'])}
        </>
      );
  };

  return (
    <div id='introContainer'>
      <div
        className={`snapSection ${allInView ? 'snap' : ''}`}
        style={snapSectionStyle}
        ref={meSection}
      >
        <h1 className='introText' style={introTextStyle} ref={meText}>
          {makeInvisibleText(['I ', 'AM '])}
          {makeVisibleText(['BRADEN ', 'WALKER.'])}
        </h1>
      </div>
      <div
        className={`snapSection ${allInView ? 'snap' : ''}`}
        style={snapSectionStyle}
        ref={roleSection}
      >
        <h2 className='introText' style={introTextStyle} ref={roleText}>
          {makeInvisibleText(['I ', 'AM ', 'A '])}
          {makeVisibleText(['FULL ', 'STACK ', 'DEVE&shy;LOPER.'])}
        </h2>
      </div>
      <div
        className={`snapSection ${allInView ? 'snap' : ''}`}
        style={snapSectionStyle}
        ref={adjectiveSection}
      >
        <h2 className='introText' style={introTextStyle} ref={adjectiveText}>
          {makeInvisibleText(['I ', 'AM '])}
          {makeVisibleText(['CREA&shy;TIVE.'])}
        </h2>
      </div>
      <div
        className={`snapSection ${allInView ? 'snap' : ''}`}
        style={snapSectionStyle}
        ref={realSection}
      >
        <h2 className='introText' style={introTextStyle} ref={realText}>
          {makeInvisibleText(['I ', 'WILL '])}
          {makeVisibleText(['MAKE ', 'YOU ', 'MONEY.'])}
        </h2>
      </div>

      <Flipper flipKey={allInView} spring={'wobbly'}>
        <div className='overlaySection' style={overlaySectionStyle}>
          <h2 className='introText' style={introTextStyle}>
            {handleOverlayText()}
          </h2>
        </div>
      </Flipper>
    </div>
  );
};

export default Intro;
