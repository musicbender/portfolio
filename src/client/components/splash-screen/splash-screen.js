import React from 'react';
import Logo from '../_global/logo';
import Curtain from '../_global/curtain';
import { config } from '../../../shared/config.json';
import cn from 'classnames/bind';
import style from './splash-screen.css';
const cx = cn.bind(style);

const SplashScreen = () => (
  <div className={cx(style.splashScreen)}>
    <Curtain />
    <div className={cx(style.logoWrapper)}>
      <Logo color={config.colors.orange} />
      <div className={cx(style.mask)}></div>
    </div>
  </div>
);

export default SplashScreen;
