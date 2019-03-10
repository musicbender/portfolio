import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import ColorDots from './color-dots';
import { Triangle } from '../_global/particles';
import headerConf from '../../configs/header.json';
import { config } from '../../../shared/config.json';
import style from './header.css';
const cx = cn.bind(style);

const Header = ({
  mode
}) => {
  const renderTriangles = () => {
    return headerConf.triangles.map((tri, i) => (
      <Triangle {...tri} key={i + tri.opacity + tri.color} />
    ));
  }

  return (
    <div className={cx(style.homeHeader)}>
      <Triangle size="giant" opacity={0.035} />
      <ColorDots />
      {renderTriangles()}
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
