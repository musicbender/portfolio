import { expect } from 'chai';
import { getTextWidth, dotsFromCoords } from './dot-grid';

describe('util/dot-grid.js', function () {
  describe('dotsFromCoords()', function () {
    const tests = [
      {
        assert: [[0, 0], 'text', 'right', 15],
        expected: [0, 1]
      },
      {
        assert: [[5, 0], 'text', 'right', 15],
        expected: [5, 6]
      },
      {
        assert: [[0, 1], 'text', 'right', 15],
        expected: [15, 16]
      },
      {
        assert: [[5, 1], 'text', 'right', 15],
        expected: [20, 21]
      },
      {
        assert: [[0, 0], 'longertext', 'right', 15],
        expected: [0, 1, 2, 3, 4]
      },
      {
        assert: [[0, 0], 't', 'right', 15],
        expected: [0]
      },
      {
        assert: [[0, 0], 'te', 'right', 15],
        expected: [0]
      },
      {
        assert: [[3, 3], 'text', 'right', 5],
        expected: [18, 19]
      },
      {
        assert: [[20, 1], 'goats', 'right', 30],
        expected: [50, 51, 52]
      },
      {
        assert: [[0, 0], 'text', 'down', 15],
        expected: [0, 15]
      },
      {
        assert: [[10, 2], 'goats', 'down', 15],
        expected: [40, 55, 70]
      },
      {
        assert: [[0, 0], 'te', 'down', 15],
        expected: [0]
      },
      {
        assert: [[0, 0], 'longertext', 'down', 10],
        expected: [0, 10, 20, 30, 40]
      },
      {
        assert: [[0, 0], 'longertext', 'down', 1],
        expected: [0, 1, 2, 3, 4]
      },
      {
        assert: [[0, 2], 'text', 'up', 15],
        expected: [30, 15]
      },
      {
        assert: [[10, 5], 'goats', 'up', 15],
        expected: [85, 70, 55]
      },
      {
        assert: [[0, 2], 'te', 'up', 15],
        expected: [30]
      },
      {
        assert: [[0, 2], 't', 'up', 15],
        expected: [30]
      },
      {
        assert: [[0, 5], 'longertext', 'up', 10],
        expected: [50, 40, 30, 20, 10]
      },
      {
        assert: [[0, 5], 'longertext', 'up', 1],
        expected: [5, 4, 3, 2, 1]
      },
      {
        assert: [[0, 0], 'veryverylongtextthatgoesforever', 'right', 20],
        expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      },
      {
        assert: [[80, 0], 'longertext', 'right', 100],
        expected: [80, 81, 82, 83, 84]
      },
      {
        assert: [[0, 0], '', 'right', 10],
        expected: []
      },
      {
        assert: [[], 'text', 'right', 10],
        expected: [0, 1]
      },
      {
        assert: [[3, 0], 'text'],
        expected: [3, 4]
      },
      {
        assert: [],
        expected: []
      },
      {
        assert: [[]],
        expected: []
      },
      {
        assert: [null],
        expected: []
      },
      {
        assert: [null, 'text'],
        expected: [0, 1]
      },
      {
        assert: [null, null, 'up'],
        expected: []
      }
    ];

    tests.forEach(({ assert, expected }) => {
      it(`Inputing ${JSON.stringify(assert)} will return ${JSON.stringify(expected)}`, function () {
        expect(dotsFromCoords(...assert)).to.eql(expected);
      });
    });
  });

  describe('getTextWidth()', function () {
    const tests = [
      {
        assert: ['text', 7, 6],
        expected: 'calc(14% - 3px)'
      },
      {
        assert: ['text', 12, 3],
        expected: 'calc(24% - 1.5px)'
      },
      {
        assert: ['text', 1],
        expected: 'calc(2% - 0px)'
      },
      {
        assert: ['text', 70],
        expected: 'calc(100% - 0px)'
      },
      {
        assert: ['text', -2],
        expected: 'calc(0% - 0px)'
      },
      {
        assert: ['t', 6, 6],
        expected: 'calc(3% - 3px)'
      },
      {
        assert: ['text space', 6, 10],
        expected: 'calc(30% - 5px)'
      },
      {
        assert: ['text', 7, 100],
        expected: 'calc(14% - 50px)'
      },
      {
        assert: ['text', 7, 0],
        expected: 'calc(14% - 0px)'
      },
      {
        assert: ['text'],
        expected: '0px'
      },
      {
        assert: [],
        expected: '0px'
      },
      {
        assert: [''],
        expected: '0px'
      },
      {
        assert: ['', 7],
        expected: '0px'
      }
    ];

    tests.forEach(({ assert, expected }) => {
      it(`imput of ${assert.join()} should output ${expected}`, function () {
        expect(getTextWidth(...assert)).to.equal(expected);
      });
    });
  });
});
