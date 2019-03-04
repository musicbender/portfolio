import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './recent-work.css';
const cx = cn.bind(style);

const RecentWork = (props) => {
  return (
    <div className={cx(style.recentWork)}>
      recent work
    </div>
  );
}

RecentWork.propTypes = {

}

RecentWork.defaultProps = {

}

export default RecentWork;
