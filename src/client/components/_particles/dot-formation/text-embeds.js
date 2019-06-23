import React from 'react';
import PropTypes from 'prop-types';
import TextEmbed from './text-embed';
import { getTextWidth } from '../../../util/dot-grid';
import cn from 'classnames/bind';
import style from './text-embeds.css';
const cx = cn.bind(style);

const TextEmbeds = ({
  textConfig,
  spacing,
  getDotOffset,
  dotSize
}) => {
  const getTextOffset = (item) => {
    return item.direction === 'right'
      ? getDotOffset(item.position[0], 'x')
      : getDotOffset(item.position[1], 'y')
  }


  const getTextSpacing = (direction) => {
    switch(direction) {
      case 'up':
        return spacing[1] / 2;
      case 'down':
        return (spacing[1] / 2) - 0.25;
      default:
        return spacing[0];
    }
  }

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
            width={getTextWidth({
              text: item.text,
              spacing: getTextSpacing(item.direction),
              offset: getTextOffset(item)
            })}
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
