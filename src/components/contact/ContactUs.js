import React, { Component } from 'react'

export default class ContactUs extends Component {
  render() {
    return (
        <section class="container">
        <form action="" method="post" class="login">
            <h1>Contact Us</h1>
            <div class="inputs">
                <label for="email">Your Name</label>
                <input type="email" name="email" id="email" />
            </div>
            <div class="inputs">
                <label for="message">Your Message</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="buttons" style={{justifyContent: "center"}}>
                <input type="submit" className='btn btn-success' value="Submit" name="submit" />
            </div>
        </form>
    </section>
    )
  }
}
