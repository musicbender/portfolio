import { pathIsFile } from '../../server/controllers/util';
import { getMeta, getPageData } from '../../server/controllers/meta';
import fetchData from '../../server/controllers/data';

/*
 * getMetaData - get meta data for a page based on path or given data
 * @param {string} path - url path for page
 * @param {object} metaData - [OPTIONAL] meta data obj. This function would only give it fallbacks
 * @param {array} externalData - [OPTIONAL] all cms data. If given, it will find the correct item. If not it will download the cms data first
 * @return {object} all meta data for page
*/

export const getMetaData = (path, metaData, externalData) => {
  return new Promise((resolve, reject) => {
    console.log(`path: ${path}`);
    if (pathIsFile(path)) {
      resolve();
      return;
    }

    const pageData = metaData || getPageData(path);

    const needsData = pageData.hasOwnProperty('dataDependency') && !!fetchData[pageData.dataDependency];

    if (needsData) {
      console.log(`needs DATA`);
      fetchData[pageData.dataDependency](path, externalData).then(resolve).catch(reject);
    } else {
      console.log(`resolving meta data`);
      resolve({ metaData: getMeta(pageData) });
    }
  });
}
