import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cn from 'classnames/bind';
import style from './home.css';
const cx = cn.bind(style);

// sections
import Header from '../header';
import RecentWork from '../recent-work';
import CavieDots from '../cavie-dots';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className={cx(style.home, 'page')}>
        <Header />
        <div className={cx(style.wrapper)}>
          <RecentWork />
          <CavieDots />
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
