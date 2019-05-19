import path from 'path';
import projects from '../projects.json';
import { meta } from '../config.json';

// get one project from the project data based on id
export const getProjectMeta = (id, projectsData = projects) => {
  const item = projectsData.find(item => item.id === id);
  return {
    title: item.title ? item.title + meta.suffix : meta.title,
    description: item.description || meta.description
  };
}

// find project id based on path param
export const getProjectId = (path) => {
  const regex = /\/case\-study\/(.+)/g;
  const output = regex.exec(path);
  return output && output.length > 1 ? output[1] : null;
}
