import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [],
      hours: ''
    }
    this.addToFavorite = this.addToFavorite.bind(this)
  }
  addToFavorite(evt) {
    evt.preventDefault();
    const newFavorite = {
      doctor_uid: this.props.doctor.uid,
      user_id: this.props.userId,
      doctor_last_name: this.props.doctor.profile.last_name,
      doctor_first_name: this.props.doctor.profile.first_name,
      doctor_title: this.props.doctor.profile.title
    }
    console.log(newFavorite);
    
    
    fetch('/favorite', {
      method: 'POST',
      body: JSON.stringify(newFavorite),
      headers: {
        'Content-Type': 'application/json'
      },
      /* Necessary to pass the session cookie along with the request */
      credentials: "same-origin"
    })
      .then(response => response.json())
  }
  render() {
    const license = this.props.doctor.licenses.filter(x => x.number !== undefined && x.state !== undefined);
    const street = this.props.doctor.practices[0].visit_address.street;
    const zip = this.props.doctor.practices[0].visit_address.zip;
    const city = this.props.doctor.practices[0].visit_address.city;
    const state = this.props.doctor.practices[0].visit_address.state;
    const address = `${street + ' ' + city + ", " + state + ' ' + zip}`;
    
    return (
      <div className="control Show">
        <div>
          <Link to={`/doctor/${this.props.doctor.uid}`}>
            <h1 className="title">
              {this.props.doctor.profile.last_name + ', ' + this.props.doctor.profile.first_name + ' ' + this.props.doctor.profile.title}
            </h1>
          </Link>
        </div>
        <p>{this.props.doctor.profile.bio}</p>
        <p>I take these insurances:</p>
        <div className="breadcrumb is-small">
          <ul>
            {this.props.doctor.insurances.map((insurance, index) => {
              return <li key={index}>{insurance.insurance_plan.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h2>
            Licenses:
          </h2>
          {
            license.map((license, index) => {
              return <h4 key={index}>{license.state} {license.number}</h4>
            })}
        </div>
        <p>Address: {address}</p>
        <button className='button' onClick={this.addToFavorite}>favorite</button>
      </div>
    )
  }
}

export default Show;