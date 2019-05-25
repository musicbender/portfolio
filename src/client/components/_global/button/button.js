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
  classNames,
  callback
}) => {
  const buttonClass = cx(style.btn, style[type], classNames);

  switch (true) {
    case isExternal:
      return (
        <a className={classnames(buttonClass)} href={url}>
          <p>{text}</p>
        </a>
      );
    case url:
      return (
        <Link
          className={cx(buttonClass)}
          to={url}
          onClick={(callback) ? (e) => {callback(e)} : () => {return false}}
        >
          <span className={cx(style.underscore)}></span>
          <p>{text}</p>
        </Link>
      );
    default:
      return (
        <div
          className={cx(buttonClass)}
          onClick={(e) => { callback(e) }}
        >
          <p>{text}</p>
        </div>
      );
  }
}

Button.defaultProps = {
  type: 'line',
  text: 'Learn More',
  url: '/',
  isExternal: false,
  classNames: '',
  callback: () => false
}

Button.propTypes = {
  type: PropTypes.oneOf(['line', 'ridicularge-XL']),
  text: PropTypes.string,
  url: PropTypes.string,
  isExternal: PropTypes.bool,
  classNames: PropTypes.string,
  callback: PropTypes.func
}

export default Button;
