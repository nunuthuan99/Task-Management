import React from "react";
import Auth from "./auth";
import { Redirect } from "react-router-dom";
import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "./style.css";


export class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: 2, // initial
    }
    this.username = ''
    this.password = ''
  }


  handleChangeUsername(e) {
    this.username = e.target.value
  }
  handleChangePassword(e) {
    this.password = e.target.value
  }
  handleClickButton() {
    let result = Auth.login([this.username, this.password]);
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
        <div className="header">
          <div>Trmúa <span>hmề</span></div>
        </div>
        <br />
        <div className="login">
          <input
            type="text"
            placeholder="username"
            name="user"
            onChange={(e) => this.handleChangeUsername(e)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => this.handleChangePassword(e)}
          />
          <br />
          <button
              onClick={() => { this.handleClickButton() }}
            >Login
          </button>
        </div>
      </div>
    )] // 2
    let loginSuccessful = [(<Redirect to="/homepage" />)] // 1

    return (
      <div>
        {this.state.auth === 1 ? loginSuccessful : login}
        {this.state.auth === 0 ? <div id="divWrong">Wrong Username/Password</div> : this.state.auth === -1 ? <div id ="divInvalid">Invalid Username/Password</div> : <div></div>}
      </div>
    )
  }
};

