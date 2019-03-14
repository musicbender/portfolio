import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './dot-grid.css';
const cx = cn.bind(style);

const DotGrid = ({
  sequence,
  interval,
  classNames
}) => {
  const renderStaticDots = () => {

  }

  const renderAnimatedDots = () => {

  }

  return (
    <svg className={cx(style.dotGridParticle)}>
      {
        sequence &&
        sequence.length > 1 &&
        renderAnimatedDots()
      }
      {
        sequence &&
        sequence.length === 1 &&
        renderStaticDots()
      }
    </svg>
  );
}

DotGrid.propTypes = {
  interval: PropTypes.number,
  sequence: PropTypes.arrayOf(PropTypes.array).isRequired,
  classNames: PropTypes.string
}

DotGrid.defaultProps = {
  classNames: ''
}

export default DotGrid;
