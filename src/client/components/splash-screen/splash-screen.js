import React from 'react';
import PropTypes from 'prop-types';
import { config } from '../../../shared/config.json';
import cn from 'classnames/bind';
import style from './splash-screen.css';
const cx = cn.bind(style);

const SplashScreen = (props) => {
  const renderBlocks = () => {
    return config.gridLines.map((g, i) => {
      const blockNum = 7;
      const preDelay = 1000;
      const baseDelay = 75;
      let blocks = [];

      for (let j = 0; j < blockNum; j++) {
        const max = (config.gridLines.length * blockNum * baseDelay) / 2;
        const delay = preDelay + (max - (baseDelay * ((i + 1) / 2) * (j + 1)));
        blocks = [
          ...blocks,
          <div className={cx(style.block)} key={'splash-block' + i + '_' + j}>
            <div
              className={cx(style.innerBlock)}
              style={{ animationDelay: delay + 'ms' }}
            ></div>
          </div>
        ];
      }

      return blocks;
    });
  }

  return (
    <div className={cx(style.splashScreen)}>
      <div className={cx(style.blockWrapper)}>
        {renderBlocks()}
      </div>
    </div>
  );
}

SplashScreen.propTypes = {

}

SplashScreen.defaultProps = {

}

export default SplashScreen;
