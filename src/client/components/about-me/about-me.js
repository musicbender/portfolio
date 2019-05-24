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

const AboutMe = () => {
  const [ dotGridIndex, updateSequence ] = useState(0);
  const interval = 180;
  const delay = 4000;

  const handleIndex = (index) => {
    updateSequence(index)
  }

  // on mount
  useEffect(() => {
    const dotGridLength = countLongestArray([
      dotGridA
    ]);

    startSequence({
      length: dotGridLength,
      interval: interval,
      delay: delay,
      index: dotGridIndex
    }, handleIndex);
  }, []);

  return (
    <div className={cx(style.aboutMe)}>
      <Heading text={config.heading} />
      <DotGrid
        classNames={cx(style.dotGridA)}
        sequence={dotGridA}
        index={dotGridIndex}
      />
      <Plx
        disabled={!hasWindow()}
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

export default AboutMe;
