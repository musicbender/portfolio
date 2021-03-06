import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'immutability-helper';
import Heading from '../_global/heading';
import Particles from './particles';
import WorkItem from './work-item';
import { filterProjectData } from '../../util/data';
import { throttle } from '../../util/util';
import contentConf from '../../configs/content';
import { config } from '../../../shared/config.json';
import { setRecentWorkTop } from '../../actions/global';
import cn from 'classnames/bind';
import style from './recent-work.css';
const cx = cn.bind(style);

class RecentWork extends Component {
  constructor(props) {
    super(props);
    this.content = contentConf.home.sections.recentWork;
    this.workData = filterProjectData('work');
    this.defaultWorkStops = this.workData.map(w => false);
    this.handleResize = throttle(this.handleResize.bind(this), 100);
    this.handleWorkStops = this.handleWorkStops.bind(this);
    this.state = {
      workStops: this.defaultWorkStops
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.transportOpen && this.props.transportOpen) {
      this.resetWorkStops();
    }
  }

  handleResize() {
    this.setTop(true);
  }

  setTop(didResize = false, input) {
    let value = input;

    if (value == null) {
      const section = document.getElementById('recent-work-section');
      const rect = section.getBoundingClientRect();
      value = rect.top;
    }


    this.props.setRecentWorkTop({ value, didResize });
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

  resetWorkStops() {
    this.setState({ workStops: this.defaultWorkStops });
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
          isMobile={this.props.isMobile}
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
        <Particles isMobile={this.props.isMobile} />
      </div>
    );
  }
}

const mapStateToProps = ({ global, home }) => {
  return {
    recentWorkTop: home.recentWorkTop,
    isMobile: global.isMobile,
    transportOpen: global.transportOpen
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setRecentWorkTop
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentWork);
