import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./HostPage.scss";
import gear from "../../Image/settings.png";
import arrow from "../../Image/down-arrow (1).png";

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
    let hostMoments =
      this.state.hostInfo &&
      this.state.hostInfo.map(el => {
        return (
          <div className="HostCards">
            <div
              className="HostCards-img"
              style={{ backgroundImage: `url(${el.photos[0]}` }}
            >
              {/* <img src={el.photos[0]} /> */}
            </div>
            <div className="HostCards-info">
              <h2>{el.title}</h2>
              <p className="HostCards-created">
                {`${el.date_created}`
                  .split("T")
                  .slice(0, 1)
                  .join("")}
              </p>
              <button>See More</button>
            </div>
            <div className="HostCards-delete">
              <img src={gear} className="delete-gear" />
              <img className="delete-arrow" src={arrow} />
            </div>
          </div>
        );
      });
    return (
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
        {hostMoments}
      </div>
    );
  }
}
