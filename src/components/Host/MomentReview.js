import React, { Component } from "react";
import starFull from "../../Image/moment-star-full.svg";
import starEmpty from "../../Image/moment-star-empty.svg";
import "./MomentReview.scss";
import Axios from "axios";

export default class MomentReview extends Component {
  constructor() {
    super();
    this.state = {
      stars: 3,
      starsMax: [1, 2, 3, 4, 5],
      title: "",
      description: ""
    };
  }
  changeStars = e => {
    console.log("e", e.target.alt);
    this.setState({ stars: e.target.alt });
  };

  addReview = () => {
    Axios.post("/api/review/add", {
      orderId: this.props.moment.id,
      title: this.state.title,
      description: this.state.description,
      stars: this.state.stars
    }).then(res => {
      console.log("addReview, response is ", res);
    });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { review, moment } = this.props;
    const { stars, starsMax } = this.state;
    console.log("Reivew, moment is", moment);
    const starMap = starsMax.map((star, index) => {
      if (stars >= star) {
        return (
          <img
            value={index}
            className="star"
            onClick={this.changeStars}
            src={starFull}
            alt={`${index + 1}`}
          />
        );
      } else {
        return (
          <img
            value={index}
            className="star"
            onClick={this.changeStars}
            src={starEmpty}
            alt={`${index + 1}`}
          />
        );
      }
    });

    return (
      <>
        {review === true ? (
          <div className="moment-card-wide-grey">
            <div className="moment-review">
              <h3>Review Title</h3>
              <div className="review-desc">Give your review a title.</div>
              <textarea
                name="title"
                className="text-area-1"
                type="text"
                placeholder="Title"
                onChange={this.handleChange}
              />
              <h3>Review Description</h3>
              <div className="review-desc">
                Decribe your experience, keeping in mind the expectations the
                host set with their experience description. Include any high or
                low points that affected your rating.
              </div>
              <textarea
                name="description"
                className="text-area-2"
                type="text"
                placeholder="Description"
                onChange={this.handleChange}
              />
              <h3>Star Rating</h3>
              <div className="review-desc">
                Give a rating in stars. 1 being a low score and 5 being high
                score.
              </div>
              {/* <textarea type="text" placeholder="Stars given out of five" /> */}
              <div className="stars-moment">{starMap}</div>
              <button className="mcw-nextbutton-on" onClick={this.addReview}>
                Submit
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}
