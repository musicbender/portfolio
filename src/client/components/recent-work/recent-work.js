import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import Heading from '../_global/heading';
import Particles from './particles';
import WorkItem from './work-item';
import { filterProjectData } from '../../util/data';
import contentConf from '../../configs/content';
import { config } from '../../../shared/config.json';
import { setRecentWorkTop } from '../../actions/global';
import cn from 'classnames/bind';
import style from './recent-work.css';
const cx = cn.bind(style);

class RecentWork extends Component {
  constructor(props) {
    super(props);
    this.handleWorkStops = this.handleWorkStops.bind(this);
    this.content = contentConf.home.sections.recentWork;
    this.workData = filterProjectData('work');
    this.defaultWorkStops = this.workData.map(w => false);
    this.state = {
      workStops: this.defaultWorkStops
    }
  }

  componentDidMount() {
    const section = document.getElementById('recent-work-section');
    const rect = section.getBoundingClientRect();
    this.props.setRecentWorkTop(rect.top);
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
    return this.workData.map((item, i) => {
      return i < config.workItemsAmount && (
        <WorkItem
          item={item}
          index={i}
          isStopped={this.state.workStops[i]}
          handleWorkStops={this.handleWorkStops}
          baseTop={this.props.recentWorkTop}
          key={item.title + `${(i * 7)}`}
        />
      );
    });
  }

  render() {
    return (
      <div id="recent-work-section" className={cx(style.recentWork)}>
        <Heading text={this.content.heading} />
        <div className={cx(style.parentWrapper)}>
          <div className={cx(style.workItemsWrapper)}>
            {this.renderWorkItems()}
          </div>
        </div>
        <Particles />
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => {
  return {
    recentWorkTop: global.recentWorkTop
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setRecentWorkTop
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentWork);
