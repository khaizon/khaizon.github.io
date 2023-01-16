import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import LandingPage from './layout/landingPage/LandingPage';
import SingleProject, { getProject } from './layout/SingleProject';
import Projects, { getAllProjects } from './layout/Projects';
import { getRecentProjects } from './layout/landingPage/ProjectsPanel';

const router = createBrowserRouter([
  {
    path: import.meta.env.BASE_URL,
    element: <App />,
    errorElement: <div>NOT FOUND</div>,
    children: [
      { path: '/', element: <LandingPage />, loader: getRecentProjects },
      {
        path: '/projects',
        element: <Projects />,
        errorElement: <div>NOT FOUND</div>,
        loader: getAllProjects,
      },
      {
        path: '/projects/:id',
        element: <SingleProject />,
        errorElement: <div>NOT FOUND</div>,
        loader: getProject,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
