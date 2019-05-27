import React from 'react';
import PropTypes from 'prop-types';
import Button from '../_global/button';
import cn from 'classnames/bind';
import style from './item-info.css';
const cx = cn.bind(style);

const ItemInfo = ({
  title,
  description,
  isStopped,
  buttonUrl,
  buttonText,
  buttonClasses
}) => {
  const handleParentClick = () => {
    if (isMobile) {
      // TODO: change to js routing link when case study pages are built
      window.href = buttonUrl;
    }
  }

  return (
    <div
      className={cx(style.itemInfo, { [style.stopped]: isStopped })}
      onClick={handleParentClick}
    >
      <h5>{title}</h5>
      <p>{description}</p>
      {
        !!buttonUrl &&
        <Button text={buttonText} url={buttonUrl} classNames={buttonClasses} />
      }
    </div>
  );
};

ItemInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isStopped: PropTypes.bool,
  buttonUrl: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClasses: PropTypes.string
}

ItemInfo.defaultProps = {
  buttonText: 'view project',
  buttonClasses: ''
}

export default ItemInfo;
