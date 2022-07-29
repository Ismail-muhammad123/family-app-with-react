import React, { Component } from 'react'

export default class AddProject extends Component {
  render() {
    return (
        <section class="container">
        <form action="" method="post" class="signup">
            <h1>Add Family Projects</h1>
            <div class="inputs">
                <label for="name">Family Name</label>
                <input type="name" name="name" id="name" />
            </div>
            <div class="inputs">
                <label for="country">Country</label>
                <input type="text" name="country" id="country" />
            </div>
            <div class="inputs">
                <label for="company">Companies <span style={{fontSize:"12px"}}>(separate with commas if multiple)</span></label>
                <input type="text" name="company" id="company" />
            </div>

            <div class="buttons" style={{justifyContent: "center"}}>
                <input style={{padding: "10px", background: "blue"}} type="submit" value="Register" name="submit" />
            </div>
        </form>
    </section>
    )
  }
}
