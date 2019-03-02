import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import GridLines from './_global/grid-lines';
import '../style/main.css';

//pages
import Home from './home';

@withRouter
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pj-portfolio">
        <GridLines />
        <div className="page-wrapper">
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
