import React from 'react';
import PropTypes from 'prop-types';
import Button from '../_global/button';
import cn from 'classnames/bind';
import style from './item-info.css';
const cx = cn.bind(style);

const ItemInfo = ({
  title,
  description,
  buttonUrl,
  buttonText,
  isStatic
}) => (
  <div className={cx(style.itemInfo, { [style.static]: isStatic })}>
    <h5>{title}</h5>
    <p>{description}</p>
    <Button text={buttonText} url={buttonUrl} />
  </div>
);

ItemInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonText: PropTypes.string,
  isStatic: PropTypes.bool
}

ItemInfo.defaultProps = {
  // text for cta button
  buttonText: 'view project',
  // if it is styled for parallaxed or static
  isStatic: false
}

export default ItemInfo;
