import React, { Component } from "react";
import "./style.css";
class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: 'first',
      last_name: 'last',
      title: 'MD'
    }
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`https://api.betterdoctor.com/2016-03-01/doctors/0527542106c0b0767a11f48d262b64e8?user_key=765d4d94d563c485b63d477fa8644e1d`)
        .then(response => response.json())
      .then(doctor => {
        console.log(doctor.data);
        
        this.setState({
          first_name: doctor.data.profile.first_name,
          last_name: doctor.data.profile.last_name,
          title: doctor.data.profile.title
        });
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.last_name + ', ' + this.state.first_name + ' ' + this.state.title}</h1>

      </div>
    )
  }
}

export default Show;