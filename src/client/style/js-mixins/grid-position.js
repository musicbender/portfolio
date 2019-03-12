import { config } from '../../../shared/config.json';

module.exports = (mixin, index = 0, prop = 'left', unit = '%', attach = 'left') => {
  const validUnits = ['%', 'vw'];
  let output;

  if (!config.gridLines[index]) {
    return { [prop]: '0%' }
  }

  if (!validUnits.includes(unit)) {
    unit = validUnits[0];
  }

  let percent = 0;

  for (let i = 0; i <= index; i++) {
    percent += config.gridLines[i];
  }

  percent = config.gridLines.reduce((total, cur, i) => {
    return i <= index ? total + cur : total;
  });

  output = {
    [prop]: `${percent}${unit}`
  }

  if (attach === 'right') {
    output = {
      ...output,
      transform: 'translateX(-100%)'
    }
  }

  return output;
}
