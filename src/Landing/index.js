import React, { Component } from "react";
import "./style.css";
import images from "../images/emily-reider-513130-unsplash.jpg"
import Register from "../Register"

class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const userInfo = {
      username: this.state.username,
      password: this.state.password,
    }
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      },
      /* Necessary to pass the session cookie along with the request */
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(jsonResp => {
        console.log(jsonResp)
        if (jsonResp.loggedIn === true) {
          this.props.onUserLoggedIn(jsonResp)
        } else {
          console.log("PW DIDN'T MATCH")
        }
      })
  }


  onFormChange(evt) {
    const element = evt.target;
    const name = element.name;
    const value = element.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  render() {
    return (
      <div className='Landing'>
        <h1>{'(>^_^)> <(^_^)> <(^_^<)'}</h1>

        <p>PLACEHOLDER TEXT</p>

        <form className="login" onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <h2>LOGIN</h2>
          <p>Username <input type="text" name="username" value={this.state.username} /></p>
          <p>Password <input type="password" name="password" value={this.state.password} /></p>
        </form>

        <Register />

      </div>
    )
  }
}

export default Landing;