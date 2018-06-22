import React, { Component } from "react";
import "./style.css";

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password_digest: '',
            profile_pic: ''
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
            profile_pic: this.state.profile_pic
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
            <form className="Register control" onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
                <h2>Register</h2>
                <p>Username <input className="input" type="text" name="username" value={this.state.username} /></p>
                <p>Password <input className="input" type="password" name="password_digest" value={this.state.password} /></p>
                <p>Image <input className="input" type="text" name="profile_pic" value={this.state.profile_pic} placeholder="Enter Image Url" /></p>
                <p><input className='button' type="submit" value="submit" /></p>
            </form>
        )
    }
}

export default Register;