import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  register = () => {
    const  name = document.getElementById("register_name").value;
    const email = document.getElementById("register_email").value;
    const password = document.getElementById("register_password").value;
    
    Axios.post("https://eindwerk.jnnck.be/api/users", {
      name: name,
      email: email,
      password: password,
      first_name: 'a',
      last_name:'b',
      favorite_color: '#ffffff',
      avatar: 'a'
    }).then(response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    })
  }

  login = () => {
    const  username = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;

    Axios.post("https://eindwerk.jnnck.be/oauth/token", {
      username: username,
      password: password,
      grant_type: "password",
      client_id: 2,
      client_secret: "iwrHFPcaiQ3bZTzHEwQpYkpiuHUlbIOJ9SAI6DLI"
    }).then(response => {
      // Add the token to localstorage (to save time)
      window.localStorage.setItem('DEMO_TOKEN_V1', response.data.access_token);
    })
  }

  getPosts = () => {
    Axios.get("https://eindwerk.jnnck.be/api/posts")
    .then(response => {
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
        <button onClick={this.getPosts}>Get data</button>
      </div>
    );
  }
}

export default App;