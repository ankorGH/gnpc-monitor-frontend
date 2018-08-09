import React, { Component } from 'react';
import SignUp from "./components/Signup"
import Disclaimer from "./components/Disclaimer"
import AppTitle from "./components/AppTitle"
import Thank from "./components/Thanks"


import './App.css';
import "../node_modules/spectre.css/dist/spectre.css"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRegistered:false,
      name:"",
      email:""
    }
  }

  updateValue = (e) => {
    e.preventDefault();
    let {name,value} = e.target;
    this.setState({
      [name]:value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    const baseUrl = `https://gnpcscholarshipapp.herokuapp.com/users`;
    
    const opts = {
      name:this.state.name,
      email:this.state.email
    }
    
    fetch(baseUrl,{
      method:"POST",
      body:JSON.stringify(opts),
      headers:{
        "Content-type":"application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers":"*"
      },
    })
    .then((resp) => {
      return resp.json()
    }).then((data) => {
      if(!data.error){
        this.setState({isRegistered:true})
      }

  register = () => {
    this.setState({isRegistered:false})
  }

  render() {
    return (
      <div className="App">
        <div id="App-container" className="container">
          <AppTitle />
          { !this.state.isRegistered ?
              <SignUp name={this.state.name} email={this.state.email} changeValue={this.updateValue}submit={this.submitForm}/>
            : <Thank register={this.register}/>
          }
          <Disclaimer className="disclaimer" />
        </div>
      </div>
    );
  }
}

export default App;
