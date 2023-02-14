import React from "react";
import { NavComponent,Footer } from "../components";
import Muzaliwa from '../assets/images/Musa.JPG'
import jtbolger from '../assets/images/jtbolger.jpeg'
import juliana from '../assets/images/juliana.jpeg'
import jayce from '../assets/images/jayce.webp'
import devivo from '../assets/images/devivo.jpeg'
import Teddy from '../assets/images/teddy.png'
import banner from '../assets/images/team-banner.jpeg'
import { teamdata } from "./teamdata";

function TeamsPage(){
    return (
        <>
        <NavComponent where='teams'/>
        <div className="teams-page">
         <div className="banner">
<img src={banner} alt="" />
         </div>

      
         <div className="team-box">
            <div className="header">
               <div className="banner">

               </div>
               <h2>Our Team!</h2>
            </div>
            <div className="teams">
{
   teamdata.map((team,index)=>{
      return (
         <>
           <div className="team">
               <div className="person">
                  <div className="image">
                     <img src={team.image} alt={team.name}>
                     
                     </img>
                  </div>
                  
                

               </div>
               <div className="info">
                  <div className="lilrole">
                     {team.title}
                  </div>
                  <div className="mainstuff">
                  <div className="headname">
                  <label htmlFor="">{team.name}</label>
                     <small>
                     <i class='bx bx-link-external'></i>
                     </small>
                     </div> 
                     <span>{team.role}</span>
                  </div>
                  
                  <div className="skillsset">
                     {
                        team.skills.map((skill,index)=>{
                           return (
                              <span>{skill}</span>
                           )
                        })
                     }
        
                  
                  </div>
                
                
       
                     
                  </div>

            </div> 
         </>
      )
   })
}
          
         
            
            </div>
          
         </div>
         </div>

        </>
              

        
    )
}
export default TeamsPage;