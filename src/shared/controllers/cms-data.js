import path from 'path';
import { CMS_DATA, CDN_DATA, } from './axios';
import { cmsCollections } from '../config.json';
import { site } from '../config.json';

// get one item from CMS news data and return meta specific data
export const getNewsMeta = (allNewsData, basename) => {
  const item = allNewsData.find(item => item.basename === basename);
  return {
    title: (item.title || site.title) + site.suffix,
    description: item.summary || site.description
  };
}

// find news data basename from the url
export const getNewsBasename = (path) => {
  const regex = /\/news\/(.+)/g;
  const output = regex.exec(path);
  return output && output.length > 1 ? output[1] : null;
}

// get one CMS collection
export const getCMSCollection = (c) => {
  return new Promise((resolve, reject) => {
    switch(process.env.CMS_DATA_SOURCE) {
      // if cms, grab data directly from CMS API
      case 'cms': {
        const url = `${c}/entities/${process.env.CMS_API_KEY}&include_private=${process.env.CMS_INCLUDE_DRAFTS}`;
        CMS_DATA.get(url)
          .then(res => {
            if (res.status !== 200) {
              reject(res);
            } else {
              resolve({
                data: res.data.data,
                collection: c
              });
            }
          })
          .catch(reject)
          break;
      }
      // if cdn, get data from json file in CDN
      case 'cdn': {
        const url = `/data/${c}.json`;
        CDN_DATA.get(url)
          .then(res => {
            if (res.status !== 200) {
              reject('CMS_ERROR');
            } else {
              resolve({
                data: res.data,
                collection: c
              });
            }
          });
          break;
      }
    }
  });
}

// get all CMS colelctions
export const getAllCMSData = () => {
  return new Promise((resolve, reject) => {
    Promise.all(cmsCollections.map(getCMSCollection))
      .then(resolve)
      .catch(reject);
  });
}
