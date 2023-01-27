import React from "react";
import LandingPage from "./LandingPage";
import TeamsPage from "./TeamsPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ProjectsPage from "./Projects";
import TeamPage from "./Team";
import ProfilePage from "../components/profilepage";
import Projectsection from "../components/projectsection";
 

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
    path: "/teams",
    element: <TeamsPage />,
  },
  {
    path: "/teams/:teamId",
    element: <TeamPage />,
  },
  {
    path: "/profilepage",
    element: <ProfilePage/>,},
  {
    path: "/projectsection",
    element: <Projectsection/>,}
      
]);
function Routes(){
return (
 
      <RouterProvider router={router} />
 

)

}

export default Routes;