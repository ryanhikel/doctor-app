import React, { Component } from "react";
import "./style.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ''
    }
  }
  componentDidMount() {
    const doc_id = this.props.doctorUid
    fetch(`/comments/${doc_id}`)
      .then(response =>
        response.json())
      .then(json => {

        this.setState({
          comments: json.map(x => x.message_desc)
        })

      })
  }

  render() {
    if (this.state.comments === '') {
      return <div className='Comment'></div>
    } else {
      return (
        <div className='Comments'>
          {this.state.comments.map((comment, index) => {
            return <div key={index} className='comment'>{comment}</div>
          })}
        </div>
      )
    }
  }
}
export default Comment;