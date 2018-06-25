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

    return (
      <div className='Comment'>
        {this.state.comments.map(x => {
          <div>x</div>
        })}
      </div>
    )
  }
}

export default Comment;