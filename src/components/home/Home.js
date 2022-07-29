import React, { Component } from 'react'
import bg from "../../images/home.PNG"

export default class Home extends Component {
  render() {
    return (
    <div class="bg-image">
        <img src={bg} alt="" /> 
    </div>
    )
  }
}
