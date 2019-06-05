import React from 'react';
import PropTypes from 'prop-types';
import Plx from 'react-plx';
import { hasWindow } from '../../util/util';
import { config } from '../../../shared/config.json';
import cn from 'classnames/bind';
import style from './cavie-dots.css';
const cx = cn.bind(style);

const CavieDots = ({ atBottom, bottom, baseStart }) => {
  const dotAmount = 25;
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
            endValue: config.colors.orange,
            property: 'fill'
          },
          {
            startValue: 1,
            endValue: 1,
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
        tagName="svg"
        disabled={!hasWindow()}
        animateWhenNotInViewport={true}
        key={`cavie-dot-$${i}-${i + x + y}`}
        width={size}
        height={size}
        style={{ left: `${x}%`, top: `${y}%` }}
      >
        <rect width={size} height={size} />
      </Plx>
    );
  }

  const renderDots = () => {
    let dots = [];
    const dotSize = 12;
    const grid = Math.round(Math.sqrt(dotAmount));
    const size = 100;
    const spacing = size / (grid - 1);

    console.group('-----render dots-----');
    console.log(`grid: ${grid}`);
    console.log(`spacing: ${spacing}`);
    console.groupEnd()

    for (let i = 0; i < dotAmount; i++) {
      const row = Math.floor(i / grid);
      const y = row * spacing;
      const x = (i * spacing) - ((row * size) + (row * spacing));

      console.group('dot')
      console.log(`i: ${i}`);
      console.log(`y: ${y}`);
      console.log(`x: ${x}`);
      console.log(`row: ${row}`);
      console.groupEnd()

      dots = [
        ...dots,
        renderDot(i, dotSize, x, y)
      ];
    }

    return (
      <div
        className={cx(style.dots, { [style.hide]: atBottom })}
        // style={{ height: `${size * 2}px`, width: `${size}px` }}
      >
        {dots}
      </div>
    );
  }

  return (
    <div className={cx(
      style.cavieDots,
      { [style.show]: !atBottom },
      { [style.hide]: atBottom }
    )}>
      <div className={cx(style.wrapper)}>
        {renderDots()}
      </div>
    </div>
  );
}

CavieDots.propTypes = {
  baseStart: PropTypes.number,
  atBottom: PropTypes.bool,
  bottom: PropTypes.number
}

CavieDots.defaultProps = {
  baseStart: 0,
  bottom: config.homeBottom
}

export default CavieDots;
