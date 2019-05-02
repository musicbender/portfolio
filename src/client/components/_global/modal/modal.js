import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './modal.css';
const cx = cn.bind(style);

const Modal = ({ children }) => {
  return (
    <div className={cx(style.modal)}>
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Modal;
