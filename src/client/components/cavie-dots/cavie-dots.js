import React from 'react';
import PropTypes from 'prop-types';
import Plx from 'react-plx';
import { hasWindow } from '../../util/util';
import { config } from '../../../shared/config.json';
import cn from 'classnames/bind';
import style from './cavie-dots.css';
const cx = cn.bind(style);

const CavieDots = ({ atBottom, bottom }) => {
  const dotAmount = 25;
  const baseStart = 1000;
  const accumulator = 100;

  const getPlxData = (i) => {
    const start = i === 0
      ? 0
      : baseStart + (i * accumulator);

    return [
      {
        start,
        end: i === 0 ? 200 : start + accumulator * 2,
        properties: [
          {
            startValue: i === 0 ? 0 : 150,
            endValue: 0,
            unit: '%',
            property: 'translateY'
          }
        ]
      },
      {
        start: bottom - 1400,
        end: bottom,
        properties: [
          {
            startValue: config.colors.purple,
            endValue: config.colors.aqua,
            property: 'fill'
          },
          {
            startValue: 1,
            endValue: 0.5,
            property: 'opacity'
          }
        ]
      }
    ];
  }

  const renderDot = (i, size, x, y) => {
    return (
      <Plx
        className={cx(style.dotPlx, style.dot)}
        parallaxData={getPlxData(i)}
        tagName="rect"
        disabled={!hasWindow()}
        animateWhenNotInViewport={true}
        key={`cavie-dot-$${i}-${i + x + y}`}
        width={size}
        height={size}
        x={x}
        y={y}
      />
    );
  }

  const renderDots = () => {
    let dots = [];
    const dotSize = 12;
    const grid = Math.round(Math.sqrt(dotAmount));
    const spacing = dotSize * grid;
    const size = spacing * grid;

    for (let i = 0; i < dotAmount; i++) {
      const y = Math.floor(i / grid) * spacing;
      const x = (i * spacing) - Math.floor((i * spacing) / size) * size;

      dots = [
        ...dots,
        renderDot(i, dotSize, x, y)
      ];
    }

    return (
      <svg
        className={cx(style.dots, { [style.hide]: atBottom })}
        viewBox={`0 0 ${size - 45} ${size}`}
        height={size * 2}
        width={size}
      >
        {dots}
      </svg>
    );
  }

  return (
    <div className={cx(style.cavieDots)}>
      <div></div>
      <div className={cx(style.wrapper)}>
        {renderDots()}
      </div>
    </div>
  );
}

CavieDots.propTypes = {

}

CavieDots.defaultProps = {

}

export default CavieDots;
