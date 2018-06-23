import React, { Component } from "react";
import "./style.css";


class SingleDoctor extends Component {
  render() {
    const license = this.props.location.state.doctor.licenses.filter(x => x.number !== undefined && x.state !== undefined);
    const street = this.props.location.state.doctor.practices[0].visit_address.street;
    const zip = this.props.location.state.doctor.practices[0].visit_address.zip;
    const city = this.props.location.state.doctor.practices[0].visit_address.city;
    const state = this.props.location.state.doctor.practices[0].visit_address.state;
    const address = `${street + ' ' + city + ", " + state + ' ' + zip}`;
    return (
      <div className="control">
        <h1 className="title">
            {this.props.location.state.doctor.profile.last_name + ', ' + this.props.location.state.doctor.profile.first_name + ' ' + this.props.location.state.doctor.profile.title}
        </h1>
        <p>{this.props.location.state.doctor.profile.bio}</p>
        <p>I take these insurances:</p>
        <div className="breadcrumb is-small">
          <ul>
            {this.props.location.state.doctor.insurances.map((insurance, index) => {
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
        <p>{this.props.location.state.doctor.uid}</p>
      </div>
    )
  }
}

export default SingleDoctor;