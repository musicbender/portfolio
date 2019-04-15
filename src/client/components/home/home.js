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
import Contact from '../contact';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atBottom: false
    }
  }

  handleBottom(atBottom = !this.state.atBottom) {
    this.setState({ atBottom });
  }

  render() {
    return (
      <main className={cx(style.home, 'page')}>
        <Header />
        <div className={cx(style.wrapper)}>
          <RecentWork />
          <CavieDots at={this.state.atBottom} />
          <Contact handleBottom={this.handleBottom} />
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
