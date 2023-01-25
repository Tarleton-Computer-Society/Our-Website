import React from "react";
import { NavComponent } from "../components";
import Teddy from '../assets/images/Teddy.jpg'
import Heuvera from '../assets/images/Heuvera.png';
import Rubi from '../assets/images/Rubi.jpg';
import Swifttra from '../assets/images/swifttra.png';


function ProfilePage(){
    return (
        <>
         <div className="bg-white w-full h-full">
          <div className="pt-10"></div>
            <div className="grid grid-flow-col m-1 gap-16 justify-center">
                <div className="">
                <div className="">
                <div className="flex justify-center ">
                <img className="w-56 h-56 rounded-xl " src={Teddy} alt=""/>
                </div>
            </div>
            </div>
        
           <div className="">
           <h1 className="text-3xl font-design text-purple font-bold pl-8 pb-2">Teddy Oweh</h1>
           <h2 className="text-lg font-design font-semibold pl-16">Profile Details</h2>
              <div className="pl-10 pt-2">
                <h1 className="text-darkergray pb-1">Email: teddyoweh@gmail.com</h1>
                <h1 className="text-darkergray pb-1">Phone number: +1 (281) 725 - 1576</h1>
                <h1 className="text-darkergray pb-1">Website: teddyoweh.net</h1>
                <h1 className="text-darkergray pb-1">Position: President</h1>
                <h1 className="text-darkergray pb-1">skills: Full stack Engineer - (Python, node js, React)</h1>
                <div className="flex pl-7">
                {/* <img className="h-9 w-9" src={Twitter} alt=""/>
                <img className="h-9 w-9" src={Twitter} alt=""/>
                <img className="h-9 w-9" src={Twitter} alt=""/> */}
                </div>
              </div>
           </div>
            </div>
            <div className="">
                <div className="">
                <h1 className=" font-design text-3xl pt-10 pb-5 font-semibold flex justify-center text-purple">Projects</h1>
                </div>
                <div className="flex justify-center">
                <div className="w-6/12 flex justify-start p-1 h-52 bg-lightergray rounded-3xl">
                    <div className="flex pl-24 pt-3 gap-5">
                            <div className="w-44 h-44 bg-white rounded-3xl">
                                <img className="w-32 h-32 ml-6" src={Heuvera} alt=""/>
                                <h1 className="font-design text-xl flex justify-center pt-1 font-semibold">Heuvera</h1>
                            </div>
                            <div className="w-44 h-44 bg-white rounded-3xl">
                                <img className="w-32 h-20 m-5" src={Swifttra} alt=""/>
                                <h1 className="font-design text-xl flex justify-center pt-1 font-semibold">Swifttra</h1>
                            </div>
                            <div className="w-44 h-44 bg-white rounded-3xl">
                                <div className="pl-8 pt-5">
                                <img className="w-28 h-28" src={Rubi} alt=""/>
                                </div>
                               
                                <h1 className="font-design text-xl flex justify-center font-semibold">Rubi</h1>
                            </div>                
                            
                    </div>
                </div>
                
                </div>
         
            </div>
           
         </div>
     
        </>
              

        
    )
}
export default ProfilePage;