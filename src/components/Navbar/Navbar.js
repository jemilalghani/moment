import React, { Component } from "react";
import "./Navbar.scss";
import withContext from "../ContextApi/Context_HOC";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Search from "./Search";
import logo from "../../Image/Moment-M-Logo-Purple.svg";
import { VirtualTimeScheduler } from "rxjs";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: false,
      guest: false,
      price: false,
      categories: false,
      guestSize: 1
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
  filterButton = (key, e) => {
    console.log(e);
    this.setState({ [key]: e });
  };
  logout = () => {
    axios
      .post("/api/logout")
      .then(() => {
        this.props.context.clear();
        this.setState({ user: false });
        this.props.history.push("/");
      })
      .catch(() => {
        this.setState({ message: "Something went wrong: " });
      });
  };
  increment() {
    let value = this.state.guestSize;
    let addOne = value + 1;
    console.log(addOne);
    this.setState({ guestSize: addOne });
  }
  decrement() {
    let value = this.state.guestSize;
    let subtractOne = value - 1;
    if (subtractOne < 0) {
      this.setState({ guestSize: 0 });
    } else {
      this.setState({ guestSize: subtractOne });
    }
  }
  clearModal(id) {
    id === 1 && this.setState({ price: false, categories: false });
    id === 2 && this.setState({ guest: false, categories: false });
    id === 3 && this.setState({ guest: false, price: false });
    id === 4 &&
      this.setState({ guest: false, price: false, categories: false });
  }
  componentWillMount() {
    document.addEventListener("clickend", this.handleClick, false);
  }
  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.setState({ guest: false, price: false, categories: false });
  };
  render() {
    console.log(this.props);
    console.log("navbar sessions data", this.state);
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

        {this.props.location.pathname === "/" && (
          <span>
            <div className="navbar-filterbuttons">
              <button
                onClick={() => {
                  this.clearModal(1);
                  this.toggle("guest");
                }}
              >
                Guest
              </button>
              <button
                onClick={() => {
                  this.clearModal(2);
                  this.toggle("price");
                }}
              >
                Price
              </button>
              <button
                onClick={() => {
                  this.clearModal(3);
                  this.toggle("categories");
                }}
              >
                Categories
              </button>
            </div>
            <div
              className={
                this.state.guest || this.state.price || this.state.categories
                  ? "grey-background"
                  : "no-background"
              }
              onClick={() => this.clearModal(4)}
            />
            <div
              className="guestmodal"
              style={{
                display: !this.state.guest ? "none" : "flex"
              }}
              ref={node => (this.node = node)}
            >
              <button className="guest-button" onClick={() => this.decrement()}>
                -
              </button>
              <p>{this.state.guestSize}+</p>
              <button className="guest-button" onClick={() => this.increment()}>
                +
              </button>
            </div>
            <div
              className="pricemodal"
              style={{
                display: !this.state.price ? "none" : "flex"
              }}
              ref={node => (this.node = node)}
            >
              <input
                type="range"
                min="1"
                max="5000"
                // value="1000"
                className="price-slider"
                onChange={e => this.filterButton("priceValue", e.target.value)}
              />
              <p>${this.state.priceValue}</p>
            </div>
            <div
              className="categorymodal"
              style={{
                display: !this.state.categories ? "none" : "flex"
              }}
              ref={node => (this.node = node)}
            >
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "Arts & Design")}
              >
                Arts & Design
              </button>
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "Fashion")}
              >
                Fashion
              </button>
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "Entertainment")}
              >
                Entertainment
              </button>
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "Sports")}
              >
                Sports
              </button>
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "Wellness")}
              >
                Wellness
              </button>
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "Nature")}
              >
                Nature
              </button>
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "Food & Drink")}
              >
                Food & Drink
              </button>
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "Lifestyle")}
              >
                Lifestyle
              </button>
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "History")}
              >
                History
              </button>
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "Music")}
              >
                Music
              </button>
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "Business")}
              >
                Business
              </button>
              <button
                className="cat-buttons"
                onClick={() => this.filterButton("cat", "Nightlife")}
              >
                Nightlife
              </button>
              <button className="apply-button">Apply</button>
            </div>
          </span>
        )}
      </div>
    );
  }
}

export default withContext(withRouter(Navbar));
