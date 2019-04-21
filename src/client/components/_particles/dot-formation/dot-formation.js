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

  const renderDot = ({ i, size, x, y, hide }) => {
    return (
      <rect
        className={cx(
          style.dot,
          `dot-${i}`,
          { [style.hide]: hide }
        )}
        key={`dot-formation-$${i}-${i + x + y}`}
        width={size}
        height={size}
        x={x}
        y={y}
        style={{ fill: color }}
      />
    );
  }

  const renderDots = () => {
    let dots = [];
    const spacing = dotSize * 5;
    const dotAmount = columns * rows;
    const width = columns * spacing;
    const height = rows * spacing;

    for (let i = 0; i < dotAmount; i++) {
      const y = Math.floor(i / columns) * spacing;
      const x = (i * spacing) - Math.floor((i * spacing) / width) * width;
      const hide = hideEnabled && hideArray.indexOf(i) > -1;

      dots = [
        ...dots,
        renderDot({ i, size: dotSize, x, y, hide })
      ];
    }

    return (
      <svg className={cx(style.dots)} viewBox={`0 0 ${width} ${height}`} height={height} width={width}>
        {dots}
      </svg>
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
  dotSize: 14.12,
  hide: false,
  color: '#F98D51',
  classNames: ''
}

export default DotFormation;
