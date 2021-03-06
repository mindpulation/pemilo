import React from "react";

import '../Style/App.css';

import IndexAdmin from '../Component/Admin/Index'

export default function(){

  return(
    <div className="LayDash">
      
      <div className="Navtop">
        <header>
          <img src={require('../Resource/img/logo.webp')} className="logo" alt="logo"/>          
          <nav>
            <ul className="nav__links">
              <li><a href="#">Service</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Project</a></li>              
            </ul>
          </nav>
          <div className="btn">
            <a href="#" className="cta"><button>Profile</button></a>
          </div>
        </header>
      </div>
      
      <div className="BodAdmin">
        <div className="Left">
          <div className="Navleft">                         
            <li><a href=""><i className="material-icons">account_circle</i></a></li>              
            <li><a href=""><i className="material-icons">event</i></a></li>
            <li><a href=""><i className="material-icons">settings_applications</i></a></li>
            <li><a href=""><i className="material-icons">history</i></a></li>
            <li><a href=""><i className="material-icons out">logout</i></a></li>
          </div>
        </div>
        <div className="Right">
          <div className="container">
            <IndexAdmin></IndexAdmin>
          </div>
        </div>
      </div>


      <div className="Navbot">

      </div>

    </div>
  );

}