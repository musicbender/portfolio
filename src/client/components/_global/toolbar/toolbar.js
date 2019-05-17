import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo';
import cn from 'classnames/bind';
import style from './toolbar.css';
const cx = cn.bind(style);

const Toolbar = ({
  pageLoaded,
  mode,
  menuOpen,
  handleMode,
  handleMenu
}) => {
  const renderHamburger = () => {
    return (
      <div className={cx(style.hamburger)}>
        <div className={cx(style.bar1)}></div>
        <div className={cx(style.bar2)}></div>
      </div>
    );
  }

  return (
    <div className={cx(style.toolbar)}>
      <div className={cx(style.innerWrapper)}>
        <Logo classNames={cx(style.toolbarLogo)} color="rgba(255, 255, 255)"/>
      </div>
    </div>
  );
}

Toolbar.propTypes = {
  pageLoaded: PropTypes.bool,
  mode: PropTypes.oneOf(['light', 'dark']),
  menuOpen: PropTypes.bool,
  handleMode: PropTypes.func,
  handleMenu: PropTypes.func
}

Toolbar.defaultProps = {
  mode: 'dark',
  menuOpen: false
}

export default Toolbar;
