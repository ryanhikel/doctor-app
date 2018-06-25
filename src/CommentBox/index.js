import React, { Component } from "react";
import "./style.css";
import Comment from '../Comment';
class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message_desc: ''
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(evt) {
    const element = evt.target;
    const name = element.name;
    const value = element.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const newComment = {
      doctor_uid: this.props.doctorUid,
      message_desc: this.state.message_desc,
      user_id: this.props.userId
    }
    fetch('/comments', {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }

  render() {

    return (
      <div className='CommentBox'>
        <h1 className="title">Comments</h1>
        <div className='CommentsDisplay'>
          <Comment
            userId={this.props.userID}
            doctorUid={this.props.doctorUid} />
          <div className='form'>
            <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
              <textarea className='textarea' name="message_desc" value={this.state.comments} placeholder="Enter Comment"></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentBox;