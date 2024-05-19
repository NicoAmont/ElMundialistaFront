import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import WebsiteelmundialistaOne from "pages/WebsiteelmundialistaOne";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "ElMundialista",
      element: <WebsiteelmundialistaOne />,
    },
    {
      path: "Torneos",
      element: <WebsiteelmundialistaOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
