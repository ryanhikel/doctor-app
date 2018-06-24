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
      amount_children: 0
    }
    console.log(this.state);

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
          amount_children: json.amount_children
        })
      })
  }

  render() {
    return (
      <div className="user">
        <div className="image-wrapper">
          <img src={this.state.image} alt="Nothing" />
        </div>
        <div className="user-info">
        <p>Bio: {this.state.bio}</p>
        <p>Number of Chilren: {this.state.amount_children}</p>
        </div>
      </div>
    )
  }
}

export default User;