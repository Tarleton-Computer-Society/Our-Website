import React from "react";
import { NavComponent } from "../components";
import wave from "../assets/images/wave.svg";
function LandingPage() {
  const engimg = 'https://www.stantec.com/content/dam/stantec/images/projects/0090/tarleton-state-u-engineering-bldg-160715.jpg'
  return (
  <>
    <NavComponent />
    <div className="landing">
        <div className="landing-content">
            <div className="hero">
                <div className="hero-content">
                    <h1>
                        <span>Tarleton  {'<Computer Society/>'}
                            <label for=""></label>
                        </span>
                    </h1>
                    <p>Where Innovation Meets Inspiration</p>
                    {/* <div className="cool-box-stuff">
                        <div className="circle">
                        <i class='bx bx-skip-next'></i>
                        </div>
                        <div className="text-stuff">
                            <label>Get to know Us</label>
                        </div>
                    </div> */}
                </div>
                {/* <div className="hero-image">
                    <img src={engimg} alt="hero" />
                </div> */}
            </div>
            <div className="wave">
         
             </div>
            <div className='about'>
                <div className="about-content">
                    <h2>About US</h2>
                    <span>

                    </span>
        
                    <p>
                    The Tarleton Computer Society is a student-led organization that promotes technology, fosters a community of individuals passionate about innovation and creativity and provide a supportive and collaborative environment where our members can learn, grow, and thrive as technology professionals.
                    </p>
                </div>
            </div>
            <div className='agendas'>
                <div className="agenda-content">
                    <div className="agenda-items">
                        <div className="agenda-item">
                            <div className='icon1'>
                            <i class='bx bx-check'></i>
                            </div>
                            <div className='text-a'>
                             <label> Semester Long Projects</label>
                                <p>
                                The Tarleton Computer Society engages in semester-long software projects to develop skills and apply knowledge to real-world problems. An excellent opportunity for our members to develop their skills in coding, design, and project management. These projects foster collaboration and teamwork, and provide support and resources for successful completion and contribution to technology
                                </p>
                            </div>
                        </div>
                        <div className="agenda-item">
                            <div className='icon1'>
                            <i class='bx bx-check'></i>
                            </div>
                            <div className='text-a'>
                             <label> Coding & Studying Sessions </label>
                                <p>
                                The Tarleton Computer Society offers weekly coding and studying sessions for members, led by experienced members who provide guidance and support. These sessions foster a supportive and collaborative environment for members to work on projects, learn new skills, and prepare for exams.
                                </p>
                            </div>
                        </div>
                        <div className="agenda-item">
                            <div className='icon1'>
                            <i class='bx bx-check'></i>
                            </div>
                            <div className='text-a'>
                             <label> Resume & Intership Help </label>
                                <p>
                                The Tarleton Computer Society offers resume and internship help for our members. Our experienced members provide guidance on how to create a professional and effective resume, as well as advice on how to apply for internships and secure job opportunities. We also provide resources and support to help our members prepare for job interviews and succeed in the competitive technology field. Our goal is to empower our members to reach their full potential and achieve their career goals.
                                </p>
                            </div>
                        </div>
                    </div>
                 </div>   
            </div>
            <div className="activities">
                <div className="activity-head">
                    <h1>What We Do</h1>
                </div>
                <div className="activity-body">
                    <div className="activity-card">
                        <div className="icon">
                        <i class='bx bx-laptop'></i>
                        </div>
                        <div className="text">
                            <label>Software Development</label>
                            <span></span>
                        </div>
                    </div>
                 
                    <div className="activity-card">
                        <div className="icon">
                        <i class='bx bx-book'></i>
                        </div>
                        <div className="text">
                            <label>Academia Research</label>
                            <span></span>
                        </div>
                    </div>
                    <div className="activity-card">
                        <div className="icon">
                        <i class='bx bx-palette'></i>
                        </div>
                        <div className="text">
                            <label>UI & Graphic Design</label>
                            <span></span>
                        </div>
                    </div>
                    <div className="activity-card">
                        <div className="icon">
                        <i class='bx bx-shield'></i>
                        </div>
                        <div className="text">
                            <label>Ethical Hacking (CTF)</label>
                            <span></span>
                        </div>
                    </div>

                    <div className="activity-card">
                        <div className="icon">
                        <i class='bx bx-trophy'></i>
                        </div>
                        <div className="text">
                            <label>Hackathons and Competitive Programming</label>
                            <span></span>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  </>
  );
}

export default LandingPage;