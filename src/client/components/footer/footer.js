import React from 'react';
import PropTypes from 'prop-types';
import Social from '../_global/social';
import { Triangle } from '../_particles';
import cn from 'classnames/bind';
import style from './footer.css';
const cx = cn.bind(style);

const Footer = ({ handleToTop }) => {
  return (
    <div className={cx(style.footer)}>
      <Social />
      <div className={cx(style.triWrapper)} onClick={handleToTop}>
        <Triangle size="tiny" />
      </div>
    </div>
  );
};

Footer.propTypes = {
  handleToTop: PropTypes.func.isRequired
}

export default Footer;
