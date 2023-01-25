import React from "react";
import { NavComponent } from "../components";
import Teddy from '../assets/images/Teddy.jpg';
import Image from '../assets/images/images.jpg';
import Image1 from '../assets/images/2.jpg';
import Heuvera from '../assets/images/Heuvera.png';
import Rubi from '../assets/images/Rubi.jpg';
import Swifttra from '../assets/images/swifttra.png';
import bannerimg from '../assets/images/projects-banner.jpeg';

function ProjectsPage(){
    return (
        <>
         <NavComponent where='projects'/>
<div className="bg-white h-full w-full  projects-gn">
    <div className="banner">
<img src={bannerimg} alt="" />
    </div>
    <div className="projects-section">

    <div className="header">
    <h1 className="text-purple">Our Projects</h1>
    <span> Showcasing the innovative  projects developed by the Tarleton Computer Society</span>
    </div>

     <div className="projects-list">
        <div className="indv-project">
        <div className="header">

        </div>
        </div>
    </div>
    </div>
   
 </div>
        </>
              

        
    )
}
export default ProjectsPage;