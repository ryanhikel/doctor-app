import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
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
      comments: '',
      updated: false
    }
    this.onFormChange = this.onFormChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
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
    const updateUser = {
      id: this.state.userId,
      username: this.state.name,
      profile_pic: this.state.image,
      bio: this.state.bio,
      amount_children: this.state.amount_children,
    }

    fetch(`/user/${this.state.userId}.json`, {
      method: "PUT",
      body: JSON.stringify(updateUser),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(comment => {
        this.setState({
          updated: true
        });
      });
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

    fetch(`/favorites/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(favs => {        
        this.setState({
          fav_docs: favs
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
    const fav_docs = this.state.fav_docs;

    if (this.state.updated === true) {
      return <Redirect to={`/`} />;
    }else if (this.state.fav_docs === undefined || this.state.comments === '') {
      return <div className='user'></div>
    } else {
      return (
        <div className="user">
          <div className="image-wrapper">
            <img src={this.state.image} alt="Nothing" />
          </div>
          <div className="user-info">
            <div className='bio'><span className="subheading">Bio:</span><span>{this.state.bio}</span></div>
            <div className='amount-children'><span className="subheading">Number of Children:</span><span>{this.state.amount_children}</span></div>
          </div>
          <div>
            <h3>Your Favorite Doctors</h3>
            <ul>
          {fav_docs.map((doc, index) => {
            return (
              <Link key={index} to={{
                pathname: `/doctor/${doc.doctor_uid}`,
                state: {
                  userId: window.location.href.split("/").pop()
                }
              }}>
                <h1 key={index} className="title">doctor</h1>
              </Link>
            )
          })}
            </ul>
          </div>
          <div className='all-comments'>
          <div className="left">
          <h2 className="subheading">Your Comments</h2>
          <div className="user-comments">{this.state.comments.map((comment, index) => {
            return (
              <div key={index} className='comment'><div className="each-comment">{comment}</div>
                {/* <form className="comment-form" onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
                  <textarea className='input' name="comment" value={comment}></textarea>
                  <input className='button' type="submit" value="submit" />
                </form> */}
              </div>
            )
          })}</div>
          </div>
          </div>
          <form className="update-user" onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
            <input type="text" name="username" placeholder="Enter Building Name" value={this.state.name} />
            <input type="text" name="profile_pic" placeholder="Enter Year of Construction" value={this.state.image} />
            <input type="text" name="bio" placeholder="Enter Building City" value={this.state.bio} />
            <input type="text" name="amount_children" placeholder="Enter Building Architect" value={this.state.amount_children} />
            <input type="submit" value="Update Profile" />
          </form>
        </div>
      )
    }
  }
}

export default User;