import React from 'react';
import PropTypes from 'prop-types';
import TextEmbeds from './text-embeds';
import Triangle from '../triangle';
import { mapDotsWithText } from '../../../util/dot-grid';
import cn from 'classnames/bind';
import style from './dot-formation.css';
const cx = cn.bind(style);

const DotFormation = ({
  columns,
  rows,
  dotSize,
  active,
  hideArray,
  color,
  shape,
  textConfig,
  classNames
}) => {
  const hideEnabled = !active && hideArray && hideArray.length > 0;
  const ySpacing = 100 / (rows - 1);
  const xSpacing = 100 / (columns - 1);
  const dotAmount = columns * rows;
  const width = columns * xSpacing;
  const height = rows * ySpacing;
  const textAffectedDots = textConfig ? mapDotsWithText(textConfig, columns) : [];

  const getDotOffset = (index, axis) => {
    const vector = axis === 'x' ? columns : rows;
    return ((index + 1) / vector) * dotSize;
  }

  const renderDot = (config) => {
    const { i, x, y, row, column, hide, xOffset, yOffset } = config;
    return (
      <svg
        className={cx(
          style.dot,
          `dot-${i}`,
          { [style.hide]: hide },
          { [style.hasText]: textAffectedDots.indexOf(i) > -1}
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
        {
          shape === 'square' &&
          <rect width={dotSize} height={dotSize} />
        }
        {
          shape === 'triangle' &&
          <Triangle width="micro" color="orange" opacity={1} />
        }
      </svg>
    );
  }

  const renderDots = () => {
    let dots = [];

    for (let i = 0; i < dotAmount; i++) {
      const row = Math.floor(i / columns);
      const column = i - (columns * row);
      const hide = hideEnabled && hideArray.indexOf(i) > -1;

      const dotConfig = {
        i,
        y: row * ySpacing,
        x: column * xSpacing,
        row,
        column,
        hide: hideEnabled && hideArray.indexOf(i) > -1
      }

      dotConfig.xOffset = getDotOffset(column, 'x');
      dotConfig.yOffset = getDotOffset(row, 'y');

      dots = [
        ...dots,
        renderDot(dotConfig)
      ];
    }

    return (
      <div className={cx(style.dots, { [style.active]: active })}>
        {dots}
      </div>
    );
  }

  return (
    <div className={cx(style.dotFormation, classNames)}>
      { renderDots() }
      {
        textConfig &&
        <TextEmbeds
          textConfig={textConfig}
          spacing={[xSpacing, ySpacing]}
          getDotOffset={getDotOffset}
          dotSize={dotSize}
          active={active}
        />
      }
    </div>
  );
}

DotFormation.propTypes = {
  columns: PropTypes.number,
  rows: PropTypes.number,
  dotSize: PropTypes.number,
  active: PropTypes.bool,
  hideArray: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'triangle']),
  textConfig: PropTypes.arrayOf(PropTypes.object),
  classNames: PropTypes.string
}

DotFormation.defaultProps = {
  columns: 32,
  rows: 8,
  dotSize: 12,
  active: false,
  color: '#F98D51',
  shape: 'square',
  classNames: ''
}

export default DotFormation;
