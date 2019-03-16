import { expect } from 'chai'
import { getIndexOrLast, countLongestArray } from './util';

describe('util.js', function () {
  describe('getIndexOrLast()', function () {
    const tests = [
      {
        args: [
          [1, 2, 3],
          1
        ],
        expected: 2
      },
      {
        args: [
          [1, 2, 3],
          2
        ],
        expected: 3
      },
      {
        args: [
          [1, 2, 3]
        ],
        expected: 1
      },
      {
        args: [
          [1, 2, 3],
          5
        ],
        expected: 3
      },
      {
        args: [
          [1, 2, 3],
          9
        ],
        expected: 3
      },
      {
        args: [
          [1, 2, 3, 4, 5, 6, 7],
          25
        ],
        expected: 7
      },
      {
        args: [
          ['string', 'goat', 'can'],
          2
        ],
        expected: 'can'
      },
      {
        args: [
          ['string', 'goat', 'can'],
          8
        ],
        expected: 'can'
      },
      {
        args: [
          [],
          2
        ],
        expected: false
      },
      {
        args: [],
        expected: false
      },
      {
        args: [
          ['string', 4, true, [1, 2, 3]],
          2
        ],
        expected: true
      },
      {
        args: [
          ['string', 4, true, [1, 2, 3]],
          25
        ],
        expected: [1, 2, 3]
      },
      {
        args: [
          'not-an-array',
          2
        ],
        expected: false
      }
    ];

    tests.forEach(({ args, expected }) => {
      it(`${args[0]} with the index of ${args[1]} should return ${expected}`, function () {
        expect(getIndexOrLast(args[0], args[1])).to.eql(expected);
      });
    });
  });

  describe('countLongestArray()', function () {
    const tests = [
      {
        arg: [[1,2,3], [1,2,3,4]],
        expected: 4,
        description: 'Array of 3 and 4 to return 4'
      },
      {
        arg: [[1,2,3], [1,2]],
        expected: 3,
        description: 'Array of 3 and 2 to return 3'
      },
      {
        arg: [[1,2,3,7,9,8,3], [1,2,3,4]],
        expected: 7,
        description: 'Array of 7 and 4 to return 7'
      },
      {
        arg: [[1,2,3], [1,2], [1, 2]],
        expected: 3,
        description: 'Array of 3, 2, and 2 to return 3'
      },
      {
        arg: [[1], []],
        expected: 1,
        description: 'Array of 1 and 0 to return 1'
      },
      {
        arg: [['string', 'yes', 'no'], ['whatever', 'goats']],
        expected: 3,
        description: 'Array 3 and 2 to return 3'
      },
      {
        arg: [[1, 2], [1, 2]],
        expected: 2,
        description: 'Array of 2 and 2 to return 2'
      },
      {
        arg: [[], []],
        expected: 0,
        description: 'Array of 0 and 0 to return 0'
      },
      {
        arg: [[1,2,3]],
        expected: 3,
        description: 'Array of 3 to return 3'
      },
      {
        arg: [[1,2,3], [1,2,3,4], [1, 2], [1, 2, 3, 4, 5], [1], [1, 2]],
        expected: 5,
        description: 'Array of 3, 4, 2, 5, 1, and 2 to return 5'
      },
      {
        arg: [[]],
        expected: 0,
        description: 'Array of 0 to return 0'
      },
      {
        arg: [],
        expected: false,
        description: 'No arrays return false'
      },
      {
        arg: undefined,
        expected: false,
        description: 'No argument returns false'
      }
    ];

    tests.forEach(({ arg, expected, description }) => {
      it(description, function () {
        expect(countLongestArray(arg)).to.equal(expected);
      });
    });
  });
});
