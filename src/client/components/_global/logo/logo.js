import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './logo.css';
const cx = cn.bind(style);

const Logo = ({
  classNames
}) => (
  <svg className={cx(style.logo)} width="100%" height="100%" viewBox="0 0 40 21" version="1.1">
    <g>
      <g opacity="0.8">
        <path className={cx(style.pathLine)} d="M20,11.948l0,5.052l13,0l0,-13l-26,0l0.09,11.908l12.91,-11.908" />
        <path className={cx(style.pathFill)} d="M7.864,13.807l0,-8.85l10.194,0l-10.194,8.85Z" />
      </g>
    </g>
  </svg>


);


Logo.propTypes = {
  classNames: PropTypes.string
}

Logo.defaultProps = {
  classNames: ''
}

export default Logo;

// <svg
//   className={cx(style.logo, classNames)}
//   viewBox="0 0 40 21"
//   fill="none"
// >
//   <g opacity="0.8">
//     <path d="M19.0433 0.999966L1 1V17.75L10.0433 9.49997L19.0433 0.999966Z" />
//     <path d="M1 17.75H0V20.0159L1.67396 18.4888L1 17.75ZM1 1L0.999998 0L0 1.87304e-06V1H1ZM38.9996 19V20H39.9996V19H38.9996ZM38.9996 1.00006H39.9996V6.34539e-05L38.9996 5.88134e-05L38.9996 1.00006ZM21 19H20V20H21V19ZM19.0433 0.999966L19.0433 -3.37958e-05L19.0433 -3.37958e-05L19.0433 0.999966ZM10.0433 9.49997L10.7172 10.2387L10.7236 10.2329L10.7299 10.227L10.0433 9.49997ZM39.9996 19V1.00006H37.9996V19H39.9996ZM38.9996 18H21V20H38.9996V18ZM20 12.7562V19H22V12.7562H20ZM38.9996 5.88134e-05L19.0433 -3.37958e-05L19.0433 1.99997L38.9996 2.00006L38.9996 5.88134e-05ZM19.0433 -3.37958e-05L0.999998 0L1 2L19.0433 1.99997L19.0433 -3.37958e-05ZM2 17.75V1H0V17.75H2ZM18.3567 0.272953L9.35665 8.77295L10.7299 10.227L19.7299 1.72698L18.3567 0.272953ZM9.36931 8.7612L0.326037 17.0112L1.67396 18.4888L10.7172 10.2387L9.36931 8.7612Z" stroke="#ffffff" stroke-width="4"/>
//   </g>
// </svg>

// <svg className={cx(style.logo, classNames)} viewBox="0 0 40 21" fill="none">
//   <g>
//     <g opacity="0.8">
//       <path d="M19,18l13,0l0,-13l-26,0l0.09,11.908l12.91,-11.908" />
//     </g>
//   </g>
// </svg>
