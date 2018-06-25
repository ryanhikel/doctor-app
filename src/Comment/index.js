import React, { Component } from "react";
import "./style.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }
  componentDidMount() {
  
  }
  render() {
    return (
      <div className='Comment'>

      </div>
    )
  }
}

export default Comment;