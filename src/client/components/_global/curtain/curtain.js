import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { config } from '../../../../shared/config.json';
import cn from 'classnames/bind';
import style from './curtain.css';
const cx = cn.bind(style);

class Curtain extends Component {
  constructor(props) {
    super(props);
    this.blockNum = 7;
    this.baseDelay = 55;
    this.timeout = null;
    this.state = {
      exiting: false
    }
  }

  componentDidMount() {
    this.timeout = window.requestTimeout(() => {
      this.setState({ exiting: true });
    }, this.props.duration);
  }

  componentWillUnmount() {
    window.clearRequestTimeout(this.timeout);
  }

  getBlockDelay(i, j) {
    const { entrance, exit } = this.props;
    const { exiting } = this.state;

    switch (true) {
      case exiting && exit === 'blocks':
      case !exiting && entrance === 'blocks':
        const max = (config.gridLines.length * this.blockNum * this.baseDelay) / 2;
        return max - (this.baseDelay * ((i + 1) / 2) * (j + 1));
      case exiting && exit === 'reverse-blocks':
      case !exiting && entrance === 'reverse-blocks':
        return this.baseDelay * i;
      case exiting && exit === 'rows':
      case !exiting && entrance === 'rows':
        return this.baseDelay * ((config.gridLines.length - 1) - j);
      default:
        return this.baseDelay;
    }
  }

  renderBlocks() {
    return config.gridLines.map((g, i) => {
      let blocks = [];

      for (let j = 0; j < this.blockNum; j++) {
        const delay = this.getBlockDelay(i, j);
        const isEnter = !this.state.exiting && this.props.entrance !== 'none';
        const isExit = this.state.exiting && this.props.exit !== 'none';

        blocks = [
          ...blocks,
          <div className={cx(style.block)} key={'splash-block' + i + '_' + j}>
            <div
              className={cx(
                style.innerBlock,
                { [style[`enter-${this.props.entrance}`]]: isEnter },
                { [style[`exit-${this.props.entrance}`]]: isExit }
              )}
              style={{ animationDelay: delay + 'ms' }}
            ></div>
          </div>
        ];
      }

      return blocks;
    });
  }

  render() {
    return (
      <div className={cx(style.curtain)}>
        {this.renderBlocks()}
      </div>
    );
  }
}

Curtain.propTypes = {
  duration: PropTypes.number,
  entrance: PropTypes.oneOf(['none', 'blocks', 'reverse-blocks', 'rows', 'full']),
  exit: PropTypes.oneOf(['none', 'blocks', 'reverse-blocks', 'rows', 'full'])
}

Curtain.defaultProps = {
  duration: 3000,
  entrance: 'none',
  exit: 'blocks'
}

export default Curtain;
