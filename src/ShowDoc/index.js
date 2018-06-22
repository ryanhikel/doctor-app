import React, { Component } from "react";
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
      addresses: [],
      hours:''
    }
  }
  componentDidMount() {
    const license = this.props.doctor.licenses.filter(x => x.number !== undefined && x.state !== undefined);
    const street = this.props.doctor.practices[0].visit_address.street;
    const zip = this.props.doctor.practices[0].visit_address.zip;
    const city = this.props.doctor.practices[0].visit_address.city;
    const state = this.props.doctor.practices[0].visit_address.state;
    const address = `${street + ' ' + city + ", " + state + ' ' + zip}`;
    let addresses = [];
    console.log(addresses);
    
    addresses = addresses.push(address);
    console.log(addresses);
    
    this.setState({
      licenses: license,
    });

    
  }
  render() {
      return (
        <div className="control">
          <h1 className="title">{this.props.doctor.profile.last_name + ', ' + this.props.doctor.profile.first_name + ' ' + this.props.doctor.profile.title}</h1>
          <p>{this.props.doctor.profile.bio}</p>
          <p>I take these insurances:</p>
          <div className="breadcrumb is-small">
          <ul>
            {this.props.doctor.insurances.map((insurance, index) => {
              return <li key={index}>{insurance.insurance_plan.name}</li>
            })}
          </ul>
          </div>
          <p>Licenses:</p>{
            this.state.licenses.map((license, index) => {
              return <h4 key={index}>{license.state} {license.number}</h4>
            })}
        </div>
      )
    }
}

export default Show;