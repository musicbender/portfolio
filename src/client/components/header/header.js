import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import { Parallax } from 'react-scroll-parallax';
import ColorDots from './color-dots';
import Svg from '../_global/svg';
import { Triangle } from '../_global/particles';
import { triangles, bigTriangle } from '../../configs/header.json';
import { config } from '../../../shared/config.json';
import style from './header.css';
const cx = cn.bind(style);

const Header = ({
  mode
}) => {
  const renderTriangles = () => {
    return triangles.map((tri, i) => (
      <Parallax
        className={cx('triangle-parallax', tri.color)}
        x={tri.parallax.x || [0, 0]}
        y={tri.parallax.y || [0, 0]}
        key={i + tri.opacity + tri.color}
      >
        <Triangle {...tri} />
      </Parallax>
    ));
  }

  return (
    <div className={cx(style.homeHeader)}>
      <Parallax
        className={cx('triangle-parallax', 'giant')}
        y={bigTriangle.parallax.y || [0, 0]}
      >
        <Triangle size="giant" opacity={0.035} />
      </Parallax>
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
