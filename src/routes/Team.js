import React from "react";
import { NavComponent } from "../components";
import Teddy from '../assets/images/teddy.png'
function TeamPage(){
    return (
        <>
 
        <NavComponent where='teams'/>
        <div className="my-team">
            <div className="team-back">
                <div className="top">
                    <div className="left">
                        <h2>Ifechukwudeni Teddy Oweh.</h2>
                        <span>Software Engineer (ML) </span>
                        <p>As a software engineer, my primary focus is on integrating machine learning into various applications, including web and mobile applications. I have a strong foundation in networking and cloud computing, which allows me to effectively design and implement these integrations in a scalable and efficient manner.

Additionally, I have a passion for competitive programming and algorithmic problem-solving, which has allowed me to excel in my field.</p>

                    <div className="stacks">
                        <label htmlFor="">Programming Stacks</label>
                        <div className="stacks-list">
                            <span>
                                Python
                            </span>
                            <span>
                                ReactJS
                            </span>
                        </div>
                        </div>            
                    </div>
                    <div className="right">
                        <div className="image">
                            <img src={Teddy} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="header">
                    <label htmlFor="">Projects & Achievements</label>
                </div>

            </div>
        </div>
        </>
    )
}

export default TeamPage;