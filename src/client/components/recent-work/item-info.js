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
  buttonClasses
}) => (
  <div className={cx(style.itemInfo)}>
    <h5>{title}</h5>
    <p>{description}</p>
    <Button text={buttonText} url={buttonUrl} classNames={buttonClasses} />
  </div>
);

ItemInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClasses: PropTypes.string
}

ItemInfo.defaultProps = {
  buttonText: 'view project',
  buttonClasses: ''
}

export default ItemInfo;
