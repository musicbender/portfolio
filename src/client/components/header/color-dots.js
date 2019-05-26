import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './color-dots.css';
const cx = cn.bind(style);

const ColorDots = ({ forMobile }) => {
  const dots = ['yellow', 'purple', 'orange', 'aqua'];

  const mapDots = () => {
    return dots.map((dot, i) => <div className={cx(style.dot, style[dot])} key={dot + i + `${forMobile}` + 5}/>)
  }

  return (
    <div className={cx(style.colorDotsWrapper)}>
      {
        !forMobile &&
        <div className={cx(style.desktopWrapper)}>
          { mapDots() }
        </div>
      }
      {
        forMobile &&
        <div className={cx(style.mobileWrapper)}>
          { mapDots() }
        </div>
      }
    </div>
  );
}

ColorDots.propTypes = {
  forMobile: PropTypes.bool
}

ColorDots.defaultProps = {
  forMobile: false
}

export default ColorDots;
