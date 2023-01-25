
import React from "react";
import logo from '../assets/images/logo.jpeg'
function NavComponent(props) {
    const where=props.where;
  return (
  <nav>
    <div className="logo">
        <img src={logo} alt="logo" />
        {/* <h1 className="title">
            <a href="/" className="home">
                <span>Tarleton Computer Society</span>
                <span></span>
            </a>
        </h1> */}
    </div>
    <div className='items'>
        <div className='left'>
        <div className='item'>
                <a href="/" className={where=='aboutus'&&'active'}>Home</a>
                <span></span>
            </div>
           
            <div className='item'>
                <a href="/" className={where=='achievements'&&'active'}>Acheivements</a>
                <span></span>
            </div>
            <div className='item'>
                <a href="/projects" className={where=='project'&&'active'}>Projects</a>
                <span></span>
            </div>
            <div className='item'>
                <a href="/teams" className={where=='teams'&&'active'}>Team</a>
                <span></span>
            </div>
        </div>
        <div className='right'>
            <div className='item1'>
                <span>

                    <a href="">JOIN</a>
                </span>
            </div>
        </div>
    </div>

  </nav>
    );


}

export default NavComponent;
 
