import React from 'react';
import PropTypes from 'prop-types';
import ColorDots from './color-dots';
import { Triangle } from '../_global/particles';
import { config } from '../../../shared/config.json';
import cn from 'classnames/bind';
import style from './header.css';
const cx = cn.bind(style);

const Header = ({
  mode
}) => {
  return (
    <div className={cx(style.homeHeader)}>
      <Triangle size="giant" opacity={0.035} />
      <div className={cx(style.titleWrapper)}>
        <h1 className={cx(style.title)}>{config.name}</h1>
        <h2 className={cx(style.subtitle)}>{config.role}</h2>
      </div>
      <ColorDots />
    </div>
  );
}

Header.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light'])
}

export default Header;
