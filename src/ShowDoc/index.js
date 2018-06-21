import React, { Component } from "react";
import "./style.css";
class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      first_name: 'Ter',
      last_name: 'Doc',
      title: 'MD',
      insurances: [],
      educations: [],
      bio: '',
      specialties: [],
      liscence_number: ''
    }
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`https://api.betterdoctor.com/2016-03-01/doctors/0527542106c0b0767a11f48d262b64e8?user_key=765d4d94d563c485b63d477fa8644e1d`)
      .then(response => response.json())
      .then(doctor => {
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
          liscence_number: doctor.data
        });
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.last_name + ', ' + this.state.first_name + ' ' + this.state.title}</h1>
        <p>{this.state.bio}</p>
        <p>
          I take these insurances
          </p>
        <ul>
          {this.state.insurances.map((insurance, index) => {
            return <li key= {index}>{insurance.insurance_plan.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Show;