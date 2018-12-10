import React from 'react'
import './ReviewCard.scss'
import starFull from '../../Image/moment-star-full.svg'
import starEmpty from '../../Image/moment-star-empty.svg'

export default function ReviewCard(props) {

  const {review} = props;
  const {stars} =review;
  const showStars = (stars) => {
    let starsmapped = []
    for ( let i =0; i < 5; i++){
      if ( i < stars ) {
        starsmapped.push(<img className='star' src={starFull}/>)
      } else {
        starsmapped.push(<img className='star' src={starEmpty}/>)
      }
    }
    return starsmapped;
  }
  return (
    <div className='review-wrapper'>
      <div className='review-wrapper-inside'>
        <span className='review-title'>{review.title}</span>
        {/* <span>{review.stars}</span> */}
        <div className='display-inline'>
          {showStars(stars)}
        </div>
        <span className='review-description'>{review.review}</span>
        <span>{review.date}</span>
        <div className='display-inline'></div>
          <span>by {review.name_first +' '+ review.name_last}</span>
          <img className='host-photo-box' src={review.prof_photo_url}/>
        </div>
      </div>

  )
}
