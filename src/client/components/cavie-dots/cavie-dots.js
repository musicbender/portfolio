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
            startValue: i === 0 ? 0 : 56,
            endValue: 0,
            unit: 'vh',
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

  const renderDot = ({ index, dotSize, x, y, xOffset, yOffset }) => {
    return (
      <Plx
        className={cx(style.dotPlx, style.dot)}
        parallaxData={getPlxData(index)}
        tagName="svg"
        disabled={!hasWindow()}
        animateWhenNotInViewport={true}
        key={`cavie-dot-$${index}-${index + x + y}`}
        width={dotSize}
        height={dotSize}
        style={{
          left: `calc(${x}% - ${xOffset}px)`,
          top: `calc(${y}% - ${yOffset}px)`
        }}
      >
        <rect width={dotSize} height={dotSize} />
      </Plx>
    );
  }

  const renderDots = () => {
    let dots = [];
    const dotSize = 12;
    const grid = Math.round(Math.sqrt(dotAmount));
    const size = 100;
    const spacing = size / (grid - 1);

    for (let i = 0; i < dotAmount; i++) {
      const row = Math.floor(i / grid);
      const dotConfig = {
        index: i,
        dotSize,
        y: row * spacing,
        x: (i * spacing) - ((row * size) + (row * spacing))
      }

      dotConfig.xOffset = (dotConfig.x / spacing) * 3;
      dotConfig.yOffset = (dotConfig.y / spacing) * 3;


      dots = [
        ...dots,
        renderDot(dotConfig)
      ];
    }

    return (
      <div className={cx(style.dots, { [style.hide]: atBottom })}>
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
