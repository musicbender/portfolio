import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cn from 'classnames/bind';
import style from './case-study.css';
const cx = cn.bind(style);

class CaseStudy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className={cx(style.caseStudy, 'page')}>

      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CaseStudy));
