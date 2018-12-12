import React from "react";
import "./ReviewCard.scss";
import starFull from "../../Image/moment-star-full.svg";
import starEmpty from "../../Image/moment-star-empty.svg";

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
            <span className="name">
              {review.name_first + " " + review.name_last}
            </span>
            <div className="flex-row">{showStars(stars)}</div>
          </div>
        </div>
        <span className="review-title">{review.title}</span>
        {/* <span>{review.stars}</span> */}
        <div className="display-inline" />
        <span className="review-description">{review.review}</span>
        <span>{review.date}</span>
        <div className="display-inline" />
      </div>
    </div>
  );
}
