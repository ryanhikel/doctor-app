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
    let id = this.props.match.params.id;
    fetch(`/user/${id}.json`)
      .then(response => response.json())
      .then(json => {
        console.log(json.profile_pic)
        this.setstate({
          userId: json.user_id,
          name: json.username,
          image: json.profile_pic
        })
      });
  }

  render() {
    return (
      <div className="user">
        <div className="image-wrapper">
        I got here
          <img src={`${this.state.image}`} alt="Nothing" />
        </div>
      </div>
    )
  }
}

export default User;