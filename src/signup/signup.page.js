import React from "react";
import Auth from "./auth";

import { Redirect } from "react-router-dom";
import "../login/style.css";

export class SignupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: 2, // initial
      signup: false,
    }
    this.username = ''
    this.password = ''
    this.passwordconfirm =''
  }

  handleChangeUsername(e) {
    this.username = e.target.value
  }
  handleChangePassword(e) {
    this.password = e.target.value
  }
  handleSignUpButton() {
    this.setState({ signup: true })
  }
  handleChangeConfirmPassword(e){
    this.passwordconfirm = e.target.value
  }

handleSignUpButton(){
  
let result = Auth.signup([this.username, this.password,this.passwordconfirm]);
    if (result === 1) {
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
    }
    this.setState({ auth: result })
}


 render() {
    
 var login = [(
      <div>
        <div className="background"></div>
        <div className="grad"></div>
        <div className="card">
        <div className="header">
          <div>Clown<span>7</span></div>
        </div>
        <br />
        <div className="login">
          <input
            type="text"
            placeholder="Email"
            name="user"
            onChange={(e) => this.handleChangeUsername(e)}
          />
          <br />
          <input
            type="Password"
            placeholder="password"
            name="password"
            onChange={(e) => this.handleChangePassword(e)}
          />
          <br />
           <input
            type="password"
            placeholder="Confirm password"
            name="password"
            onChange={(e) => this.handleChangeConfirmPassword(e)}
          />
          <br />
          <button
              onClick={() => { this.handleSignUpButton() }}
            >SignUp
          </button>
        </div>
        </div>
      </div>
    )] // 2
    let signupSuccessful = [(<Redirect to="/" />)] // 1
    return (
      <div>
        {this.state.auth === 1? signupSuccessful : login }
        {this.state.auth === 0 ? <div id="divWrong">Wrong Username/Password</div> : this.state.auth === -1 ? <div id ="divInvalid">Invalid Username/Password</div> :this.state.auth === -2? <div id="divWrong">Password not compatiple </div> : <div></div>}
      </div>
    )
  }
};