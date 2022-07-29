import React, { Component } from 'react'

export default class AddFamily extends Component {
  render() {
    return (
        <section class="container">
        <form action="" method="post" class="signup">
                <h1>Add Family</h1>
                <div class="inputs">
                    <label for="name">Family Name</label>
                    <input type="name" name="name" id="name" />
                </div>
                <div class="inputs">
                    <label for="address">Address</label>
                    <input type="text" name="address" id="address" />
                </div>
                <div class="inputs">
                    <label for="number">Number of Members</label>
                    <input type="number" name="number" id="number" />
                </div>
                <div class="buttons" style={{justifyContent: "center"}}>
                    <input style={{padding: "10px", background: "blue"}} type="submit" value="Register" name="submit" />
                </div>
            </form>
        </section>
    )
  }
}
