import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Plx from 'react-plx';
import Heading from '../_global/heading';
import { DotGrid } from '../_particles';
import config from './config.json';
import { hasWindow, countLongestArray } from '../../util/util';
import { startSequence } from '../../util/animation';
import { dotGridA } from './dots';
import cn from 'classnames/bind';
import style from './about-me.css';
const cx = cn.bind(style);

const AboutMe = ({
  atAbout,
  setAboutTop,
  isMobile
}) => {
  const [ dotGridIndex, updateSequence ] = useState(0);
  const interval = 180;
  const delay = 0;

  // on mount
  useEffect(() => {
    const section = document.getElementById('about-section');
    const rect = section.getBoundingClientRect();
    // setTimeout(() => {
    //   setAboutTop(rect.top - 20)
    // }, 500)
  }, []);

  // on update
  useEffect(() => {
    if (atAbout) {
      const dotGridLength = countLongestArray([
        dotGridA
      ]);

      startSequence({
        length: dotGridLength,
        interval: interval,
        delay: delay,
        index: dotGridIndex
      }, updateSequence);
    } else {
      updateSequence(0);
    }
  }, [ atAbout ]);

  return (
    <div id="about-section" className={cx(style.aboutMe)}>
      <Heading text={config.heading} />
      <DotGrid
        classNames={cx(style.dotGridA)}
        sequence={dotGridA}
        index={dotGridIndex}
      />
      <Plx
        disabled={!hasWindow() || isMobile}
        parallaxData={[{
          start: 'self',
          end: 'self',
          endOffset: '100vh',
          properties: [
            {
              startValue: 20,
              endValue: -16,
              unit: '%',
              property: 'translateY'
            }
          ]
        }]}
      >
        <div className={cx(style.contentBox)}>
          { config.body.map((t, i) => <p key={'about-p-' + i}>{t}</p>) }
        </div>
      </Plx>

    </div>
  );
}

AboutMe.propTypes = {
  atAbout: PropTypes.bool,
  setAboutTop: PropTypes.func,
  isMobile: PropTypes.bool
}

AboutMe.defaultProps = {
  atAbout: false
}

export default AboutMe;
