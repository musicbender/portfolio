import React from 'react';
import PropTypes from 'prop-types';
import Plx from 'react-plx';
import cn from 'classnames/bind';
import style from './cavie-dots.css';
const cx = cn.bind(style);

const CavieDots = () => {
  const dotAmount = 25;
  const baseStart = 1000;
  const accumulator = 500;

  const getPlxData = (i) => {
    const start = baseStart + (i * accumulator);
    return [
      {
        start,
        end: start + accumulator,
        properties: [
          {
            startValue: 150,
            endValue: 0,
            unit: '%',
            property: 'translateY'
          }
        ]
      }
    ];
  }

  const renderDot = (i, size, x, y) => {
    return (
      <rect
        className={cx(style.dot)}
        width={size}
        height={size}
        x={x}
        y={y}
        key={i + x + y}
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
      <svg className={cx(style.dots)} viewBox={`0 0 ${size} ${size}`} height={size} width={size}>
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


// const dot = (
//   <Plx
//     classNamew={cx(style.dotPlx)}
//     parallaxData={getPlxData(i)}
//     key={`cavie-dot-${i * 3}`}
//   >
//     <svg viewBox={`0 0 ${size} ${size}`} height={size} width={size}>
//       <rect width={size} height={size} />
//     </svg>
//   </Plx>
// );
