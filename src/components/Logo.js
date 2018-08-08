import React from 'react';
import logo from "../images/mobile-app.svg"

function Logo(){
    return (
      <div className="columns">
          <div  className="column col-6 col-mx-auto">
          <img src={logo} id ="logo" alt="" width="150"/>
          </div>
      </div>
    );
  
}

export default Logo;
