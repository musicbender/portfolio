import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames/bind';
import { Parallax } from 'react-scroll-parallax';
import ColorDots from './color-dots';
import Svg from '../_global/svg';
import { Triangle, DotGrid } from '../_particles';
import { triangles } from '../../configs/header.json';
import { config } from '../../../shared/config.json';
import style from './header.css';
const cx = cn.bind(style);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dotGridAIndex: 0,
      dotGridAStarted: false,
      dotGridBIndex: 0,
      dotGridBStarted: false,
      dotGridCIndex: 0,
      dotGridCStarted: false
    }
  }

  handleSequence(id = 'A') {
    return (index) => {
      this.setState({
        [`dotGrid${id}Index`]: index,
        [`dotGrid${id}Started`]: true
      });
    }
  }

  renderTriangles() {
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
          index={this.state.gotGridAIndex}
          handleSequence={this.handleSequence('A')}
        />
      </Parallax>
    ));
  }

  render() {
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
}

const mapStateToProps = ({ global }) => {
  return {
    pageLoaded: global.pageLoaded,
    splashOpen: global.splashOpen,
    mode: global.mode
  }
}

export default connect(mapStateToProps)(Header);
