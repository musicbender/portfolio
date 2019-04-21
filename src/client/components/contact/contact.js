import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DotFormation from '../_particles/dot-formation';
import { config } from '../../../shared/config.json';
import { hasWindow, throttle, minMax } from '../../util/util';
import cn from 'classnames/bind';
import style from './contact.css';
const cx = cn.bind(style);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.gridID = 'contact-dot-grid';
    this.defaultColor = 'rgb(249, 141, 81)';
    this.hideArray = [
      23, 24, 25, 26, 27,
      51, 52, 53, 54, 55,
      79, 80, 81, 82, 83,
      107, 108, 109, 110, 111,
      135, 136, 137, 138, 139
    ];
    this.state = {
      dotsWidth: 0,
      dotsHeight: 0,
      color: this.defaultColor
    }
  }

  componentDidMount() {
    const elm = document.getElementById(this.gridID);
    const rect = elm.getBoundingClientRect();
    elm.addEventListener('mousemove', throttle(this.handleMouseMove(rect), 150));
    this.setState({ dotsWidth: rect.width, dotsHeight: rect.height });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.atBottom && !this.props.atBottom) {
      this.setState({ color: this.defaultColor })
    }
  }

  handleMouseMove(rect) {
    return (e) => {
      const x = Math.max(0, e.clientX);
      const y = Math.max(0, Math.round(e.pageY - rect.top));
      const xPerc = Math.round((x / this.state.dotsWidth) * 100);
      const yPerc = Math.round((y / this.state.dotsHeight) * 100);
      const r = minMax(xPerc * 2);
      const g = minMax(100 + Math.round(Math.max(1, xPerc) / Math.max(1, yPerc)));
      const b = minMax(yPerc * 2);

      this.setState({ color: `rgb(${r}, ${g}, ${b})`});
    }
  }

  handleResize(e) {

  }

  handleButton(e) {
    e.preventDefault();
    if (hasWindow()) {
      window.location.href = `mailto:${config.email}`;
    }
  }

  render() {
    return (
      <div className={cx(style.contact)}>
        <div id={this.gridID} className={cx(style.dotWrapper)} onClick={this.handleButton}>
          <DotFormation
            classNames={cx('big', {[ 'blur']: this.props.atBottom })}
            columns={28}
            hide={!this.props.atBottom}
            hideArray={this.hideArray}
            color={this.state.color}
          />
          <DotFormation classNames={cx('small', {[ 'blur']: this.props.atBottom })} columns={4} color={this.state.color} />
          <div
            className={cx(
              style.contactCta,
              { [style.show]: this.props.atBottom },
              { [style.hide]: !this.props.atBottom }
            )}
          >
            <p style={{ color: this.state.color }}>Say Hello</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
