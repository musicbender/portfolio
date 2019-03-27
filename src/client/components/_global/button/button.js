import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';
import style from './button.css';
const cx = cn.bind(style);

const Button = ({
  type,
  text,
  url,
  isExternal,
  callback
}) => {
  const buttonClass = cx(style.btn, style[type]);

  switch (true) {
    case isExternal:
      return (
        <a className={classnames(buttonClass)} href={url}>
          {text}
        </a>
      );
    case url:
      return (
        <Link
          className={cx(buttonClass)}
          to={url}
          onClick={(callback) ? (e) => {callback(e)} : () => {return false}}
        >
          {text}
        </Link>
      );
    default:
      return (
        <div
          className={cx(buttonClass)}
          onClick={(e) => { callback(e) }}
        >
          {text}
        </div>
      );
  }
}

Button.defaultProps = {
  type: 'line',
  text: 'Learn More',
  url: '/',
  isExternal: false,
  callback: () => false
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  isExternal: PropTypes.bool,
  callback: PropTypes.func
}

export default Button;
