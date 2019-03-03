import React, { Component } from 'react';
import cn from 'classnames/bind';
import style from './error-boundary.css';
const cx = cn.bind(style);

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: null
    }
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      return (
        <div className={cx(style.errorBoundary)}>
          <h2>Something went wrong</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Component => props => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
);
