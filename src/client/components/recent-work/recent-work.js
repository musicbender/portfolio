import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../_global/heading';
import WorkItem from './work-item';
import cn from 'classnames/bind';
import workData from '../../configs/recent-work.json';
import contentConf from '../../configs/content';
import { config } from '../../../shared/config';
import style from './recent-work.css';
const cx = cn.bind(style);

const RecentWork = () => {
  const content = contentConf.home.sections.recentWork;
  const renderWorkItems = () => {
    return workData.map((item, i) => {
      return i < config.workItemsAmount && (
        <WorkItem item={item} index={i} key={item.title + i * 7} />
      );
    });
  }

  return (
    <div className={cx(style.recentWork)}>
      <Heading text={content.heading} />
      <div className={cx(style.parentWrapper)}>
        <div className={cx(style.workItemsWrapper)}>
          {renderWorkItems()}
        </div>
        <div className={cx(style.dotBoxWrapper)}>

        </div>
      </div>
    </div>
  );
}

RecentWork.propTypes = {

}

RecentWork.defaultProps = {

}

export default RecentWork;
