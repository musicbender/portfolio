import { getProjectMeta, getProjectId } from '../../shared/controllers/projects-data';

const fetchData = {
  // project data
  projects: (path, externalData) => {
    return new Promise((resolve, reject) => {
      const projectId = getProjectId(path, externalData);
      resolve({ metaData: getProjectMeta(projectId) });
    });
  }
}

export default fetchData;
