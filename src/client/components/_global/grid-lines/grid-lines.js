import React from 'react';
import PropTypes from 'prop-types';
import { config } from '../../../../shared/config.json'
import cn from 'classnames/bind';
import style from './grid-lines.css';
const cx = cn.bind(style);

const GridLines = () => (
  <div className={cx(style.gridLines)}>
    {
      config.gridLines.map((column, i) => (
        <div
          className={cx(style.gridItemWrapper)}
          style={{ width: `${column}%`}}
          key={'grid' + column + i}
        >
          <div className={cx(style.gridLine)}></div>
        </div>
      ))
    }
  </div>
);

export default GridLines;
