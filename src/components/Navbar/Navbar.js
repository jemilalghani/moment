import React, { Component } from "react";
import "./Navbar.scss";
import withContext from "../ContextApi/Context_HOC";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "./Search";
import logo from "../../Image/Moment-M-Logo-Purple.svg";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: false
    };
  }
  componentDidMount() {
    axios.get("/api/sessions").then(user => {
      this.setState({ user: user.data });
    });
  }
  toggle = key => {
    this.setState(prevState => {
      return { [key]: !prevState[key] };
    });
  };
  logout = () => {
    axios
      .post("/api/logout")
      .then(response => {
        this.props.context.updateInfo("login", false);
        this.props.context.updateInfo("user", {});
        this.setState({ user: false });
        localStorage.setItem("login", false);
      })
      .catch(error => {
        this.setState({ message: "Something went wrong: " });
      });
  };
  render() {
    // console.log('from contextttttt',this.props.context.user.user)
    return (
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <Link to="/">
              <img src={logo} width="40" alt="" />
            </Link>
            <Search />
          </div>
          {this.props.context.login || this.state.user ? (
            <div className="navbar-right">
              {this.props.context.user.user ? (
                <div className="navbar-loggedin">
                  <div>
                    <Link to="/host">Host</Link>
                  </div>
                  <div>
                    <Link to="/trips">Trips</Link>
                  </div>
                  <img
                    src={this.props.context.user.user.prof_photo_url}
                    className="nav-profile-img"
                    onClick={() => this.toggle("dropdown")}
                    alt=""
                  />
                </div>
              ) : (
                this.state.user.user && (
                  <div className="navbar-loggedin">
                    <div>
                      <Link to="/host">Host</Link>
                    </div>
                    <div>
                      <Link to="/trips">Trips</Link>
                    </div>
                    <img
                      src={this.state.user.user.prof_photo_url}
                      className="nav-profile-img"
                      onClick={() => this.toggle("dropdown")}
                      alt=""
                    />
                  </div>
                )
              )}
              <div
                className={
                  this.state.dropdown
                    ? "navbar-dropdown-closed"
                    : "navbar-dropdown"
                }
              >
                <ul>
                  <Link to="/userprofile">
                    <li>Edit Profile</li>
                  </Link>
                  <li>
                    <button onClick={this.logout}>logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="navbar-right">
              <div className="navbar-underline">
                <Link to="/register">Sign up</Link>
              </div>
              <div className="navbar-underline">
                <Link to="/login">Log in</Link>
              </div>
            </div>
          )}
        </div>
        <span>
          <div class="navbar-filterbuttons">
            <button>Dates</button>
            <button>Guest</button>
            <button>Price</button>
          </div>
        </span>
      </div>
    );
  }
}

export default withContext(Navbar);
