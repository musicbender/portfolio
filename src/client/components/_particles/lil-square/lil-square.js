import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './lil-square.css';
const cx = cn.bind(style);

const LilSquare = ({ color, opacity, classNames }) => (
  <div className={cx(style.lilSquare, style[color], classNames)} style={{ opacity }}></div>
);

LilSquare.propTypes = {
  color: PropTypes.oneOf(['white', 'orange', 'aqua', 'purple', 'yellow']),
  opacity: PropTypes.number,
  classNames: PropTypes.string
}

LilSquare.defaultProps = {
  color: 'orange',
  opacity: 0.75,
  classNames: ''
}

export default LilSquare;
