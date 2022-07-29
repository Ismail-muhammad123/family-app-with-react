import React, { Component } from 'react'
import logo from "../images/logo.png";
import { Link } from "react-router-dom";


export default class TopNav extends Component {
  render() {
    return (
    <header id="header" >
        <img src={logo} class="logo" alt=""  />
        <ul class="links-container">
            {/* <li class="links"><Link to="login">LOGIN</Link></li>
            <li class="links"><Link to="signup">SIGN UP</Link></li> */}
        </ul>
    </header>
    )
  }
}
