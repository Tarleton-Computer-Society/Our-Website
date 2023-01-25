import React from "react";
import { NavComponent } from "../components";
import Teddy from '../assets/images/Teddy.jpg';
import Image from '../assets/images/images.jpg';
import Image1 from '../assets/images/2.jpg';
import Heuvera from '../assets/images/Heuvera.png';
import Rubi from '../assets/images/Rubi.jpg';
import Swifttra from '../assets/images/swifttra.png';
import bannerimg from '../assets/images/projects-banner.jpeg';
import afterhourslogo from '../assets/images/afterhours.png';
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
            <div className="logo">
                <img src={afterhourslogo} alt="" />
            </div>
            <div className="text">
                <label htmlFor="">Afterhours</label>
                <p>A Social Network to connect with students with same majors.</p>
            </div>


        </div>
        <div className="mid-sec">
            <div className="left">
                <div className="is-finished">
                    Finished
                </div>
            </div>
            <div className="right">
                <div className="date">
                <i class='bx bx-calendar-alt'></i>
                <label htmlFor="">
                    Start: <b>Sept '22</b> 

                </label>
                </div>
                <div className="date">
                <i class='bx bx-calendar-check'></i>
                <label htmlFor="">
                    End: <b> Dec '22</b>
                    
                </label>
                </div>

            </div>
        </div>
        <div className="content">
            <div className="tools">
            <label htmlFor="">Stacks:</label>

            <div className="tools-img">
            <a href="">
                <img src="https://img.icons8.com/office/50/null/react.png" alt='React Logo'/>
            </a>
   
            <a href="">
                <img src="https://img.icons8.com/fluency/50/null/node-js.png" alt="Nodejs Logo"/>
            </a>
            <a href="">
                <img src="https://img.icons8.com/color/48/null/redux.png" alt="Redux Logo"/>
            </a>
 
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
   
 </div>
        </>
              

        
    )
}
export default ProjectsPage;