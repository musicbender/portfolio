import React from 'react';
import PropTypes from 'prop-types';
import Plx from 'react-plx';
import Heading from '../_global/heading';
import config from './config.json';
import { hasWindow } from '../../util/util';
import cn from 'classnames/bind';
import style from './about-me.css';
const cx = cn.bind(style);

const AboutMe = () => {
  return (
    <div className={cx(style.aboutMe)}>
      <Heading text={config.heading} />
      <Plx
        disabled={!hasWindow()}
        parallaxData={[{
          start: 'self',
          end: 'self',
          endOffset: '100vh',
          properties: [
            {
              startValue: 20,
              endValue: -20,
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
