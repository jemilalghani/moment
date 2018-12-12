import React, { Component } from "react";
import withContext from "./components/ContextApi/Context_HOC";
import Navbar from "./components/Navbar/Navbar";
// import routes from "./routes";
import { Switch, Route, Redirect } from "react-router-dom";
import DetailedMoments from "./components/DetailedMoments/DetailedMoments";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import Moments from "./components/Moments/Moments";
import Wizard from "./components/CreateMoment/Wizard";
import UserProfile from "./components/UserProfile/UserProfile";
import CheckOut from "./components/CheckOut/CheckOut";
import Trips from "./components/Trips/Trips";
import Admin from "./components/Admin/Admin";
import HostPage from "./components/Host/HostPage";
import Register from "./components/LoginRegister/Register";
import "./App.scss";
import "./reset.css";
import ThankYou from "./components/ThankYou/ThankYou";

class App extends Component {
  componentDidMount() {
    // localStorage.setItem("login", false);
    this.updateScreen();
    window.addEventListener("resize", this.updateScreen.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreen.bind(this));
  }
  updateScreen = () => {
    this.props.context.updateInfo("screenWidth", window.innerWidth);
    this.props.context.updateInfo("screenHeight", window.innerHeight);
  };

  render() {
    // localStorage.clear();
    // let login = localStorage.getItem("login");
    console.log("CONTEXT", this.props.context);
    const { login, register } = this.props.context;
    console.log(login);
    return (
      <div className="App">
        <Navbar />
        <div className="app-routes">
          <Switch>
            <Route path="/host/create" component={Wizard} />
            <Route path="/host" component={HostPage} />
            <Route
              path="/register"
              render={() =>
                register ? <Redirect to="/login" /> : <Register />
              }
            />
            <Route path="/moments/:id" component={DetailedMoments} />
            <Route
              path="/login"
              render={() =>
                login ? <Redirect to="/userprofile" /> : <LoginRegister />
              }
            />
            <Route path="/userprofile" component={UserProfile} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/trips" component={Trips} />
            <Route path="/admin" component={Admin} />
            <Route path="/thankyou" component={ThankYou} />
            <Route exact path="/" component={Moments} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withContext(App);
