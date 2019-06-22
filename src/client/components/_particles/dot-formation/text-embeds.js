import React from 'react';
import PropTypes from 'prop-types';
import TextEmbed from './text-embed';
import cn from 'classnames/bind';
import style from './text-embeds.css';
const cx = cn.bind(style);

const TextEmbeds = ({
  textConfig,
  spacing,
  getDotOffset,
  dotSize
}) => {
  return (
    <div className={cx(style.textEmbeds)}>
      {
        textConfig.map((item, i) => (
          <TextEmbed
            data={item}
            spacing={spacing}
            offsets={{
              x: getDotOffset(item.position[0], 'x'),
              y: getDotOffset(item.position[1], 'y') + (dotSize / 2)
            }}
            key={item.text + i}
          />
        ))
      }
    </div>
  );
}

TextEmbeds.propTypes = {
  textConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
  spacing: PropTypes.arrayOf(PropTypes.number),
  getDotOffset: PropTypes.func
}

TextEmbeds.defaultProps = {
  spacing: [7, 7]
}

export default TextEmbeds;
