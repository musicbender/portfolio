import React from 'react';
import PropTypes from 'prop-types';
import Social from '../_global/social';
import cn from 'classnames/bind';
import style from './footer.css';
const cx = cn.bind(style);

const Footer = (props) => (
  <div className={cx(style.footer)}>
    <Social />
  </div>
);

export default Footer;
