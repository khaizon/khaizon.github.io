import './ProjectsGrid.css';

import { useNavigate } from 'react-router-dom';

interface ProjectsGridProps {
  projects: Array<{
    id: string;
    title: string;
    description: string;
    date: string;
    thumbnail: string;
  }>;
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const navigate = useNavigate();
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project">
          <div
            className="project-image"
            key={index + '1'}
            onClick={() => {
              navigate(import.meta.env.BASE_URL + `projects/${project.id}`);
            }}
          >
            <img src={import.meta.env.BASE_URL + project.thumbnail} alt={project.title} />
          </div>
          <div
            className="project-text"
            key={index + '2'}
            onClick={() => {
              navigate(import.meta.env.BASE_URL + `projects/${project.id}`);
            }}
          >
            <div className="project-name">{project.title}</div>
            <div className="project-description">{project.description}</div>
            <div className="project-divider" />
            <div className="project-date">{project.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
