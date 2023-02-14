import React from "react";
import LandingPage from "./LandingPage";
import TeamsPage from "./TeamsPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ProjectsPage from "./Projects";
import StudentProjectsPage from "./StudentProjects";
import TeamPage from "./Team";
import { Footer } from "../components";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/projects/team",
    element: <StudentProjectsPage />,
  },
  {
    path: "/teams",
    element: <TeamsPage />,
  },
 
  {
    path: "/teams/:teamId",
    element: <TeamPage />,
  },
 
]);
function Routes(){
return (
        <>

      <RouterProvider router={router} />
      <Footer/>
      </>

 

)

}

export default Routes;