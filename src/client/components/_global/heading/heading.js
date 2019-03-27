import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './heading.css';
const cx = cn.bind(style);

const Heading = ({ text }) => <h3 className={cx(style.heading)}>{text}</h3>;

Heading.propTypes = {
  text: PropTypes.string.isRequired
}

export default Heading;
