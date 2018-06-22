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
      licenses: []
    }
  }
  componentDidMount() {
    const license = this.props.doctor.licenses.filter(x => x.number !== undefined && x.state !== undefined);
    console.log(license); 
    this.setState({
      licenses: license

    });
  }
  render() {
      return (
        <div>
          <h1>{this.props.doctor.profile.last_name + ', ' + this.props.doctor.profile.first_name + ' ' + this.props.doctor.profile.title}</h1>
          <p>{this.props.doctor.profile.bio}</p>
          <p>
            I take these insurances
          </p>
          <ul>
            {this.props.doctor.insurances.map((insurance, index) => {
              return <li key={index}>{insurance.insurance_plan.name}</li>
            })}
          </ul>
          <p>Licenses:</p>{
            this.state.licenses.map((license, index) => {
              return <h4 key={index}>{license.state} {license.number}</h4>
            })}
        </div>
      )
    }
}

export default Show;