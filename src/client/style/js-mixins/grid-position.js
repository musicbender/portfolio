import { config } from '../../../shared/config.json';

module.exports = (mixin, index, prop) => {
  console.log(config.gridLines);
  console.log(`index: ${index}`);
  console.log(`prop: ${prop}`);

  if (!config.gridLines[index]) {
    return { [prop]: '0%' }
  }

  let percent = 0;

  for (let i = 0; i <= index; i++) {
    percent += config.gridLines[i];
  }

  return { [prop]: `${percent}%` }
}
