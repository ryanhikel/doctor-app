import React, { Component } from "react";
import "./style.css";
import Register from "../Register"
import Login from "../Login"

class FilterDoctors extends Component {

  render() {
    return (
      <div className='FilterDoctors'>
        <form>
          <input type="text"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default FilterDoctors;