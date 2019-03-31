import React, { Component } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import Heading from '../_global/heading';
import WorkItem from './work-item';
import cn from 'classnames/bind';
import workData from '../../configs/recent-work0.json';
import contentConf from '../../configs/content';
import { config } from '../../../shared/config';
import style from './recent-work.css';
const cx = cn.bind(style);

class RecentWork extends Component {
  constructor(props) {
    super(props);
    this.handleWorkStops = this.handleWorkStops.bind(this);
    this.content = contentConf.home.sections.recentWork;
    this.defaultWorkStops = workData.map(w => false);
    this.state = {
      workStops: this.defaultWorkStops
    }
  }

  handleWorkStops(index, stopped) {
    return () => {
      const isStopped = stopped !== null ? stopped : !this.state.workStops[index];
      const newState = update(this.state, {
        workStops: {
          [index]: {
            $set: isStopped
          }
        }
      });

      this.setState(newState);
    }
  }

  renderWorkItems() {
    return workData.map((item, i) => {
      return i < config.workItemsAmount && (
        <WorkItem
          item={item}
          index={i}
          isStopped={this.state.workStops[i]}
          handleWorkStops={this.handleWorkStops}
          key={item.title + `${(i * 7)}`}
        />
      );
    });
  }

  render() {
    return (
      <div className={cx(style.recentWork)}>
        <Heading text={this.content.heading} />
        <div className={cx(style.parentWrapper)}>
          <div className={cx(style.workItemsWrapper)}>
            {this.renderWorkItems()}
          </div>
          <div className={cx(style.dotBoxWrapper)}>

          </div>
        </div>
      </div>
    );
  }
}

RecentWork.propTypes = {

}

RecentWork.defaultProps = {

}

export default RecentWork;
