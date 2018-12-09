import React, { Component } from 'react'
import axios from 'axios'
import ReviewCard from './ReviewCard'



export default class Reviews extends Component {
  constructor(){
    super()
    this.state ={
      reviews: []
    }
  }
  componentDidMount(){
    this.getReviews();
  }
  getReviews = () => {
    axios.get(`/api/reviews/${this.props.moment.id}`).then (
      res => this.setState({reviews: res.data})
    )
  }

  render() {
    console.log('this.props', this.props)
    console.log('this.state', this.state)
    const {reviews} = this.state;

    const reviewArr = reviews.map( review => {
      return <ReviewCard review={review}/>
    })
    console.log('this.props.moment.id', this.props.moment.id)
    return (
      <div>
        <span>REVIEWS</span>
        
        {reviewArr}
      </div>
    )
  }
}

{/* <div>
  <span>{review.title}</span>
  <span>{review.review}</span>
  <span>{review.date}</span>
  <span>by {review.name_first +' '+ review.name_last}</span>
  <img src={review.prof_photo_url}/>
</div> */}