import React, { Component } from "react";
import "./LoginRegister.scss";
import withContext from "../ContextApi/Context_HOC";
import axios from "axios";

class LoginRegister extends Component {
  constructor() {
    super();
    this.state = {
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

  login = e => {
    this.setState({ message: null });
    e.preventDefault();
    const { username, password } = this.state;
    console.log(username, password);
    axios
      .post("/api/login", {
        username,
        password
      })
      .then(response => {
        if (response.data) {
          this.props.context.updateInfo("login", true);
          this.props.context.updateInfo("user", response.data);
          localStorage.setItem("login", true);
        }
      })
      .catch(error => {
        this.setState({ message: this.getMessage(error) });
      });
  };
  // login = async e => {
  //   e.preventDefault();
  //   const { username, password } = this.state;
  //   try {
  //     let user = await axios.post("/api/login", {
  //       username,
  //       password
  //     });
  //     this.props.context.updateInfo("login", true);
  //     this.props.context.updateInfo("user", user.data);
  //   } catch {
  //     console.log(e.user);
  //   }
  // };
  render() {
    return (
      <form className="Login" onSubmit={this.login}>
        <p>{this.state.message && this.state.message}</p>
        <input
          type="text"
          placeholder="Username"
          onChange={e => this.handleChange("username", e)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => this.handleChange("password", e)}
          required
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default withContext(LoginRegister);
