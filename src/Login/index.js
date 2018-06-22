import React, { Component } from "react";
import "./style.css";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
        this.onFormChange = this.onFormChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onFormSubmit(evt) {
        evt.preventDefault();
        const userInfo = {
            username: this.state.username,
            password: this.state.password,
        }
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
                'Content-Type': 'application/json'
            },
            /* Necessary to pass the session cookie along with the request */
            credentials: "same-origin"
        })
            .then(response => response.json())
            .then(jsonResp => {
                if (jsonResp.loggedIn === true) {
                    this.props.onUserLoggedIn(jsonResp.user)
                } else {
                    console.log("PW DIDN'T MATCH")
                }
            })
    }


    onFormChange(evt) {
        const element = evt.target;
        const name = element.name;
        const value = element.value;
        const newState = {};
        newState[name] = value;
        this.setState(newState);
    }

    render() {
        return (
            <form className="Login control" onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
                <h2 className="subheading">LOGIN</h2>
                <p className="subheading">Username <input className='input' type="text" name="username" value={this.state.username} /></p>
                <p className="subheading">Password <input className='input' type="password" name="password" value={this.state.password} /></p>
                <p><input className='button' type="submit" value="submit" /></p>
            </form>
        )
    }
}

export default Login;