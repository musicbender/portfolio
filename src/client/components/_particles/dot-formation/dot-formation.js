import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './dot-formation.css';
const cx = cn.bind(style);

const DotFormation = ({
  columns,
  rows,
  dotSize,
  hide,
  hideArray,
  color,
  classNames
}) => {
  const hideEnabled = hide && hideArray && hideArray.length > 0;

  const renderDot = ({ i, x, y, hide, xOffset, yOffset }) => {
    return (
      <svg
        className={cx(
          style.dot,
          `dot-${i}`,
          { [style.hide]: hide }
        )}
        key={`dot-formation-$${i}-${i + x + y}`}
        width={dotSize}
        height={dotSize}
        style={{
          fill: color,
          left: `calc(${x}% - ${xOffset}px)`,
          top:  `calc(${y}% - ${yOffset}px)`
        }}
      >
        <rect width={dotSize} height={dotSize} />
      </svg>
    );
  }

  const renderDots = () => {
    let dots = [];
    const ySpacing = 100 / (rows - 1);
    const xSpacing = 100 / (columns - 1);
    const dotAmount = columns * rows;
    const width = columns * xSpacing;
    const height = rows * ySpacing;

    for (let i = 0; i < dotAmount; i++) {
      const row = Math.floor(i / columns);
      const column = i - (columns * row);
      const hide = hideEnabled && hideArray.indexOf(i) > -1;

      const dotConfig = {
        i,
        y: row * ySpacing,
        x: column * xSpacing,
        hide: hideEnabled && hideArray.indexOf(i) > -1
      }

      dotConfig.xOffset = ((column + 1) / columns) * dotSize;
      dotConfig.yOffset = ((row + 1) / rows) * dotSize;

      dots = [
        ...dots,
        renderDot(dotConfig)
      ];
    }

    return (
      <div className={cx(style.dots)}>
        {dots}
      </div>
    );
  }

  return (
    <div className={cx(style.dotFormation, classNames)}>
      {renderDots()}
    </div>
  );
}

DotFormation.propTypes = {
  columns: PropTypes.number,
  rows: PropTypes.number,
  dotSize: PropTypes.number,
  hide: PropTypes.bool,
  hideArray: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
  classNames: PropTypes.string
}

DotFormation.defaultProps = {
  columns: 32,
  rows: 8,
  dotSize: 12,
  hide: false,
  color: '#F98D51',
  classNames: ''
}

export default DotFormation;
