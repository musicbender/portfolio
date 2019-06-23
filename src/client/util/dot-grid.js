
/*
 * getTextWidth - get css width for split text inside dot grid
 * @param {string} text - text to get width for
 * @param {number} spacing - spacing between chracters
 * @param {number} charSize - pixel size to offset character
 * @return {string} css value for width
**/

export const getTextWidth = (params) => {
  const { text, spacing, offset } = params;

  if (!spacing || typeof text !== 'string' || typeof spacing !== 'number') {
    return '0px';
  }

  if (!offset) {
    offset = 0;
  }

  const sum = text.length * (spacing / 2);
  const limitedSum = Math.max(Math.min(sum, 100), 0);

  return `calc(${limitedSum}% - ${offset / 2}px)`;
}
