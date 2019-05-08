import { config } from '../../shared/config.json';

export const getRandomColor = () => {
  const colorArr = Object.keys(config.colors);
  const randomKey = colorArr[Math.floor(Math.random() * colorArr.length)];
  return config.colors[randomKey];
}
