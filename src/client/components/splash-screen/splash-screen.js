import React from 'react';
import Logo from '../_global/logo';
import Curtain from '../_global/curtain';
import { config } from '../../../shared/config.json';
import cn from 'classnames/bind';
import style from './splash-screen.css';
const cx = cn.bind(style);

const SplashScreen = () => (
  <div className={cx(style.splashScreen)}>
    <Curtain duration={config.splashScreenDebug ? 3000000 : 3000}/>
    <div className={cx(
      style.logoWrapper,
      { [style.debug]: config.splashScreenDebug }
    )}>
      <Logo color="aqua" />
    </div>
  </div>
);

export default SplashScreen;
