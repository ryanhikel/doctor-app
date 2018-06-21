import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "../Landing";
import User from "../User";
import ShowDoc from "../ShowDoc";
class App extends Component {
  render() {
    constructor(props) {
      super(props);
      this.state = {
        userLoggedIn: false
      }
      this.updateUserLoggedIn = this.updateUserLoggedIn.bind(this);
    }

    updateUserLoggedIn(user) {
      this.setState({
        userLoggedIn: true,
        userId: user.id
      });
    }

    return (
      <Router>
        <div className='App'>
          <nav className= "navigation">
          <Link to='/'>Landing</Link>
          <Link to='/doctor/:id'>Find</Link>
          <Link to='/user/:id'>Profile</Link>
          <Route to='/comments.json'/>
          <Route path='/' exact component={Landing} />
          <Route path='/doctor/:id' exact component={ShowDoc} />
          <Route path='/user/:id' exact component={User} />
          </nav>
        </div>
      </Router>
    )
  }
}

export default App;