import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import { Parallax } from 'react-scroll-parallax';
import ColorDots from './color-dots';
import Svg from '../_global/svg';
import { Triangle, DotGrid } from '../_particles';
import { triangles } from '../../configs/header.json';
import { config } from '../../../shared/config.json';
import style from './header.css';
const cx = cn.bind(style);

const Header = ({
  mode
}) => {
  const renderTriangles = () => {
    return triangles.map((tri, i) => (
      <Parallax
        className={cx('triangle-parallax', tri.color, tri.size)}
        x={tri.parallax.x || [0, 0]}
        y={tri.parallax.y || [0, 0]}
        key={i + tri.opacity + tri.color}
      >
        <Triangle {...tri} />
        <DotGrid
          sequence={[[]]}
          interval={500}
        />
      </Parallax>
    ));
  }

  return (
    <div className={cx(style.homeHeader)}>
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
