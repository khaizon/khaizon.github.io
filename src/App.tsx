import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Icon from './icons/icon';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="landing-page-parent">
      <div className="menubar">
        <div className="menubar-container">
          <div
            className="menubar-title"
            onClick={() => {
              navigate(import.meta.env.BASE_URL);
            }}
          >
            <div className="blue">TOH&nbsp;</div>
            KAI FENG
          </div>
          <div className="menubar-options">
            <div
              onClick={() => {
                navigate(import.meta.env.BASE_URL);
              }}
              className={location.pathname === import.meta.env.BASE_URL ? 'active' : ''}
            >
              HOME
            </div>
            <div
              onClick={() => {
                navigate(import.meta.env.BASE_URL + 'projects');
              }}
              className={location.pathname === import.meta.env.BASE_URL + 'projects' ? 'active' : ''}
            >
              PROJECTS
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <div className="footer">
        Happy to connect on:
        <Icon link="https://www.linkedin.com/in/kai-feng-toh/" variant="linkedin" />
        <Icon link="mailto:toh.kai.feng.2015@vjc.edu.sg" variant="email" />
        <Icon link="https://github.com/khaizon" variant="github" />
      </div>
    </div>
  );
}
