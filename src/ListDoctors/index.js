import React, { Component } from "react";
import "./style.css";
import ShowDoc from "../ShowDoc"

class ListDoctors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: []
    }
  }
  componentDidMount() {
    fetch(`https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=pediatrician&location=48.83901408841116%2C%20-67.23559077109007%2C%2027.726761877858124%2C%20%20-123.48559077109007&skip=0&limit=5&user_key=765d4d94d563c485b63d477fa8644e1d`)
      .then(response => response.json())
      .then(doctors => {
        this.setState({
          doctors: doctors.data,
        });
      });
  }
  render() {
    return (
      <div className='ListDoctors'>
        {this.state.doctors.map((doctor, index) => {
          return (
            <ShowDoc
              key={index}
              doctor={doctor}
            />
          )
        })}
      </div>
    )
  }
}

export default ListDoctors;