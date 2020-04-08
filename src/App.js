import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  register = () => {
    const  name = document.getElementById("register_name").value;
    const email = document.getElementById("register_email").value;
    const password = document.getElementById("register_password").value;

    console.log(name, email, password)

    
    Axios.post("https://eindwerk.jnnck.be/api/users", {
      name: name,
      email: email,
      password: password
    }).then(response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    })
  }

  login = () => {
    Axios.post("https://eindwerk.jnnck.be/api/oauth/token", {
      email: document.getElementById("login_email").value,
      password: document.getElementById("login_password").value
    }).then(response => {
      console.log(response)
    }).then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <label htmlFor="register_name">Name:</label>
        <input type="text" id="register_name"/>
        <br/>
        <label htmlFor="register_email">Email:</label>
        <input type="email" id="register_email"/>
        <br/>
        <label htmlFor="register_password">Password:</label>
        <input type="password" name="" id="register_password"/>
        <br/>
        <button onClick={this.register}>Register</button>

        <br/><br/><br/>
        <h1>Login</h1>
        <label htmlFor="login_email">Username - email</label>
        <input type="email" id="login_email"/>
        <br/>
        <label htmlFor="login_password">Password:</label>
        <input type="password" name="" id="login_password"/>
        <br/>
        <button onClick={this.login}>Login</button>

        <br/>
        <br/>
        <br/>
        <h1>Get data</h1>
        <button>Get data</button>
      </div>
    );
  }
}

export default App;