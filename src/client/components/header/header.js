import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames/bind';
import { Parallax } from 'react-scroll-parallax';
import ColorDots from './color-dots';
import Svg from '../_global/svg';
import { Triangle, DotGrid } from '../_particles';
import { dotGridA, dotGridB } from './dots';
import { countLongestArray } from '../../util/util';
import { startSequence } from '../../util/animation';
import { triangles } from '../../configs/header.json';
import { config } from '../../../shared/config.json';
import style from './header.css';
const cx = cn.bind(style);

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSequence = this.handleSequence.bind(this);
    this.interval = 180;
    // this.delay = 4000;
    this.delay = 0;
    this.state = {
      dotGridIndex: 0
    }
  }

  componentDidMount() {
    const dotGridLength = countLongestArray([
      dotGridA,
      dotGridB
    ]);

    startSequence({
      length: dotGridLength,
      interval: this.interval,
      delay: this.delay,
      index: this.state.dotGridIndex
    }, this.handleSequence);
  }

  handleSequence(index) {
    let newState = { dotGridIndex: index || 0 };
    this.setState(newState);
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
      </Parallax>
    ));
  }

  render() {
    return (
      <div className={cx(style.homeHeader)}>
        <ColorDots />
        {this.renderTriangles()}
        <DotGrid
          classNames={cx(style.dotGridA)}
          sequence={dotGridA}
          index={this.state.dotGridIndex}
          interval={this.interval}
          delay={this.delay}
        />
        <DotGrid
          classNames={cx(style.dotGridB)}
          sequence={dotGridB}
          index={this.state.dotGridIndex}
          interval={this.interval}
          delay={this.delay + (this.interval)}
        />
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
