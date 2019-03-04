import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import GridLines from './_global/grid-lines';
import Toolbar from './_global/toolbar';
import cn from 'classnames/bind';
import style from '../style/main.css';
const cx = cn.bind(style);

//pages
import Home from './home';

@withRouter
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cx(style.pjPortfolio)}>
        <GridLines />
        <Toolbar />
        <div className={cx(style.pageWrapper)}>
          <Route path="/" exact component={Home} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
