import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "../Landing";
import User from "../User";
import ShowDoc from "../ShowDoc";
import LandingLogin from "../LandingLogin";
import ListDoctors from "../ListDoctors"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      userLoggedIn: false
    }
    this.updateUserLoggedIn = this.updateUserLoggedIn.bind(this);
  }

  updateUserLoggedIn(user) {
    this.setState({
      userLoggedIn: true,
      userId: user.user_id
    });
  }

  render() {
    if (!this.state.userLoggedIn) {
      return (
        <div className="App">
          <Landing onUserLoggedIn={this.updateUserLoggedIn} />
        </div>
      )
    } else {
      return (
        <Router>
          <div className='App'>
            <nav className="navigation">
              <Link to='/'>Landing</Link>
              <Link to='/doctor/:id'>Find</Link>
              <Link to="/doctors">List of All Doctors</Link>
              <Link to={`/user/${this.state.userId}`}>Profile</Link>
            </nav>
              <Route path='/' exact component={LandingLogin} />
              <Route path='/doctors' exact component={ListDoctors} />
              <Route path='/doctor/:id' exact component={ShowDoc} />
              <Route path={`/user/${this.state.userId}`} exact component={User} />
          </div>
        </Router>
      )
    }
  }
}

export default App;