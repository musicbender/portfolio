import React from 'react';
import PropTypes from 'prop-types';
import ItemInfo from './item-info';
import Plx from 'react-plx';
import Button from '../_global/button';
import cn from 'classnames/bind';
import style from './work-item.css';
const cx = cn.bind(style);

const WorkItem = ({
  item,
  index,
  isStopped,
  handleWorkStops
}) => {
  const baseEnd = 1400;
  const accumulator = 535;
  const imgDir = `${process.env.ASSET_ROOT}assets/images/recent-work/`;

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
          onPlxStart={handleWorkStops(index, false)}
          onPlxEnd={handleWorkStops(index, true)}
          key={`${i}` + item.title + 'image' + JSON.stringify(seg)}
        >
          <div className={cx(style.parallaxInner)}>
            <div className={cx(style.wrapper)}>
              <div
                className={cx(style.image, style.mobile, style[`index-${i}`])}
                style={{ backgroundImage: `url(${imgDir}${item.imageMobile})` }}
              ></div>
              <div
                className={cx(style.image, style.desktop, style[`index-${i}`])}
                style={{ backgroundImage: `url(${imgDir}${item.imageDesktop})` }}
              ></div>
              <div className={cx(style.imageFilter, {[style.stopped]: isStopped})}></div>
              <div className={cx(style.imageCover, {[style.stopped]: isStopped})}></div>
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
          key={`${i}` + item.label + 'info' + JSON.stringify(seg)}
        >
          <div className={cx(style.parallaxInner)}>
            <div className={cx(style.wrapper)}>
              <ItemInfo
                title={item.label}
                description={item.description}
                buttonUrl={item.url}
                buttonClasses={cx(
                  'work',
                  'parallax',
                  { ['stopped']: isStopped },
                  { ['not-stopped']: !isStopped }
                )}
              />
            </div>
          </div>
        </Plx>
      );
    });
  }

  return (
    <div className={cx(style.workItem, { [style.stopped]: isStopped })}>
      <div className={cx(style.imageOutterWrapper)}>
        {renderImageSection()}
      </div>
      <div className={cx(style.infoOutterWrapper)}>
        {renderInfoSection()}
        <ItemInfo
          title={item.label}
          description={item.description}
          buttonUrl={item.url}
          isStatic={true}
          buttonClasses={cx(
            'work',
            'static',
            { ['stopped']: isStopped },
            { ['not-stopped']: !isStopped }
          )}
        />
      </div>
    </div>
  );
}

WorkItem.propTypes = {
  // item data
  item: PropTypes.object.isRequired,
  // index number within list of work items
  index: PropTypes.number.isRequired,
  // Boolean is this item has stopped parallax animation
  isStopped: PropTypes.bool,
  // Function controlling if parallax animation has stopped
  handleWorkStops: PropTypes.func
}

export default WorkItem;
