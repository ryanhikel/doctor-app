import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import "./style.css";

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password_digest: '',
            profile_pic: '',
            bio: '',
            amount_children: 0
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
        const newUser = {
            username: this.state.username,
            password_digest: this.state.password_digest,
            profile_pic: this.state.profile_pic,
            bio: this.state.bio,
            amount_children: this.state.amount_children
        }
        
        fetch('/register', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            },
            /* Necessary to pass the session cookie along with the request */
            credentials: "same-origin"
        })
            .then(response => response.json())
            .then(jsonResp => {
                return(
                this.props.onUserLoggedIn(jsonResp),
                <Redirect to={`/`} />
                )
            })
    }

    render() {
        return (
            <form className="Register control" onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
                <h2 className="heading">REGISTER </h2>
                <p className="subheading">Username <input className='input' type="text" name="username" value={this.state.username} /></p>
                <p className="subheading">Password <input className='input' type="password" name="password_digest" value={this.state.password} /></p>
                <p className="subheading">Image <input className='input' type="text" name="profile_pic" value={this.state.profile_pic} placeholder="Enter Image Url" /></p>
                <p className="subheading">Bio <textarea className='input' name="bio" value={this.state.bio} placeholder="Enter Bio"></textarea></p>
                <p className="subheading">Number of Children <input className='input' type="number" name="amount_children" value={this.state.amount_children} placeholder="Amount of Children" /></p>
                <p><input className='button' type="submit" value="submit" /></p>
            </form>
        )
    }
}

export default Register;