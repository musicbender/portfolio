import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './color-dots.css';
const cx = cn.bind(style);

const ColorDots = () => {
  const dots = ['yellow', 'purple', 'orange', 'aqua'];

  return (
    <div className={cx(style.colorDotsWrapper)}>
      {
        dots.map((dot, i) => <div className={cx(style.dot, style[dot])} key={dot + i * 18 + 5}/>)
      }
    </div>
  );
}

export default ColorDots;
