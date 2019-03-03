import React from 'react';
import cn from 'classnames/bind';
import style from './error-message.css';
const cx = cn.bind(style);

export default ({
  error,
  withIcon
}) => {
  const errMessage = error || 'Sorry, there was an unexpected error';
  const hasIcon = withIcon !== undefined ? withIcon : true;

  return (
    <div className={cx(style.errorMessage)}>
      <p>{error}</p>
    </div>
  );
}
