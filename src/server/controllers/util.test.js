import { expect } from 'chai';
import { regexEscape } from './util';

describe('util.js', function () {
  describe('regexEscape()', function () {
    const tests = [
      {
        arg: '/page',
        expected: '\/page'
      },
      {
        arg: '/first/second/',
        expected: '\/first\/second\/'
      },
      {
        arg: 'plus+',
        expected: 'plus\\+'
      },
      {
        arg: 'google.com',
        expected: 'google\\.com'
      },
      {
        arg: '$show^me(the:money)$',
        expected: '\\$show\\^me\\(the:money\\)\\$'
      },
      {
        arg: '*',
        expected: '\\*'
      },
      {
        arg: 'no escape',
        expected: 'no escape'
      },
      {
        arg: '',
        expected: ''
      },
      {
        arg: null,
        expected: ''
      }
    ];

    tests.forEach((test) => {
      const { arg, expected } = test;
      it(`Inputing ${arg} returns ${expected}`, function () {
        expect(regexEscape(arg)).to.equal(expected);
      });
    })
  });
});
