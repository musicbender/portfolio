import React from 'react';
import Logo from '../_global/logo';
import Curtain from '../_global/curtain';
import cn from 'classnames/bind';
import style from './splash-screen.css';
const cx = cn.bind(style);

const SplashScreen = () => (
  <div className={cx(style.splashScreen)}>
    <Curtain />
    <div className={cx(style.logoWrapper)}>
      <Logo color="aqua" />
    </div>
  </div>
);

export default SplashScreen;
