import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../_global/logo';
import Curtain from '../_global/curtain';
import { config } from '../../../shared/config.json';
import cn from 'classnames/bind';
import style from './splash-screen.css';
const cx = cn.bind(style);

const SplashScreen = () => {
  return (
    <div className={cx(style.splashScreen)}>
      <Curtain enterance="rows" />
      <div className={cx(style.logoWrapper)}>
        <Logo color="#242424" />
        <div className={cx(style.mask)}></div>
      </div>
    </div>
  );
}

export default SplashScreen;
