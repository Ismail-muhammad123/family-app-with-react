import React, { Component } from 'react'
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import gmail from "../images/gmail.png"
import whatsapp from "../images/whatsapp.png"

export default class Buttom extends Component {
  render() {
    return (
    <footer>
        <img src={facebook} class="media" alt="" />
        <img src={instagram} class="media" alt="" />
        <img src={linkedin} class="media" alt="" />
        <img src={gmail} class="media" alt="" />
        <img src={whatsapp} class="media" alt="" />
    </footer>
    )
  }
}
