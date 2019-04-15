import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './dot-formation.css';
const cx = cn.bind(style);

const DotFormation = ({
  columns,
  rows,
  dotSize
}) => {
  const renderDot = (i, size, x, y) => {
    return (
      <rect
        className={cx(style.dot, `dot-${i}`)}
        key={`dot-formation-$${i}-${i + x + y}`}
        width={size}
        height={size}
        x={x}
        y={y}
      />
    );
  }

  const renderDots = () => {
    let dots = [];
    const spacing = dotSize * 5;
    const dotAmount = columns * rows;
    const width = columns * spacing;
    const height = rows * spacing;
    // const size = spacing * grid;

    for (let i = 0; i < dotAmount; i++) {
      const y = Math.floor(i / columns) * spacing;
      const x = (i * spacing) - Math.floor((i * spacing) / width) * width;

      dots = [
        ...dots,
        renderDot(i, dotSize, x, y)
      ];
    }

    return (
      <svg className={cx(style.dots)} viewBox={`0 0 ${width} ${height}`} height={height} width={width}>
        {dots}
      </svg>
    );
  }

  return (
    <div className={cx(style.dotFormation)}>
      {renderDots()}
    </div>
  );
}

DotFormation.propTypes = {
  columns: PropTypes.number,
  rows: PropTypes.number,
  dotSize: PropTypes.number
}

DotFormation.defaultProps = {
  columns: 32,
  rows: 8,
  dotSize: 14.12
}

export default DotFormation;
