import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../style/main.css';

@withRouter
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pj-portfolio">
        Oh Yeeeeaaaahhh
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
