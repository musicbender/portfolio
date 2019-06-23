import React from 'react';
import PropTypes from 'prop-types';
import { getTextWidth } from '../../../util/dot-grid';
import cn from 'classnames/bind';
import style from './text-embed.css';
const cx = cn.bind(style);

const TextEmbed = ({
  data,
  spacing,
  offsets,
  width
}) => {
  const { text, position, direction } = data;
  const x = position[0] * spacing[0];
  const y = position[1] * spacing[1];

  return (
    <div
      className={cx(style.textEmbed, style[direction], text)}
      style={{
        left: `calc(${x}% - ${offsets.x}px)`,
        top: `calc(${y}% - ${offsets.y}px)`,
        width
      }}
    >
      {
        text
          .split('')
          .map((letter, i) => (
            <span key={letter + i + text}>{letter}</span>
          ))
      }
    </div>
  );
}

TextEmbed.propTypes = {
  data: PropTypes.object.isRequired,
  spacing: PropTypes.arrayOf(PropTypes.number),
  offsets: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
}

export default TextEmbed;
