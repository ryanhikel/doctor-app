import React, { Component } from "react";
import "./style.css";


class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      name: '',
      image: ''
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
          image: json.profile_pic
        })
      })
  }

  render() {
    return (
      <div className="user">
        <div className="image-wrapper">
          <img src={this.state.image} alt="Nothing" />
        </div>
      </div>
    )
  }
}

export default User;