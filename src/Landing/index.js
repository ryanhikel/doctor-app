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
        <div className="forms">
          <Login 
          onUserLoggedIn={this.props.onUserLoggedIn}
          userId={this.props.userID} />

          <Register 
          onUserLoggedIn={this.props.onUserLoggedIn}
          userId={this.props.userID} />
        </div>
      </div>
    )
  }
}

export default Landing;