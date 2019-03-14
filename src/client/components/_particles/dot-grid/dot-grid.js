import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './dot-grid.css';
const cx = cn.bind(style);

const DotGrid = ({
  sequence,
  layout,
  interval,
  delay,
  classNames
}) => {
  const colorMap = [
    'disabled',
    'white',
    'dull',
    'orange',
    'purple',
    'aqua',
    'yellow'
  ];

  const renderDot = (colorIndex, locy, locx, id) => {
    const radius = 3;
    return (
      <circle
        id={id}
        className={cx(style.dot, style[colorMap[colorIndex]])}
        key={id + locx + locy}
        r={radius}
        cx={locx}
        cy={locy}
      />
    );
  }

  const renderRow = (row, i) => {
    const space = 40;
    const offset = space / 2;
    return row.map((dot, j) => {
      return renderDot(dot, (i * space) + offset, (j * space) + offset, i + 'x' + j);
    });

  }

  const renderAllRows = (rows) => {
    return rows.map(renderRow);
  }

  const renderSequence = (sequence) => {
    // TODO: set interval animation through sequence array
  }

  return (
    <svg className={cx(style.dotGridParticle)}>
      {
        sequence &&
        sequence.length > 1 &&
        renderSequence(sequence)
      }
      {
        sequence &&
        sequence.length === 1 &&
        renderAllRows(sequence[0])
      }
    </svg>
  );
}

DotGrid.propTypes = {
  sequence: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.array)).isRequired,
  layout: PropTypes.arrayOf(PropTypes.number),
  interval: PropTypes.number,
  delay: PropTypes.number,
  classNames: PropTypes.string
}

DotGrid.defaultProps = {
  layout: [10, 10],
  classNames: '',
  delay: 0,
  interval: 500
}

export default DotGrid;
