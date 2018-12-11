import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MomentCardWide.scss";
import MomentReview from "../Host/MomentReview";

export default class MomentCardWide extends Component {
  constructor() {
    super();
    this.state = {
      review: false
    };
  }
  toggleReview = () => {
    this.setState({
      review: !this.state.review
    });
  };

  render() {
    const { moment } = this.props;
    const { review } = this.state;
    return (
      <>
        <div
          className={review ? "moment-card-wide-grey" : "moment-card-wide"}
          key={moment.id}
        >
          <div className="moment-image">
            <figure className="mcw-swap-hover">
              <img
                className="mcw-swap-hover-front-image"
                src={moment.photos[1]}
              />
              <img
                className="mcw-swap-hover-back-image"
                src={moment.photos[0]}
              />
            </figure>
          </div>

          <div className="mcw-moment-card-details">
            <div className="mcw-moment-card-review">
              {moment.when_starting && !moment.date_complete ? (
                <h2 className="upcoming">
                  {" "}
                  Trip coming up {moment.when_starting}
                </h2>
              ) : (
                <></>
              )}
              {moment.when_starting && moment.date_complete ? (
                <h2>Trip completed {moment.when_starting}</h2>
              ) : (
                <></>
              )}
              {moment.date_complete ? (
                <button
                  className={
                    this.state.review ? "mcw-nextbutton-on" : "mcw-nextbutton"
                  }
                  onClick={this.toggleReview}
                >
                  Add Review
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="mcw-description-city-line">
              <p className="moment-category">{moment.category}</p>
              <i className="fas fa-circle" />
              <p className="moment-category">{moment.locale}</p>
            </div>
            <div className="mcw-moment-card-title">
              <p className="moment-title">{moment.title}</p>
            </div>
            <div className="mcw-moment-card-price-time">
              <p>${moment.price} per person </p>
              <i className="fas fa-circle" />
              <p>{moment.duration}</p>
            </div>
          </div>
        </div>
        <MomentReview review={this.state.review} />
      </>
    );
  }
}
