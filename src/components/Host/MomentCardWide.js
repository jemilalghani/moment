import React, { Component } from "react";
import gear from "../../Image/settings.svg";
import arrow from "../../Image/down-arrow (2).png";
import { Link } from "react-router-dom";
import MomentReview from "./MomentReview";
import "./MomentCard.scss";

export default class MomentCard extends Component {
  constructor() {
    super();
    this.state = {
      review: false,
      deleted: false
    };
  }
  toggle(key) {
    console.log("toggle clicked");
    this.setState(prevState => {
      return { [key]: !prevState[key] };
    });
  }

  render() {
    const { moment, pathname } = this.props;
    const { review, deleted } = this.state;
    return (
      <>
        <div className={!review ? "HostCards-flex" : "HostCards-flex-grey"}>
          <div className="row">
            <div
              className="HostCards-img"
              style={{ backgroundImage: `url(${moment.photos[0]}` }}
            >
              {/* <img src={moment.photos[0]} /> */}
            </div>
            <div className="HostCards-info">
              <section>
                <h2>{moment.title}</h2>
                <p className="HostCards-created">{moment.category}</p>
                <p>
                  {"created on " +
                    `${moment.date_created}`
                      .split("T")
                      .slice(0, 1)
                      .join("")}
                </p>
                <p>{moment.group_size_limit + " guest"}</p>
                <p>${moment.price + " per person"}</p>
              </section>
              <Link to={`/moments/${moment.id}`}>
                <button>See More</button>
              </Link>
            </div>
          </div>
          <div className="review-page">
            {moment.when_starting && !moment.date_complete ? (
              <h3 className="upcoming">
                {" "}
                Trip coming up {moment.when_starting}
              </h3>
            ) : (
              <></>
            )}
            {moment.when_starting && moment.date_complete ? (
              <h3>Trip completed {moment.when_starting}</h3>
            ) : (
              <></>
            )}
            {moment.date_complete ? (
              <button
                className={
                  this.state.review ? "mcw-nextbutton-on" : "mcw-nextbutton"
                }
                onClick={() => this.toggle("review")}
              >
                Add Review
              </button>
            ) : (
              <></>
            )}

            {pathname === "/host" ? (
              <div className="HostCards-delete-container">
                <div
                  className="HostCards-delete"
                  onClick={() => this.toggle("deleted")}
                >
                  <img
                    src={gear}
                    className={deleted ? "delete-gear" : "delete-gear-rotate"}
                    alt=""
                  />
                  <img
                    className={deleted ? "delete-arrow" : "delete-arrow-rotate"}
                    src={arrow}
                    alt=""
                  />
                </div>
                <div className={deleted ? "delete-visible" : "delete-hidden"}>
                  <span>Delete</span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <MomentReview review={this.state.review} moment={moment} />
      </>
    );
  }
}
