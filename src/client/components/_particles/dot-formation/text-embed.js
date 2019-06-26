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
  width,
  active
}) => {
  const { text, position, direction } = data;
  const x = position[0] * spacing[0];
  const y = position[1] * spacing[1];

  return (
    <div
      className={cx(
        style.textEmbed,
        style[direction],
        text,
        { [style.active]: active }
      )}
      style={{
        left: `calc(${x}% - ${offsets.x}px)`,
        top: `calc(${y}% - ${offsets.y}px)`,
        width
      }}
    >
      <div className={cx(style.textWrapper)}>
        {
          text
            .split('')
            .map((letter, i) => (
              <span style={{ transitionDelay: `${i * 200}ms` }} key={letter + i + text}>
                {letter}
              </span>
            ))
        }
      </div>
      <div className={cx(style.revealBar)} />
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
