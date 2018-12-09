import React, { Component } from "react";
import "./LoginRegister.scss";
import withContext from "../ContextApi/Context_HOC";
import { Link } from "react-router-dom";

import axios from "axios";

class LoginRegister extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      phone: 0,
      gender: "",
      about: "",
      locale: "",
      userPhoto: "",
      message: "",
      user: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, e) {
    this.setState({
      [key]: e.target.value
    });
  }
  getMessage = error =>
    error.response
      ? error.response.data
        ? error.response.data.message
        : JSON.stringify(error.response.data, null, 2)
      : error.message;

  login = () => {
    this.setState({ message: null });
    const { username, password } = this.state;
    axios
      .post("/api/login", {
        username,
        password
      })
      .then(response => {
        if (response.data.length) {
          this.setState({ user: true });
          this.props.context.updateInfo("login", true);
          this.props.context.updateInfo("user", response.data);
        }
      })
      .catch(error => {
        this.setState({ message: this.getMessage(error) });
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className="Login">
        <p>{this.state.message && this.state.message}</p>
        <input
          type="text"
          placeholder="Username"
          onChange={e => this.handleChange("username", e)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => this.handleChange("password", e)}
        />
        <div>
          <button onClick={this.login}>
            {/* <Link to="/userprofile">Login</Link> */}
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default withContext(LoginRegister);
