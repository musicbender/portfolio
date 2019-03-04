import React from 'react';
import PropTypes from 'prop-types';
import { config } from '../../../shared/config.json';
import cn from 'classnames/bind';
import style from './header.css';
const cx = cn.bind(style);

const Header = ({
  mode
}) => {
  return (
    <div className={cx(style.homeHeader)}>
      <div className={cx(style.titleWrapper)}>
        <h1 className={cx(style.title)}>{config.name}</h1>
        <h2 className={cx(style.subtitle)}>{config.role}</h2>
      </div>
    </div>
  );
}

Header.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light'])
}

export default Header;
