import React from 'react';
import logo from "../images/mobile-app.svg"

function Logo(){
    return (
      <div className="columns">
          <div  className="column col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6  col-mx-auto">
          <img src={logo} id ="logo" alt="" width="150"/>
          </div>
      </div>
    );
  
}

export default Logo;
