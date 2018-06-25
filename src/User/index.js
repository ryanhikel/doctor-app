import React, { Component } from "react";
import "./style.css";


class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      name: '',
      image: '',
      bio: '',
      amount_children: 0,
      comments: ''
    }

  }

  componentDidMount() {
    let id = window.location.href.split("/").pop();
    fetch(`/user/${id}.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          userId: id,
          name: json.username,
          image: json.profile_pic,
          bio: json.bio,
          amount_children: json.amount_children,
        })
      })
    fetch(`/comments/${id}/.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          comments: json.map(x => x.message_desc)
        })
        
      })
  }

  render() {
    if (this.state.comments === '') {
      return <div className='user'></div>
    } else {
      console.log(this.state.comments);
      
      return (
        <div className="user">
          <div className="image-wrapper">
            <img src={this.state.image} alt="Nothing" />
          </div>
          <div className="user-info">
            <div className='bio'><span className="subheading">Bio:</span><span>{this.state.bio}</span></div>
            <div className='amount-chilren'><span className="subheading">Number of Children:</span><span>{this.state.amount_children}</span></div>
          </div>
          <div className="Comments">{this.state.comments.map(comment => {
            return <div className='comment'>{comment}</div>
          })}</div>
        </div>
      )
    }
  }
}

export default User;