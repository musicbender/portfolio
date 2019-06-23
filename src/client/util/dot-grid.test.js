import { expect } from 'chai';
import { getTextWidth } from './dot-grid';

describe('util/dot-grid.js', function () {
  describe('getTextWidth()', function () {
    const tests = [
      {
        assert: ['text', 7],
        expected: 'calc(14% + 3px)'
      },
      {
        assert: ['text', 12],
        expected: 'calc(24% + 3px)'
      },
      {
        assert: ['text', 1],
        expected: 'calc(4% + 3px)'
      },
      {
        assert: ['text', 70],
        expected: 'calc(100% + 3px)'
      },
      {
        assert: ['text', -2],
        expected: 'calc(0% + 3px)'
      },
      {
        assert: ['muchlongertext', 7],
        expected: 'calc(28% + 3px)'
      },
      {
        assert: ['text', 7],
        expected: 'calc(28% + 3px)'
      },
      {
        assert: ['text', 7],
        expected: 'calc(28% + 3px)'
      },
      {
        assert: ['text', 7],
        expected: 'calc(28% + 3px)'
      },
      {
        assert: ['text', 7],
        expected: 'calc(28% + 3px)'
      },
      {
        assert: ['text', 7],
        expected: 'calc(28% + 3px)'
      }
    ];

    tests.forEach(({ assert, expected }) => {
      it(`imput of ${assert.join()} should output ${expected}`, function () {
        expect(getTextWidth(...assert)).to.equal(expected);
      });
    });
  });
});

// 0: 7.142857142857143
// 1: 14.285714285714286
