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
import { changeSplash, changeTransport } from '../actions/global';
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
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.requestTimeout(() => {
      this.props.changeSplash(false);
    }, config.splashScreenTimeout);
  }

  handleToTop() {
    this.props.changeTransport(true);
    window.requestTimeout(() => {
      window.scrollTo(0, 0);
    }, config.transportDuration / 2);
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
            <Curtain entrance="full" />
          </Modal>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => {
  return {
    splashOpen: global.splashOpen,
    transportOpen: global.transportOpen
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeSplash,
    changeTransport
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
