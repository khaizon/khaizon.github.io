import { useLoaderData } from 'react-router-dom';
import './Projects.css';
import Divider from '../components/Divider';
import ProjectsGrid from '../components/ProjectsGrid';

export const getAllProjects = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}/projects/projectsMetaData.json`);
  const projects = await response.json();
  return { projects };
};

export default function Projects() {
  const { projects }: any = useLoaderData();

  return (
    <div className="projects">
      <div className="max-width-container">
        <div className="projects-title image-text">My Projects</div>
        <Divider alignLeft padding="1rem" />
        <br />
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
