import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { throttle } from '../../util/util';
import { config } from '../../../shared/config.json';
import { config as recentWorkConf } from '../recent-work/config.json';
import cn from 'classnames/bind';
import style from './home.css';
const cx = cn.bind(style);

// sections
import Header from '../header';
import AboutMe from '../about-me';
import RecentWork from '../recent-work';
import CavieDots from '../cavie-dots';
import Contact from '../contact';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll.bind(this), 50);
    this.bottom = config.homeBottom;
    this.state = {
      atBottom: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    if (window.scrollY >= this.bottom) {
      if (!this.state.atBottom) {
        this.setState({ atBottom: true });
      }
    }

    if (window.scrollY < this.bottom) {
      if (this.state.atBottom) {
        this.setState({ atBottom: false });
      }
    }
  }

  handleBottom(atBottom = !this.state.atBottom) {
    this.setState({ atBottom });
  }

  render() {
    return (
      <main className={cx(style.home, 'page')}>
        <div className={cx(style.outterWrapper)}>
          <Header />
          <div className={cx(style.wrapper)}>
            <AboutMe />
            <RecentWork />
            <CavieDots baseStart={recentWorkConf.baseTop - 400} atBottom={this.state.atBottom} />
            <Contact atBottom={this.state.atBottom} />
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = ({ global }) => {
  return {
    pageLoaded: global.pageLoaded,
    splashOpen: global.splashOpen,
    mode: global.mode
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
