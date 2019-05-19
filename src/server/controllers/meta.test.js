import { expect } from 'chai';
import { regexEscape } from './util';
import mockPageData from '../../../test/mocks/page-config.json';

describe('meta.js', function () {
  describe('getPageData()', function () {
    const tests = [
      {
        arg: '/',
        expected: 'home'
      },
      {
        arg: '/about',
        expected: 'about'
      },
      {
        arg: '/news',
        expected: 'news'
      },
      {
        arg: '/news/an-article',
        expected: 'newsArticle'
      },
      {
        arg: '/races',
        expected: 'races'
      },
      {
        arg: '/races/human',
        expected: 'racesHuman'
      },
      {
        arg: '/classes/human/fighter',
        expected: 'classesHumanFighter'
      },
      {
        arg: '/classes/orc/mystic',
        expected: 'classesOrcMystic'
      },
      {
        arg: '/classes/ertheia/fighter',
        expected: 'anyClass'
      },
      {
        arg: '/classes/ertheia/wizard',
        expected: 'anyWizard'
      },
      {
        arg: '/not-real',
        expected: false
      },
      {
        arg: '',
        expected: false
      },
      {
        arg: null,
        expected: false
      }
    ];

    tests.forEach(({ arg, expected }) => {
      it(`The path ${arg} returns data for ${expected}`, function () {
        const data = getPageData(arg, mockPageData);
        expect(data.id || data).to.equal(expected);
      });
    })
  });
});
