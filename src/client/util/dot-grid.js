
/**
 * getTextWidth - get css width for split text inside dot grid
 * @param {string} text - text to get width for
 * @param {number} spacing - spacing between chracters
 * @param {number} offset - any offset to subtract in px
 * @return {string} css value for width
 */

export const getTextWidth = (text = '', spacing, offset = 0) => {
  if (!spacing || !text || typeof text !== 'string' || typeof spacing !== 'number') {
    return '0px';
  }

  if (!offset) {
    offset = 0;
  }

  const sum = text.length * (spacing / 2);
  const limitedSum = Math.max(Math.min(sum, 100), 0);

  return `calc(${limitedSum}% - ${offset / 2}px)`;
}

/**
 * dotsFromCoords - get dot indexes when given x & y coordinates
 * @param {array} position - array with x and y coordinates
 * @param {string} text - text used to dertermine how many dots are affected
 * @param {string} direction - direction of text
 * @param {number} columns - how many columns in the grid
 * @return {array} list of dot indexes
 */

export const dotsFromCoords = (position = [0, 0], text = '', direction = 'right', columns = 15) => {
  let coords = position;
  let output = [];

  if (!text) {
    return [];
  }

  if (!Array.isArray(coords) || coords.length === 0) {
    coords = [0, 0];
  }

  if (coords.length === 1) {
    coords = [coords[0], 0];
  }

  if (!coords[0] || typeof coords[0] !== 'number') {
    coords[0] = 0;
  }

  if (!coords[1] || typeof coords[1] !== 'number') {
    coords[1] = 0;
  }

  const baseDot = coords[0] + (coords[1] * columns);
  const dotsAmount = Math.ceil(text.length / 2);

  for (let i = 0; i < dotsAmount; i++) {
    let dot;
    switch(direction) {
      case 'up': {
        dot = baseDot - (columns * i);
        break;
      }
      case 'down': {
        dot = baseDot + (columns * i);
        break;
      }
      default: {
        dot = baseDot + i;
      }
    }

    output = [ ...output, dot ];
  }

  return output;
}

export const mapDotsWithText = (textConfig, gridInfo) => {
  return textConfig.map((textItem) => {

  });
}
