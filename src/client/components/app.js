import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import GridLines from './_global/grid-lines';
import Toolbar from './_global/toolbar';
import SplashScreen from './splash-screen';
import Footer from './footer';
import Modal from './_global/modal';
import Curtain from './_global/curtain';
import { changeSplash, changeTransport, setIsMobile } from '../actions/global';
import { throttle, hasWindow } from '../util/util';
import { config } from '../../shared/config.json';
import cn from 'classnames/bind';
import style from '../style/main.css';
const cx = cn.bind(style);

//pages
import Home from './home';

@withRouter
class App extends Component {
  constructor(props) {
    super(props);
    this.handleToTop = this.handleToTop.bind(this);
    this.handleResize = throttle(this.handleResize.bind(this), 100);
  }

  componentDidMount() {
    this.props.setIsMobile();
    const splashTimeout = config.splashScreenDebug ? 6000000 : config.splashScreenTimeout;

    window.requestTimeout(() => {
      this.props.changeSplash(false);
    }, splashTimeout);

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleToTop() {
    this.props.changeTransport(true);
    window.requestTimeout(() => {
      window.scrollTo(0, 0);
    }, config.transportDuration / 2.5);
  }

  handleResize() {
    if (this.props.isMobile && window.innerWidth > config.mobileBreakpoint) {
      this.props.setIsMobile();
    }

    if (!this.props.isMobile && window.innerWidth < config.mobileBreakpoint) {
      this.props.setIsMobile();
    }
  }

  render() {
    return (
      <div className={cx(
        style.pjPortfolio,
        { [style.splashOpen]: this.props.splashOpen }
      )}>
        <div className={cx(style.wrapper)}>
          <GridLines />
          <Toolbar />
          {
            this.props.splashOpen &&
            <SplashScreen />
          }
          <div className={cx(style.pageWrapper)}>
            <Route path="/" exact component={Home} />
          </div>
        </div>
        <Footer handleToTop={this.handleToTop} />
        {
          this.props.transportOpen &&
          <Modal>
            <Curtain entrance="full" exit="full" duration={1275}/>
          </Modal>
        }
        {
          config.scrollDebug &&
          <div className={cx(style.scrollDebug)} style={{ top: this.props.skillsTop }}/>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ global, home }) => {
  return {
    splashOpen: global.splashOpen,
    transportOpen: global.transportOpen,
    isMobile: global.isMobile,
    skillsTop: home.skillsTop
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeSplash,
    changeTransport,
    setIsMobile
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
