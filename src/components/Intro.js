import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';
import { Flipper, Flipped } from 'react-flip-toolkit';

const Intro = ({ ratio, scrollbarWidth }) => {
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

  let allInView = +`${+meTextInView}${+roleTextInView}${+adjectiveTextInView}${+realTextInView}`;

  const snapSectionStyle = section => {
    const handleMarginBottom = () => {
      if (document.getElementById(section)) {
        const sectionHeight = document.getElementById(section).clientHeight;
        const pageHeight = document.documentElement.clientHeight;
        const difference = pageHeight - sectionHeight;
        if (difference > pageHeight * 0.2) {
          return `calc(${difference}px - 20vh - (${8 +
            4 / ratio.value}vw / 2.1))`;
        } else return 0;
      }
    };

    return {
      marginBottom: handleMarginBottom()
    };
  };

  const textFillOpacity = section => {
    const faded = 0;

    if (meTextInView) return section === 'meSection' ? 1 : faded;
    else if (roleTextInView) return section === 'roleSection' ? 1 : faded;
    else if (adjectiveTextInView)
      return section === 'adjectiveSection' ? 1 : faded;
    else if (realTextInView) return section === 'realSection' ? 1 : faded;
    else return faded;
  };

  const introTextStyle = {
    fontSize: `${8 + 4 / ratio.value}vw`
  };

  const overlaySectionStyle = {
    // width: ratio.isWide ? '80vw' : '100%',
    padding: ratio.isWide ? `20vh 5vw 0 20vw` : `20vh 5vw 0 5vw`
  };

  const makeInvisibleText = words => (
    <>
      {words.map(word =>
        !word ? null : (
          <span
            key={word}
            className='invisible'
            dangerouslySetInnerHTML={{ __html: word }}
          ></span>
        )
      )}
    </>
  );

  const makeVisibleText = (words, section) => {
    return (
      <>
        {words.map((word, i) => (
          <div key={word} className='visibleTextContainer'>
            <span
              dangerouslySetInnerHTML={{ __html: word }}
              className='textFill'
              style={{ opacity: textFillOpacity(section) }}
            ></span>
            <span
              dangerouslySetInnerHTML={{ __html: word }}
              className='textOutline'
              style={{ opacity: 1 - textFillOpacity(section) }}
            ></span>
          </div>
        ))}
      </>
    );
  };

  const makeAnimatedText = wordIndices => {
    const wordMatrix = [['I '], ['AM ', 'WILL '], ['blank', 'A ', 'blank']];

    const wordMatrixVisibility = [[true], [true, true], [false, true, false]];

    // The actual text that should show
    const word1 = wordMatrix[0][wordIndices[0]];
    const word2 = wordMatrix[1][wordIndices[1]];
    const word3 =
      wordMatrix[2][wordIndices[2]] !== 'blank'
        ? wordMatrix[2][wordIndices[2]]
        : null;

    return (
      <>
        <Flipped flipId='animatedText' translate>
          <div className='animatedTextContainer'>
            <div className='sizer'>
              {makeInvisibleText([word1, word2, word3])}
            </div>
            <div className='animatedText'>
              {wordIndices.map((wordIndex, r) => (
                <div key={r} className='wordContainer'>
                  <span className='sizer'>{wordMatrix[r][wordIndex]}</span>
                  <div className='wordList'>
                    {wordMatrix[r].map((word, c) => (
                      <span
                        style={{
                          transform: `translateY(${-100 * wordIndex}%)`,
                          visibility: wordMatrixVisibility[r][c]
                            ? 'visible'
                            : 'hidden'
                        }}
                        key={word + c}
                        className='word'
                        dangerouslySetInnerHTML={{ __html: word }}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Flipped>
      </>
    );
  };

  const handleOverlayText = () => {
    if (meTextInView)
      return (
        <>
          {makeAnimatedText([0, 0, 0])}
          {makeInvisibleText(['BRADEN ', 'WALKER.'])}
        </>
      );
    else if (roleTextInView)
      return (
        <>
          {makeAnimatedText([0, 0, 1])}
          {makeInvisibleText(['FULL ', 'STACK ', 'DEVE&shy;LOPER.'])}
        </>
      );
    else if (adjectiveTextInView)
      return (
        <>
          {makeAnimatedText([0, 0, 2])}
          {makeInvisibleText(['CREATIVE.'])}
        </>
      );
    else if (realTextInView)
      return (
        <>
          {makeAnimatedText([0, 1, 2])}
          {makeInvisibleText(['WORK ', 'FOR ', 'YOU.'])}
        </>
      );
    else
      return (
        <>
          {makeAnimatedText([0, 0, 0])}
          {makeInvisibleText(['BRADEN ', 'WALKER.'])}
        </>
      );
  };

  return (
    <div id='introContainer'>
      <div
        id='meSection'
        className={`snapSection ${allInView ? 'snap' : ''}`}
        style={snapSectionStyle('meSection')}
      >
        <h1 className='introText' style={introTextStyle}>
          {makeInvisibleText(['I ', 'AM '])}
          <div className='marker' ref={meText} />
          {makeVisibleText(['BRADEN ', 'WALKER.'], 'meSection')}
        </h1>
      </div>
      <div
        id='roleSection'
        className={`snapSection ${allInView ? 'snap' : ''}`}
        style={snapSectionStyle('roleSection')}
      >
        <h2 className='introText' style={introTextStyle}>
          {makeInvisibleText(['I ', 'AM ', 'A '])}
          <div className='marker' ref={roleText} />
          {makeVisibleText(
            ['FULL ', 'STACK ', 'DEVE&shy;LOPER.'],
            'roleSection'
          )}
        </h2>
      </div>
      <div
        id='adjectiveSection'
        className={`snapSection ${allInView ? 'snap' : ''}`}
        style={snapSectionStyle('adjectiveSection')}
      >
        <h2 className='introText' style={introTextStyle}>
          {makeInvisibleText(['I ', 'AM '])}
          <div className='marker' ref={adjectiveText} />
          {makeVisibleText(['CREA&shy;TIVE.'], 'adjectiveSection')}
        </h2>
      </div>
      <div
        id='realSection'
        className={`snapSection ${allInView ? 'snap' : ''}`}
        style={snapSectionStyle('realSection')}
      >
        <h2 className='introText' style={introTextStyle}>
          {makeInvisibleText(['I ', 'WILL '])}
          <div className='marker' ref={realText} />
          {makeVisibleText(['WORK ', 'FOR ', 'YOU.'], 'realSection')}
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
