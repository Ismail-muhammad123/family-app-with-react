import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
        <section class="container">
        <form action="" method="post" class="signup">
            <h3>Sign up</h3>
            <div class="inputs">
                <label for="email">Email</label>
                <input type="email" name="mail" id="email" />
            </div>
            <div class="inputs">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div class="inputs">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div class="inputs">
                <label for="lname">Last Name</label>
                <input type="text" name="lname" id="lname" />
            </div>
            <div class="inputs">
                <label for="ancestor">Ancestor</label>
                <input type="text" name="ancestor" id="ancestor" />
            </div>
            <div class="inputs">
                <label for="relation">Relationship to Ancestor</label>
                <input type="text" name="relation" id="relation" />
            </div>
            <div class="buttons" style={{justifyContent: "center"}}>
                <input style={{padding: "10px", background: "blue"}} type="submit" value="Sign up" name="submit" />
            </div>
        </form>
    </section>
    )
  }
}
