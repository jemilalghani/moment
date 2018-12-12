import React from "react";
import { Link } from "react-router-dom";

export default function MomentCard(props) {
  const { moment } = props;
  return (
    <div className="moment-card" key={moment.id}>
      {moment.when_starting && !moment.date_complete ? (
        <h3>{moment.when_starting}</h3>
      ) : (
        <></>
      )}
      {moment.when_starting && moment.date_complete ? (
        <h3>Completed: {moment.when_starting}</h3>
      ) : (
        <></>
      )}
      {moment.date_complete ? <button>Add Review</button> : <></>}
      <Link to={{ pathname: `/moments/${moment.id}`, state: { moment } }}>
        <div className="moment-image">
          <figure className="swap-hover">
            <img className="swap-hover-front-image" src={moment.photos[1]} />
            <img className="swap-hover-back-image" src={moment.photos[0]} />
          </figure>
        </div>
        <div className="moment-card-details">
          <div className="description-city-line">
            <p className="moment-category">{moment.category}</p>
            <i className="fas fa-circle" style={{ fontSize: "3px" }} />
            <p className="moment-category">{moment.locale}</p>
          </div>
          <div className="moment-card-title">
            <p className="moment-title">{moment.title}</p>
          </div>
          <div className="moment-card-price-time">
            <p>${moment.price} per person </p>
            <i className="fas fa-circle" style={{ fontSize: "3px" }} />
            <p>{moment.duration} hours</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
