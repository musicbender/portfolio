import React from 'react';
import PropTypes from 'prop-types';
import socials from './config.json';
import cn from 'classnames/bind';
import style from './social.css';
const cx = cn.bind(style);

const Social = () => {
  return (
    <div className={cx(style.social)}>
      <div className={cx(style.wrapper)}>
        {
          socials.map((item, i) => (
            <a
              href={item.url}
              className={cx(style.socialItem, style[item.id])}
              target="_blank"
              key={item.id + i * 3}
            >
              {item.label}
            </a>
          ))
        }
      </div>
    </div>
  );
}

export default Social;
