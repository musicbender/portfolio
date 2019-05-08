import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './logo.css';
const cx = cn.bind(style);

const Logo = ({ color, classNames }) => (
  <svg
    className={cx(style.logo, classNames)}
    width="100%"
    height="100%"
    viewBox="0 0 40 21"
    version="1.1"
    style={{ fill: color, stroke: color }}
  >
    <g>
      <g>
        <path className={cx(style.pathLine)} d="M20,11.948l0,5.052l13,0l0,-13l-15,0l0.09" />
        <path className={cx(style.pathTriangle)} d="M20,0l-20,0l0,20l10.943,-10l9.057,-7.964l0,-2.036Z" />
      </g>
    </g>
  </svg>
);


Logo.propTypes = {
  classNames: PropTypes.string,
  color: PropTypes.string
}

Logo.defaultProps = {
  color: '#fff',
  classNames: ''
}

export default Logo;

// full path
// path className={cx(style.pathTriangle)} d="M22.058,0l-22.058,0l0,20l10.943,-10l11.115,-10Z" />
