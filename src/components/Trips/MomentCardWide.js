import React from 'react'
import {Link} from 'react-router-dom';
import './MomentCardWide.scss'

export default function MomentCardWide(props) {
  const {moment} = props;
  return (
    <div className="moment-card-wide" key={moment.id}>

      <div className="moment-image">
        <figure className="swap-hover">
          <img  className="swap-hover-front-image" src={moment.photos[1]} />
          <img className="swap-hover-back-image" src={moment.photos[0]} />       
        </figure>
      </div>

      <div className="moment-card-details">
        <div className="description-city-line">
          <p className="moment-category">{moment.category}</p>
          <i className="fas fa-circle"></i>
          <p className="moment-category">{moment.locale}</p>
        </div>
          <div className="moment-card-title">
            <p className="moment-title">{moment.title}</p>
          </div>
        <div className="moment-card-price-time">
          <p>${moment.price} per person </p>
          <i className="fas fa-circle"></i>
          <p>{moment.duration}</p>
        </div>
        <div className="moment-card-review">
            {moment.when_starting && !moment.date_complete ? <h2 className='upcoming'> Trip coming up {moment.when_starting}</h2>:<></>}
            {moment.when_starting && moment.date_complete ? <h3>Trip completed {moment.when_starting}</h3>: <></>}
            {moment.date_complete ? <button>Add Review</button>: <></>}
        </div>
      </div>
    </div>
  )
}
