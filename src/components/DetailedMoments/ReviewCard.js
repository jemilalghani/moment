import React from "react";
import "./ReviewCard.scss";
import starFull from "../../Image/moment-star-full.svg";
import starEmpty from "../../Image/moment-star-empty.svg";
import moment from "moment";

export default function ReviewCard(props) {
  const { review } = props;
  const { stars } = review;
  const showStars = stars => {
    let starsmapped = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starsmapped.push(<img className="stars" src={starFull} />);
      } else {
        starsmapped.push(<img className="stars" src={starEmpty} />);
      }
    }
    return starsmapped;
  };
  return (
    <div className="review-wrapper">
      <div className="review-wrapper-inside">
        <div className="flex-row">
          <img className="host-photo" src={review.prof_photo_url} />
          <div className="flex-col-space-btw">
            <div className="name-date">
              <span className="name">{review.name_first}</span>
              <span className="review-date">
                {moment(review.date).format("MMMM YYYY")}
              </span>
            </div>
            <div className="flex-row">{showStars(stars)}</div>
          </div>
        </div>
        <div className="review-section">
          <span className="review-title">{review.title}</span>
          {/* <span>{review.stars}</span> */}

          <span className="review-description">{review.review}</span>
        </div>
      </div>
    </div>
  );
}
