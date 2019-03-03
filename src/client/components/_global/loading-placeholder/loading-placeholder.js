import React from 'react';
import cn from 'classnames/bind';
import style from './loading-placeholder.css';
const cx = cn.bind(style);

/**
 * @param {String} type Type of component it is placeholding
 * @param {Boolean} animate if it should "shimmer"
 */

export default ({ type, animate }) => {
  const innerElements = () => {
    switch(type) {
      case 'home': {
        return (
          [1, 2, 3, 4].map((item, i) => {
            return (
              <div
                className={cx(`placeholder-elm-${i + 1}`)}
                key={Math.random()}
              />
            );
          })
        );
      }
      default: {
        return;
      }
    }
  }

  return (
    <div className={cx(
      style.loadingPlaceholder,
      { ['animate']: animate },
      style[type]
    )}>
      { innerElements() }
    </div>
  );
};
