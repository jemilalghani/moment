import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./HostPage.scss";

import MomentContainer from "./MomentContainer";
import MomentCardWide from "./MomentCardWide";

export default class HostPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    const user = await axios.get("/api/sessions");
    if (user.data) {
      const hostInfo = await axios.get(`/api/host/${user.data.user.id}`);
      console.log(hostInfo.data);
      this.setState({ hostInfo: hostInfo.data });
    }
  }

  render() {
    const { pathname } = this.props.location;
    console.log("pathname", pathname);
    console.log("thisstate", this.state);
    // console.log("this.state.hostInfo", this.state.hostInfo);
    let hostMoments =
      this.state.hostInfo &&
      this.state.hostInfo.map(moment => {
        return (
          <MomentCardWide
            delete={this.state.delete}
            moment={moment}
            pathname={pathname}
          />
        );
      });
    const ongoing = <h2 className="title-padding">Your Experiences</h2>;
    return (
      <>
        <div className="hostpage">
          <div className="hostpage-header">
            <div className="hostpage-text">
              <h2>Welcome Back</h2>
              <p>Keep track of all your moments. Happy hosting!</p>
            </div>
            <div className="hostpage-newIdea-button">
              <Link to="/host/create">
                <button>New Idea</button>
              </Link>
            </div>
          </div>
        </div>
        <MomentContainer title={ongoing} mapped={hostMoments} />
      </>
    );
  }
}
