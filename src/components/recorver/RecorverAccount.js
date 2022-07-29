import React, { Component } from 'react'

export default class RecorverAccount extends Component {
  render() {
    return (
        <section class="container">
        <form action="" method="post" class="login" style={{alignItems: "center"}}>
            <h1>FORGOT PASSWORD</h1>
            <div class="inputs">
                <label for="email">Enter Email</label>
                <input type="email" name="mail" id="email" />
            </div>
            <div class="buttons">
                <input type="submit" value="GO" name="submit" style={{width: "150px"}} />
            </div>
        </form>
    </section>
    )
  }
}
