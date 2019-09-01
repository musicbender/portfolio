import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Heading from '../_global/heading';
import DotFormation from '../_particles/dot-formation';
import { setSkillsTop } from '../../actions/home';
import { meta, config } from '../../../shared/config.json';
import { hasWindow, throttle, minMax } from '../../util/util';
import skillsData from '../../../shared/skills.json';
import cn from 'classnames/bind';
import style from './skills.css';
const cx = cn.bind(style);

class Skills extends Component {
  constructor(props) {
    super(props);
    this.handleResize = throttle(this.handleResize.bind(this), 100);
    this.gridID = 'skills-dot-grid';
    this.defaultColor = 'rgb(249, 141, 81)';

    this.hideArray = [
      10, 11, 12, 13, 14,
      25, 26, 27, 28, 29,
      40, 41, 42, 43, 44,
      55, 56, 57, 58, 59,
      70, 71, 72, 73, 74
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

    window.addEventListener('resize', this.handleResize);
    this.setState({ dotsWidth: rect.width, dotsHeight: rect.height });
    this.setTop(false, config.skillsTop);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.atBottom && !this.props.atBottom) {
      this.setState({ color: this.defaultColor })
    }
  }

  componentWillUnmount() {
    window.removeEventListner('resize', this.handleResize);
  }

  setTop(didResize = false, input) {
    let value = input;

    console.group('----- skills setTop() ----')
    console.log(value);

    if (value == null) {
      const elm = document.getElementById(this.gridID);
      const rect = elm.getBoundingClientRect();
      value = (rect.top - (rect.height / 2)) + 490;
      console.log('rect because value was null')
      console.log(rect);
    }

   
    console.log('value at end:')
    console.log(value);
    console.groupEnd();

    this.props.setSkillsTop({ value, didResize });
  }

  handleResize() {
    this.setTop(true);
  }

  handleButton(e) {
    e.preventDefault();
    if (hasWindow()) {
      window.location.href = `mailto:${meta.email}`;
    }
  }

  render() {
    return (
      <div className={cx(style.skills)}>
        <Heading text="tech_i_know" />
        <div id={this.gridID} className={cx(style.dotWrapper)}>
          <DotFormation
            classNames={cx('big')}
            columns={15}
            active={this.props.atBottom}
            hideArray={this.hideArray}
            color={this.state.color}
            textConfig={skillsData}
          />
          <div
            className={cx(
              style.skillsCta,
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

const mapStateToProps = ({ global, home }) => {
  return {
    skillsTop: home.skillsTop
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setSkillsTop
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
