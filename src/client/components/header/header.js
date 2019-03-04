import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './header.css';
const cx = cn.bind(style);

const Header = (props) => {
  return (
    <div className={cx(style.homeHeader)}>
      header
    </div>
  );
}

Header.propTypes = {

}

Header.defaultProps = {

}

export default Header;
