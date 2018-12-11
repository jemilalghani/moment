import React, { Component } from "react";
import starFull from "../../Image/moment-star-full.svg";
import starEmpty from "../../Image/moment-star-empty.svg";

export default class MomentReview extends Component {
  constructor() {
    super();
    this.state = {
      stars: 3,
      starsMax: [1, 2, 3, 4, 5]
    };
  }
  changeStars = e => {
    console.log("e", e.target.alt);
    this.setState({ stars: e.target.alt });
  };

  render() {
    const { stars, starsMax } = this.state;
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
        {this.props.review === true ? (
          <div className="moment-card-wide-grey">
            <div className="moment-review">
              <h3>Review Title</h3>
              <div className="review-desc">Give your review a title.</div>
              <textarea
                className="text-area-1"
                type="text"
                placeholder="Title"
              />
              <h3>Review Description</h3>
              <div className="review-desc">
                Decribe your experience, keeping in mind the expectations the
                host set with their experience description. Include any high or
                low points that affected your rating.
              </div>
              <textarea
                className="text-area-2"
                type="text"
                placeholder="Description"
              />
              <h3>Star Rating</h3>
              <div className="review-desc">
                Give a rating in stars. 1 being a low score and 5 being high
                score.
              </div>
              {/* <textarea type="text" placeholder="Stars given out of five" /> */}
              <div className="stars">{starMap}</div>
              <button className="mcw-nextbutton-on">Submit</button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}
