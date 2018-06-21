import React, { Component } from "react";
import "./style.css";
import Register from "../Register"
import Login from "../Login"

class Landing extends Component {

  render() {
    return (
      <div className='Landing'>
        <h1>{'(>^_^)> <(^_^)> <(^_^<)'}</h1>

        <p>PLACEHOLDER TEXT</p>
        
        <Login  onUserLoggedIn={this.props.onUserLoggedIn} />

        <Register onUserLoggedIn={this.props.onUserLoggedIn} />

      </div>
    )
  }
}

export default Landing;