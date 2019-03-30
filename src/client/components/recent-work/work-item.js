import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import Plx from 'react-plx';
import Button from '../_global/button';
import cn from 'classnames/bind';
import style from './work-item.css';
const cx = cn.bind(style);

const WorkItem = ({ item, index }) => {
  const baseEnd = 1400;
  const accumulator = 535;

  const getPlxData = (item, i) => {
    return [
      {
        start: 'self',
        end: baseEnd + (accumulator * index),
        properties: [
          {
            startValue: item.startValue,
            endValue: 0,
            unit: 'em',
            property: 'translateY'
          }
        ]
      }
    ];
  }

  const renderImageSection = () => {
    return item.plx.image.map((seg, i) => {
      return (
        <Plx
          className={cx(style.parallax, style[`index-${i}`])}
          parallaxData={getPlxData(seg, i)}
          key={`${i}` + item.title + 'image' + JSON.stringify(seg)}
        >
          <div className={cx(style.parallaxInner)}>
            <div className={cx(style.wrapper)}>
              <div className={cx(style.imageCover)}></div>
            </div>
          </div>
        </Plx>
      );
    });
  }

  const renderInfoSection = () => {
    return item.plx.info.map((seg, i) => {
      return (
        <Plx
          className={cx(style.parallax, style[`index-${i}`])}
          parallaxData={getPlxData(seg, i)}
          key={`${i}` + item.title + 'info' + JSON.stringify(seg)}
        >
          <div className={cx(style.parallaxInner)}>
            <div className={cx(style.wrapper)}>
              <h4 className={cx(style.title)}>{item.title}</h4>
              <p className={cx(style.description)}>{item.description}</p>
            </div>
          </div>
        </Plx>
      );
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
