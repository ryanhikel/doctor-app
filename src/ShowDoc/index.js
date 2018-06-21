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
    let doc_uid = '0527542106c0b0767a11f48d262b64e8';
    let id = this.props.match.params.id;
    fetch(`https://api.betterdoctor.com/2016-03-01/doctors/${doc_uid}?user_key=765d4d94d563c485b63d477fa8644e1d`)
      .then(response => response.json())
      .then(doctor => {
        const licence = doctor.data.licenses.filter(x => {
          return (x.number !== undefined && x.state !== undefined);
        });
        console.log(doctor.data);
        this.setState({
          uid: doctor.data.uid,
          first_name: doctor.data.profile.first_name,
          last_name: doctor.data.profile.last_name,
          title: doctor.data.profile.title,
          insurances: doctor.data.insurances,
          educations: doctor.data.educations,
          bio: doctor.data.profile.bio,
          specialties: doctor.data.specialties,
          licenses: licence

        });

      });
  }
  render() {
    if (this.state.last_name === null) {
      return <div></div>
    } else {
      return (
        <div>
          <h1>{this.state.last_name + ', ' + this.state.first_name + ' ' + this.state.title}</h1>
          <p>{this.state.bio}</p>
          <p>
            I take these insurances
          </p>
          <ul>
            {this.state.insurances.map((insurance, index) => {
              return <li key={index}>{insurance.insurance_plan.name}</li>
            })}
          </ul>
          <p>Licenses:</p>{this.state.licenses.map((licence, index) => {
            return <h4 key={index}>{licence.state} {licence.number}</h4>
          })}
        </div>
      )}}
}

export default Show;