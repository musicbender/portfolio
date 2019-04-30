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
      <g opacity="0.8">
        <path className={cx(style.pathLine)} d="M20,11.948l0,5.052l13,0l0,-13l-26,0l0.09,11.908l12.91,-11.908" />
        <path className={cx(style.pathFill)} d="M7.864,13.807l0,-8.85l10.194,0l-10.194,8.85Z" />
      </g>
    </g>
  </svg>
);


Logo.propTypes = {
  classNames: PropTypes.string
}

Logo.defaultProps = {
  color: '#fff',
  classNames: ''
}

export default Logo;
