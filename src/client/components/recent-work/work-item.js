import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import Button from '../_global/button';
import cn from 'classnames/bind';
import style from './work-item.css';
const cx = cn.bind(style);

const WorkItem = ({ item, index }) => {
  const renderImageSection = () => {
    return item.parallax.image.map((seg, i) => {
      <Parallax
        className={cx(style.parallax, style[`index-${i}`])}
        x={[0, 0]}
        y={seg || [0, 0]}
        key={i + item.title + 'image' + JSON.stringify(seg)}
      >
        <div className={cx(style.wrapper)}>
          <div className={cx(style.imageCover)}></div>
        </div>
      </Parallax>
    });
  }

  const renderInfoSection = () => {
    return item.parallax.info.map((seg, i) => {
      <Parallax
        className={cx(style.parallax, style[`index-${i}`])}
        x={[0, 0]}
        y={seg || [0, 0]}
        key={i + item.title + 'info' + JSON.stringify(seg)}
      >
        <div className={cx(style.wrapper)}>
          <h4 className={cx(style.title)}>{item.title}</h4>
          <p className={cx(style.description)}>{item.description}</p>
        </div>
      </Parallax>
    });
  }

  return (
    <div className={cx(style.workItem)}>
      <div className={cx(style.imageOutterWrapper)}>
        {renderImageSection()}
      </div>
      <div className={cx(style.infoOutterWrapper)}>
        {renderInfoSection()}
      </div>
    </div>
  );
}

WorkItem.propTypes = {

}

WorkItem.defaultProps = {

}

export default WorkItem;
