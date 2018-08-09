import React from 'react';
import Logo from "./Logo"

function SignUp(props) {
  return (
    <div className="columns">
        <div  className="column col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-6  col-mx-auto" >
        <div className="card" style={{paddingLeft:60,paddingRight:60,paddingTop:20,paddingBottom:20}}>
        <div className="card-image">
          <Logo />
        </div>
        <div className="card-body">
            <input type="hidden" value="something"/>
            <input autocomplete="off" className="form-input" type="text" placeholder="Enter full name"  value={props.name} onChange={props.changeValue} name="name"/> <br/>
            <input autocomplete="off" className="form-input" type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$" value={props.email} name="email" onChange={props.changeValue}/> <br/>
            <input type="submit" value="Submit" className="btn" onClick={props.submit}/>
        </div>
        </div>
        </div>
    </div>
  );
}

export default SignUp;
