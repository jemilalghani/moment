import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./HostPage.scss";
import gear from "../../Image/settings.svg";
import arrow from "../../Image/down-arrow (2).png";

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
  toggle(key) {
    this.setState(prevState => {
      return { [key]: !prevState[key] };
    });
  }
  alterDeleteColumn = (e, p) => {
    axios.get(`/api/delete/${e}/${p}`).then(done => {
      console.log(done);
      this.setState({ hostInfo: done.data });
    });
  };
  render() {
    let hostMoments =
      this.state.hostInfo &&
      this.state.hostInfo.map((el, index) => {
        return el.deleted === false ? (
          <div className="HostCards">
            <div className="HostCards-flex">
              <div
                className="HostCards-img"
                style={{ backgroundImage: `url(${el.photos[0]}` }}
              >
                {/* <img src={el.photos[0]} /> */}
              </div>
              <div className="HostCards-info">
                <h2>{el.title}</h2>
                <p className="HostCards-created">{el.category}</p>
                <p>
                  {"created on " +
                    `${el.date_created}`
                      .split("T")
                      .slice(0, 1)
                      .join("")}
                </p>
                <p>{el.group_size_limit + " guest"}</p>
                <p>${el.price + " per person"}</p>
                <Link to={`/moments/${el.exp_id}`}>
                  <button>See More</button>
                </Link>
              </div>
            </div>
            <div className="HostCards-delete-container">
              <div
                className="HostCards-delete"
                onClick={() => this.toggle(`delete${index}`)}
              >
                <img
                  src={gear}
                  className={
                    this.state[`delete${index}`]
                      ? "delete-gear"
                      : "delete-gear-rotate"
                  }
                  alt=""
                />
                <img
                  className={
                    this.state[`delete${index}`]
                      ? "delete-arrow"
                      : "delete-arrow-rotate"
                  }
                  src={arrow}
                  alt=""
                />
              </div>
              <div
                className={
                  this.state[`delete${index}`]
                    ? "delete-visible"
                    : "delete-hidden"
                }
                value={el.id}
                onClick={() => {
                  this.alterDeleteColumn(el.id, el.prof_id);
                  this.toggle(`delete${index}`);
                }}
              >
                Delete
              </div>
            </div>
          </div>
        ) : null;
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
