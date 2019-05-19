import projects from '../../shared/projects.json';

export const filterProjectData = (type, data = projects) => {
  return projects.filter(project => !project.disabled && project.type === type);
}
