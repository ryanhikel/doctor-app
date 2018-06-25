import React, { Component } from "react";
import "./style.css";
import Comment from '../Comment';
class CommentBox extends Component {

  render() {
    return (
      <div className='CommentBox'>
        <h1 className="title">Comments</h1>
        <div className='CommentsDisplay'>
          <Comment />
          <div className='form'>
            <textarea></textarea>
            <input type="submit" value="Submit"/>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentBox;