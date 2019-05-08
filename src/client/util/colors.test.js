import { expect } from 'chai';
import { config } from '../../shared/config.json';
import { getRandomColor } from './colors';

describe('util/colors.js', function () {
  describe('getRandomColor()', function () {
    const testsNum = 10;
    for (let i = 0; i < testsNum; i++) {
      it(`#${i + 1} - Expect random color to be one of the list of colors`, function () {
        expect(getRandomColor()).to.be.oneOf(Object.values(config.colors));
      });
    }
  });
});
