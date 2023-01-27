import React from "react";
import { NavComponent } from "../components";
import Muzaliwa from '../assets/images/Musa.JPG'
import jtbolger from '../assets/images/jtbolger.jpeg'
import juliana from '../assets/images/juliana.jpeg'
import jayce from '../assets/images/jayce.webp'
import devivo from '../assets/images/devivo.jpeg'
import Teddy from '../assets/images/teddy.png'
import banner from '../assets/images/team-banner.jpeg'


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
               <h2>Leadership Team</h2>
            </div>
            <div className="teams">

     
            <div className="team">
               <div className="person">
                  <div className="image">
                     <img src={Teddy}>
                     
                     </img>
                  </div>
                  
                

               </div>
               <div className="info">
                  <div className="lilrole">
                     Software Engineer (ML)
                  </div>
                  <div className="mainstuff">
                  <div className="headname">
                  <label htmlFor="">Teddy Oweh</label>
                     <small>
                     <i class='bx bx-link-external'></i>
                     </small>
                     </div> 
                     <span>President - ( Software Lead )</span>
                  </div>
                  
                  <div className="skillsset">
                     <span>Backend Dev</span>
                     <span>Competitive Programming</span>
                     <span>Cloud Engineering</span>
                  </div>
                
                
       
                     
                  </div>

            </div>
            <div className="team">
               <div className="person">
                  <div className="image">
                     <img src={juliana}>
                     
                     </img>
                  </div>
                  
                

               </div>
               <div className="info">
                  <div className="lilrole">
                     Software Engineer
                  </div>
                  <div className="mainstuff">
                  <div className="headname">
                  <label htmlFor="">Juliana Rodriguez </label>
                     <small>
                     <i class='bx bx-link-external'></i>
                     </small>
                     </div> 
                     <span>Vice President - ( UI Design Lead )</span>
                  </div>
                  
                  <div className="skillsset">
                  <span>Frontend Dev</span>
                     <span>Product/UI Design</span>
                  </div>
                
                
       
                     
                  </div>

            </div>
            </div>
            
         </div>
         <div className="team-box">
            <div className="header">
               <div className="banner">

               </div>
               <h2>Development Team</h2>
            </div>
            <div className="teams">

            <div className="team">
               <div className="person">
                  <div className="image">
                     <img src={jayce}>
                     
                     </img>
                  </div>
                  
                

               </div>
               <div className="info">
                  <div className="lilrole">
                     Engineer
                  </div>
                  <div className="mainstuff">
                  <div className="headname">
                  <label htmlFor="">Jayce K. Thedford</label>
                     <small>
                     <i class='bx bx-link-external'></i>
                     </small>
                     </div> 
                     <span>Member - (Project Lead)</span>
                  </div>
                  
                  <div className="skillsset">
                     <span>Frontend Dev</span>
                     <span>Competitive Programming</span>
                     <span>Hardware Engineering</span>
                  
                  </div>
                
                
       
                     
                  </div>

            </div> 
            <div className="team">
               <div className="person">
                  <div className="image">
                     <img src={Muzaliwa}>
                     
                     </img>
                  </div>
                  
                

               </div>
               <div className="info">
                  <div className="lilrole">
                     Software Engineer
                  </div>
                  <div className="mainstuff">
                  <div className="headname">
                  <label htmlFor="">Bizimana Musa</label>
                     <small>
                     <i class='bx bx-link-external'></i>
                     </small>
                     </div> 
                     <span>Member - ( Frontend Team)</span>
                  </div>
                  
                  <div className="skillsset">
                     <span>Frontend Dev</span>
                     <span>Competitive Programming</span>
                     <span>C Programming</span>
                  </div>
                
                
       
                     
                  </div>

            </div>
            <div className="team">
               <div className="person">
                  <div className="image">
                     <img src={jtbolger}>
                     
                     </img>
                  </div>
                  
                

               </div>
               <div className="info">
                  <div className="lilrole">
                     Software Engineer
                  </div>
                  <div className="mainstuff">
                  <div className="headname">
                  <label htmlFor="">John-Thomas Bolger</label>
                     <small>
                     <i class='bx bx-link-external'></i>
                     </small>
                     </div> 
                     <span>Member - ( Frontend Team)</span>
                  </div>
                  
                  <div className="skillsset">
                     <span>Frontend Dev</span>
                     <span>Product/UI Design</span>
                  </div>
                
                
       
                     
                  </div>

            </div>
            <div className="team">
               <div className="person">
                  <div className="image">
                     <img src={devivo}>
                     
                     </img>
                  </div>
                  
                

               </div>
               <div className="info">
                  <div className="lilrole">
                     Software Engineer
                  </div>
                  <div className="mainstuff">
                  <div className="headname">
                  <label htmlFor="">Domanic Devivo</label>
                     <small>
                     <i class='bx bx-link-external'></i>
                     </small>
                     </div> 
                     <span>Member - ( Backend Team)</span>
                  </div>
                  
                  <div className="skillsset">
                     <span>Frontend Dev</span>
                     <span>Backend Dev</span>
                     <span>Hard Engineering</span>
                  </div>
                
                
       
                     
                  </div>

            </div>
            </div>
          
         </div>
         </div>
        </>
              

        
    )
}
export default TeamsPage;