import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class SideNav extends Component {
  render() {
    return (
    <aside class="aside">
        <div class="quick-links">
            <Link to="dashboard" class="active">Dashboard</Link>
            <Link to="reports">Reports</Link>
            <a href="http://localhost/work/add_family_form.php">Add Families</a>
            <a href="http://localhost/work/add_projects_form.php">Add Projects</a>
            <a href="http://localhost/work/add_trials_form.php">Add Trials</a>
            <Link to="blogs">Blog</Link>
            <Link to="who-we-are">Who We Are</Link>
            <Link to="contact-us">Contact</Link>
        </div>
        {/* <a class="logout" href="logout">Log Out</a> */}
    </aside>
    )
  }
}
