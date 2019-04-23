import React from 'react';
import PropTypes from 'prop-types';
import Plx from 'react-plx';
import DotGrid from '../_particles/dot-grid';
import Triangle from '../_particles/triangle';
import { particleData } from '../../configs/recent-work.json';
import dotGrids from './dots';
import { hasWindow } from '../../util/util';
import cn from 'classnames/bind';
import style from './particles.css';
const cx = cn.bind(style);

const Particles = () => {
  const getPlxData = (values) => {
    return [
      {
        start: 'self',
        end: 'self',
        endOffset: '100vh',
        properties: [
          {
            startValue: values[0],
            endValue: values[1],
            unit: 'em',
            property: 'translateY'
          }
        ]
      }
    ];
  }

  const getParticle = (p) => {
    const { name, type, ...params } = p;
    switch (type) {
      case 'triangle':
        return <Triangle {...params} />;
      case 'dots':
        return <DotGrid classNames={cx(style[name])} sequence={dotGrids[name]} />;
    }
  }

  return (
    <div className={cx(style.particlesWrapper)}>
      {
        particleData.map((p, i) => {
          return (
            <div className={cx(style.particle, style[p.name])}>
              <Plx
                className={cx(style.plxInner)}
                parallaxData={getPlxData(p.plx)}
                disabled={!hasWindow()}
              >
                {getParticle(p)}
              </Plx>
            </div>
          );
        })
      }
    </div>
  );
}

export default Particles;
