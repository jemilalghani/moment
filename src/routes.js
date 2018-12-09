import React from "react";
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

export default (
  <Switch>
    <Route path="/host/create" component={Wizard} />
    <Route path="/host" component={HostPage} />
    <Route path="/register" component={Register} />
    <Route path="/moments/:id" component={DetailedMoments} />
    <Route path="/login" component={LoginRegister} />
    <Route path="/userprofile" component={UserProfile} />
    <Route path="/checkout" component={CheckOut} />
    <Route path="/trips" component={Trips} />
    <Route path="/admin" component={Admin} />
    <Route exact path="/" component={Moments} />
  </Switch>
);
