import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './svg.css';
const cx = cn.bind(style);

export const Svg = ({
  className,
  el,
  styles,
  svg
}) => {
    const Element = el;
    return (
        <Element
          style={styles}
          className={cx(
            'svg-container',
            style.root,
            className
          )}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}

Svg.propTypes = {
    className: PropTypes.string,
    el: PropTypes.string.isRequired,
    styles: PropTypes.object,
    svg: PropTypes.node.isRequired,
};

Svg.defaultProps = {
    el: 'span',
    className: ''
};

export default Svg;
