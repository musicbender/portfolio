export const hasWindow = () => {
  return typeof window !== 'undefined';
}

export const getIndexOrLast = (array = [], index = 0) => {
  if (array.length < 1 || !Array.isArray(array)) {
    return false;
  }

  return array[index] || array[array.length - 1];
}

export const countLongestArray = (arrays = []) => {
  let output = 0;

  if (arrays.length < 1) {
    return false;
  }

  arrays.forEach((arr) => {
    if (arr.length > output) {
      output = arr.length;
    }
  });

  return output;
}
