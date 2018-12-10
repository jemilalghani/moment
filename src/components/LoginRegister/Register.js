import React, { Component } from "react";
import axios from "axios";
import Cloudinary from "../Cloudinary/Cloudinary";
import withContext from "../ContextApi/Context_HOC";
import { Link } from "react-router-dom";
import "./Register.scss";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: false
    };
  }
  componentDidMount() {
    axios
      .get("/api/sessions")
      .then(user => {
        this.setState({ sessionUser: user.data });
      })
      .catch(error => {
        console.log("registerComp Error", error);
      });
  }
  login = () => {
    this.setState({ message: null });
    const { username, password } = this.state;
    axios
      .post("/api/login", {
        username,
        password
      })
      .then(response => {
        this.setState({ user: true });
        this.props.context.updateInfo("login", true);
        this.props.context.updateInfo("user", response.data);
      })
      .catch(error => {
        this.setState({ message: this.getMessage(error) });
      });
  };

  logout = () => {
    axios
      .post("/api/logout")
      .then(() => {
        this.props.context.updateInfo("login", false);
        this.props.context.updateInfo("user", {});
        this.setState({ user: false });
      })
      .catch(error => {
        this.setState({ message: this.getMessage(error) });
      });
  };
  handleChange(key, e) {
    this.setState({
      [key]: e.target.value
    });
  }
  register = e => {
    e.preventDefault();
    this.setState({ message: null });
    const {
      username,
      firstName,
      lastName,
      password,
      email,
      phone,
      gender,
      genderOther,
      about,
      locale
    } = this.state;
    const { userPhoto } = this.props.context;
    if (this.state.gender === "Other") {
      axios
        .post("/api/register", {
          username,
          password,
          firstName,
          lastName,
          email,
          phone,
          gender: genderOther,
          about,
          locale,
          userPhoto
        })
        .then(response => {
          console.log("response", response);
          this.setState({ user: true });
        })
        .catch(error => {
          this.setState({ message: this.getMessage(error) });
        });
    } else {
      axios
        .post("/api/register", {
          username,
          password,
          firstName,
          lastName,
          email,
          phone,
          gender,
          about,
          locale,
          userPhoto
        })
        .then(response => {
          console.log("response", response);
          this.setState({ user: true });
        })
        .catch(error => {
          this.setState({ message: this.getMessage(error) });
        });
    }
  };
  getMessage = error =>
    error.response
      ? error.response.data
        ? error.response.data.message
        : JSON.stringify(error.response.data, null, 2)
      : error.message;
  render() {
    console.log(this.state);
    return (
      !this.state.user && (
        <form className="register" onSubmit={this.register}>
          <h2>Register</h2>
          <p className="error-message">
            {this.state.message && this.state.message}
          </p>
          <input
            className="register-fields"
            type="text"
            placeholder="Username"
            onChange={e => this.handleChange("username", e)}
            required
          />
          <input
            className="register-fields"
            type="text"
            placeholder="First name"
            onChange={e => this.handleChange("firstName", e)}
            required
          />
          <input
            className="register-fields"
            type="text"
            placeholder="Last name"
            onChange={e => this.handleChange("lastName", e)}
            required
          />
          <input
            className="register-fields"
            type="password"
            placeholder="Password"
            onChange={e => this.handleChange("password", e)}
            required
          />
          <input
            className="register-fields"
            type="email"
            placeholder="Email"
            onChange={e => this.handleChange("email", e)}
            required
          />
          <input
            className="register-fields"
            type="tel"
            placeholder="Phone number"
            onChange={e => this.handleChange("phone", e)}
            required
          />
          <input
            className="register-fields"
            type="text"
            placeholder="Your location"
            onChange={e => this.handleChange("locale", e)}
            required
          />
          <select onChange={e => this.handleChange("gender", e)} required>
            <option value="">Select a gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Not Provided">Prefer to not answer</option>
            <option value="Other">Other</option>
          </select>
          {this.state.gender === "Other" && (
            <input
              className="register-fields"
              type="text"
              placeholder="Please state gender"
              onChange={e => this.handleChange("genderOther", e)}
              required
            />
          )}
          <h5>Describe Yourself</h5>
          <div className="register-about-you">
            <p>
              Airbnb is built on relationships. Help other people get to know
              you.
            </p>
            <p>
              Tell them about the things you like: What are 5 things you can’t
              live without? Share your favorite travel destinations, books,
              movies, shows, music, food.
            </p>
            <p>
              Tell them what it’s like to have you as a guest or host: What’s
              your style of traveling? Of Airbnb hosting?
            </p>
            <p>Tell them about you: Do you have a life motto?</p>
          </div>

          <textarea
            cols="80"
            rows="10"
            style={{ resize: "vertical" }}
            type="text"
            //   placeholder="About you"
            onChange={e => this.handleChange("about", e)}
            required
          />
          <div className="register-image-button">
            <div>
              <h5>To sign up, you must provide a profile picture.</h5>
              <Cloudinary name="userPhoto" />
            </div>
            <input
              className="register-button"
              type="submit"
              value="Register"
              disabled={this.state.user && "disabled"}
            />
          </div>

          {/* <button onClick={this.register} disabled={this.state.user && "disabled"}>Register as new user</button> */}
        </form>
      )
    );
  }
}
export default withContext(Register);
