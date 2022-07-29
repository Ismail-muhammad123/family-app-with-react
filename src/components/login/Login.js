import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
        <section class="container">
        <form action="" method="post" class="login">
            <h1>LOGIN</h1>
            <div class="inputs">
                <label for="email">Email</label>
                <input type="email" name="mail" id="email" />
            </div>
            <div class="inputs">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div class="buttons">
                <input type="submit" value="Login Member" name="submit" />
                <input type="submit" value="Login Admin" name="submit" />
            </div>
            <a href="forgot.php" class="forgot">Forgot Password?</a>
        </form>
    </section>
    )
  }
}
