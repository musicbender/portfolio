import React from 'react';
import PropTypes from 'prop-types';
import { config } from '../../../../shared/config.json';
import cn from 'classnames/bind';
import style from './logo.css';
const cx = cn.bind(style);

const Logo = ({ color, classNames }) => {
  const colors = {
    white: '#fff',
    black: 'rgb(30,30,30)',
    ...config.colors
  }

  const colorValue = colors[color];

  return (
    <svg
      className={cx(style.logo, classNames)}
      width="100%"
      height="100%"
      viewBox="0 0 21 21"
      style={{ fill: colorValue, stroke: colorValue }}
    >
      <g>
        <path className={cx('path-p')} d="M19.5,1.5l0,18l-11.938,0l-0.062,-6" />
        <path className={cx('path-j')} d="M1.5,19.5l0,-18l12,0l0,6" />
      </g>
    </svg>
  );
}


Logo.propTypes = {
  color: PropTypes.oneOf(['white', 'black', ...Object.keys(config.colors)]),
  classNames: PropTypes.string,
}

Logo.defaultProps = {
  color: 'white',
  classNames: ''
}

export default Logo;
