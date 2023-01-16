import './ProjectsPanel.css';
import PanelTitle from '../../components/PanelTitle';
import { useNavigate, useLoaderData } from 'react-router-dom';
import ProjectsGrid from '../../components/ProjectsGrid';

export const getRecentProjects = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}projects/projectsMetaData.json`);
  const projects = await response.json();
  return { projects };
};

export default function ProjectsPanel() {
  const navigate = useNavigate();
  const { projects }: any = useLoaderData();
  return (
    <div className="projects-panel">
      <div className="projects-panel-top">
        <div className="projects-panel-title">
          <PanelTitle alignLeft={false} subtitle="Featured Works" title="My Projects" />
        </div>
        <div className="projects-panel-number">
          <div
            className="panel-number image-text"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}/yp.jpeg)`,
            }}
          >
            02
          </div>
        </div>
      </div>
      <div className="projects-panel-bottom">
        <ProjectsGrid projects={projects.filter((project: any) => project.featured)} />
      </div>
      <button
        className="view-all-button"
        onClick={() => {
          navigate(import.meta.env.BASE_URL + 'projects');
        }}
      >
        View All
      </button>
    </div>
  );
}
