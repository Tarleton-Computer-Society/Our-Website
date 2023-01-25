import React from "react";
import Rubi from '../assets/images/Rubi.jpg';
import Teddy from '../assets/images/Teddy.jpg';
import Image from '../assets/images/images.jpg';
import Image1 from '../assets/images/2.jpg';
import Github from '../assets/images/Github.png';
import Figma from '../assets/images/FIgma.jpeg';
import Download from '../assets/images/Download.png';

function Projectsection(){
    return (
        <>
        <div className="bg-white w-full h-96">
            <div className="flex gap-16 pt-16 justify-center">
                <div className="">
                <img className="w-64 h-64 rounded-2xl" src={Rubi} alt=""/>
                <h1 className="font-bold text-2xl">Rubi Mobile Application</h1>
                        <h1 className="font-bold text-lg text-darkergray">status - Ongoing</h1>
            <div className="flex pt-2">
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Teddy}/>
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Image}/>
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Image1}/>
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Image}/>
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Teddy}/>
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Image1}/>
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Teddy}/>
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Image}/>
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Image1}/>
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Image}/>
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Teddy}/>
            <img className="h-7 w-7 rounded-full border border-white" alt="" src={Image1}/>

            </div>
                </div>
            

                    <div className="">
                       <h1 className="font-bold text-2xl">Description</h1>
                        <h1 className="font-design text-xl">Rubi is a door to door delivery company that
                         delivers goods <br></br>ordered by users and individuals to their doorstep. This application
                          was<br></br> built by the Tarleton Computer Society.</h1>
                          <div className="flex ">
                            <div className="pt-4 pr-8">
                            <img className="h-16 w-16 rounded-full border border-white" alt="" src={Github}/>
                            </div>
                            <div className="pt-4 ">
                            <img className="h-16 w-16 border border-white" alt="" src={Figma}/>
                            </div>
                            <div className="">
                            <img className="h-36 w-64" alt="" src={Download}/>
                            </div>
                         
                          </div>
                    </div>
            </div>
            
        </div>
        </>
              

        
    )
}
export default Projectsection;