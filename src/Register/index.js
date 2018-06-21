import React, { Component } from "react";
import "./style.css";

class Landing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            image: ''
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
            password: this.state.password,
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
                console.log(jsonResp)
                this.props.onUserLoggedIn(jsonResp)
            })
    }

    render() {
        return (
                <form className="Register" onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
                    <h2>Register</h2>
                    <p>Username <input type="text" name="username" value={this.state.username} /></p>
                    <p>Password <input type="password" name="password" value={this.state.password} /></p>
                    <p>Image <input type="text" name="image" value={this.state.image} placeholder="Enter Image Url" /></p>
                </form>
        )
    }
}

export default Landing;