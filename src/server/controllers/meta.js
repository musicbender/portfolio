import pathToRegexp from 'path-to-regexp';
import { meta, pages } from '../../shared/config.json';

export const getPageData = (path, pageData = pages) => {
  if (!path) {
    return false;
  }

  let matchedPage = Object.keys(pageData).find(page => {
    const rx = pathToRegexp(pageData[page].path || '');
    return rx.test(path);
  });

  return matchedPage && matchedPage !== undefined && pageData[matchedPage]
    ? pageData[matchedPage]
    : false;
}

// get static meta data from meta config.json
export const getMeta = (pageData) => {
  return {
    title: pageData.title ? pageData.title + meta.suffix : meta.title,
    description: pageData.description || meta.description
  }
}
