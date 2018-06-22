import React, { Component } from "react";
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
                this.props.onUserLoggedIn(jsonResp)
            })
    }

    render() {
        return (
            <form className="Register" onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
                <h2>Register</h2>
                <p>Username <input type="text" name="username" value={this.state.username} /></p>
                <p>Password <input type="password" name="password_digest" value={this.state.password} /></p>
                <p>Image <input type="text" name="profile_pic" value={this.state.profile_pic} placeholder="Enter Image Url" /></p>
                <p>Bio <textarea name="bio" value={this.state.bio}>Enter Bio</textarea></p>
                <p>Number of Children <input type="number" name="amount_children" value={this.state.amount_children} placeholder="Amount of Children" /></p>
                <p><input type="submit" value="submit" /></p>
            </form>
        )
    }
}

export default Register;