import appConfig from '../config.json';

export const objOrArray = input => {
  if (typeof input === "object") {
    return Array.isArray(input) ? 'array' : 'object';
  } else {
    return false;
  }
}

export const getConfigItem = (type, key, value) => {
  const conf = appConfig[type];
  const typeOf = objOrArray(conf);

  if (!conf || !typeOf) {
    return false;
  }

  const output = typeOf === 'array'
    ? conf.find(item => item[key] === value)
    : conf[Object.keys(conf).find((item) => conf[item][key] === value)]

  return output || false;
}

/*
 * limitString - Puts character limit on string and puts '...' after if it goes over
 * @param {string} string - the string to limit
 * @param {number} limit - The limit for the string. Default is 50
 * @return {string} - The limited string or the original if it doesn't reach limit
 */

export const limitString = (input, limit = 50) => {
  if (!input) {
    return input;
  }

  let string = input;

  if (typeof string !== 'string') {
    string = JSON.stringify(string);
  }

  if (string.length > limit) {
    return string.substring(0, limit) + '...';
  } else {
    return string;
  }
}
