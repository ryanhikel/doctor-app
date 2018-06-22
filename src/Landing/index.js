import React, { Component } from "react";
import "./style.css";
import Register from "../Register"
import Login from "../Login"

class Landing extends Component {

  render() {
    return (
      <div className='Landing'>
        <h1 className="title">{'(>^_^)> <(^_^)> <(^_^<)'}</h1>

        <p className="title">Healthy Kids</p>
        <div className="">
        <Login  onUserLoggedIn={this.props.onUserLoggedIn} />

        <Register onUserLoggedIn={this.props.onUserLoggedIn} />
</div>
      </div>
    )
  }
}

export default Landing;