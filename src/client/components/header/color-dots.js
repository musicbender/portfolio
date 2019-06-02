import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './color-dots.css';
const cx = cn.bind(style);

const ColorDots = ({ forMobile }) => {
  const [mounted, setMounted] = useState(false);
  const [entering, setEntering] = useState(false);
  const [finishedEntering, setFinishedEntering] = useState(false);
  const dots = ['yellow', 'purple', 'orange', 'aqua'];

  // on update
  useEffect(() => {
    console.log(`BLAH`);
    if (!entering && !mounted) {
      setMounted(true);

      requestTimeout(() => {
        setEntering(true);
      }, 4000);

      requestTimeout(() => {
        setFinishedEntering(true);
      }, 7000)
    }
  }, []);

  const mapDots = () => {
    return dots.map((dot, i) => <div className={cx(style.dot, style[dot])} key={dot + i + `${forMobile}` + 5}/>)
  }

  return (
    <div className={cx(style.colorDotsWrapper)}>
      {
        !forMobile &&
        <div className={cx(
          style.desktopWrapper,
          { [style.entering]: entering },
          { [style.finished]: finishedEntering }
        )}>
          { mapDots() }
        </div>
      }
      {
        forMobile &&
        <div className={cx(
          style.mobileWrapper,
          { [style.entering]: entering },
          { [style.finished]: finishedEntering }
        )}>
          { mapDots() }
        </div>
      }
    </div>
  );
}

ColorDots.propTypes = {
  splashOpen: PropTypes.bool,
  forMobile: PropTypes.bool
}

ColorDots.defaultProps = {
  splashOpen: true,
  forMobile: false
}

export default ColorDots;
