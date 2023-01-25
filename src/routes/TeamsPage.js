import React from "react";
import { NavComponent } from "../components";
import Teddy from '../assets/images/teddy.png'
import ProfilePage from "../components/profilepage";
import Gerald from '../assets/images/download.jpg'
import George from '../assets/images/2.jpg'


function TeamsPage(){
    return (
        <>
        <NavComponent where='teams'/>
        
         <div className="team-box">
            <div className="header">
               <div className="banner">

               </div>
               <h2>Leadership Team</h2>
            </div>
    
            <div className="team">
               <div className="person">
                  <div className="image">
                     <img src={Teddy}>
                     
                     </img>
                  </div>
                  <div className="info">
                  <label htmlFor="">Teddy Oweh</label>
                     <span>President (Software Engineer - ML)</span>
                     
                  </div>

               </div>

            </div>
         </div>
        </>
              

        
    )
}
export default TeamsPage;