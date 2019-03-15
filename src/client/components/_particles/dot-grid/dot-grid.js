import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './dot-grid.css';
const cx = cn.bind(style);

const DotGrid = ({
  sequence,
  index,
  started,
  handleSequence,
  spacing,
  interval,
  delay,
  classNames
}) => {
  const offset = spacing / 2;
  const radius = 3;
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
    return row.map((dot, j) => (
      renderDot(dot, (i * spacing) + offset, (j * spacing) + offset, i + 'x' + j)
    ));
  }

  const renderAllRows = (rows) => {
    return rows.map(renderRow);
  }

  const startSequence = (sequence) => {
    requestTimeout(() => {
      let i = index || 0;
      const intvl = requestInterval(() => {
        ++i;
        handleSequence(i);

        if (i >= (sequence.length - 1)) {
          clearRequestInterval(intvl);
        }
      }, interval);
    }, delay)
  }

  return (
    <svg
      className={cx(style.dotGridParticle)}
      style={{
        width: `${sequence[0][0].length * spacing}px`,
        height: `${sequence[0].length * spacing}px`
      }}
    >
      {
        sequence &&
        sequence.length > 1 &&
        handleSequence &&
        !started &&
        startSequence(sequence)
      }
      {
        sequence &&
        sequence.length > 0 &&
        renderAllRows(sequence[index])
      }
    </svg>
  );
}

DotGrid.propTypes = {
  sequence: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.array)).isRequired,
  index: PropTypes.number,
  started: PropTypes.bool,
  handleSequence: PropTypes.func,
  spacing: PropTypes.number,
  interval: PropTypes.number,
  delay: PropTypes.number,
  classNames: PropTypes.string
}

DotGrid.defaultProps = {
  classNames: '',
  index: 0,
  started: true,
  spacing: 65,
  delay: 0,
  interval: 500
}

export default DotGrid;
