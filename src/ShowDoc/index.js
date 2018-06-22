import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";
class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      first_name: 'Ter',
      last_name: null,
      title: 'MD',
      insurances: [],
      educations: [],
      bio: '',
      specialties: [],
      licenses: [],
      address: '',
      hours: '',
      doctor_uid: ''
    }
  }
  componentDidMount() {
    let id = window.location.href.split("/").pop();
    const license = this.props.doctor.licenses.filter(x => x.number !== undefined && x.state !== undefined);
    const street = this.props.doctor.practices[0].visit_address.street;
    const zip = this.props.doctor.practices[0].visit_address.zip;
    const city = this.props.doctor.practices[0].visit_address.city;
    const state = this.props.doctor.practices[0].visit_address.state;
    const address = `${street + ' ' + city + ", " + state + ' ' + zip}`;

    this.setState({
      licenses: license,
      address: address,
      doctor_uid: this.props.doctor.uid
    });
  }
  render() {
    return (
      <div className="control">
        <h1 className="title">
          <Link to={`/doctor/${this.state.doctor_uid}`}>
            {this.props.doctor.profile.last_name + ', ' + this.props.doctor.profile.first_name + ' ' + this.props.doctor.profile.title}
          </Link>
        </h1>
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
            this.state.licenses.map((license, index) => {
              return <h4 key={index}>{license.state} {license.number}</h4>
            })}
        </div>
        <p>Address: {this.state.address}</p>
        <p>{this.state.doctor_uid}</p>
      </div>
    )
  }
}

export default Show;