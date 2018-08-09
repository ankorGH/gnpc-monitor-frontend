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

  submitForm = async (e) => {
    try{
      e.preventDefault();
      const baseUrl = `https://gnpcscholarshipapp.herokuapp.com/users`;

      const opts = {
        name:this.state.name,
        email:this.state.email
      }

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append("Access-Control-Allow-Origin", "*")
      headers.append("Access-Control-Allow-Headers", "*")

      const response = await fetch(baseUrl,{
        method: "POST",
        headers,
        body: JSON.stringify(opts)
      })
      console.log(response.status)
      this.setState({isRegistered:true})
  } catch(e){
    console.log(e)}
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
