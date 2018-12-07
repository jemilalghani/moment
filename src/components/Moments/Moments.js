import React, { Component } from 'react';
import './Moments.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Moments extends Component {
  constructor(){
    super();
    this.state = {
      moments: []
    }
  }

  componentDidMount(){
    this.getMoments();
  }
  
  getMoments = () => {
    axios.get('/api/moment/:highlight').then(res => {
      console.log('moment highligghghht',res.data)
      this.setState({moments: res.data})
    })
  }

  render() {
    let mappedMoments = this.state.moments.map(moment => {
      // console.log(moment.photos)
      return (
        <div className="moment-card" key={moment.id}>
        <Link to={{pathname: `/moments/${moment.id}`, state:{moment}}}>
          <div className="moment-image">
          <figure className="swap-hover">
              <img  className="swap-hover-front-image" src={moment.photos[1]} />
              <img className="swap-hover-back-image" src={moment.photos[0]} />       
          </figure>
          </div>
      <div className="moment-card-details">
        <div className="description-city-line">
          <p>{moment.category}</p>
          <i className="fas fa-circle"></i>
          <p>{moment.locale}</p>
        </div>
          <div className="moment-card-title">
            <p>{moment.title}</p>
          </div>
        <div className="moment-card-price-time">
          <p>${moment.price} per person </p>
          <i className="fas fa-circle"></i>
          <p>{moment.duration}</p>
        </div>
      </div>
      </Link>
    </div>)
    })
    return (
      <div className="moment-container">
        {mappedMoments}
      </div>
    )
  }
}

export default Moments;


// <figure class="swap-on-hover">
//  <img  class="swap-on-hover__front-image" src="https://c402277.ssl.cf1.rackcdn.com/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942"/>
//   <img class="swap-on-hover__back-image" src="http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg"/>
// </figure>

// <div className="moment-card">
// <div className="moment-image">
//   <video src="https://a0.muscache.com/v/67/ed/67ede947-3144-4ee5-a55b-1c7a144a57c1/36fa8f79ae995a0ea53354b3550cecf9_1500k_1.mp4" loop></video>
// </div>
// <div className="moment-card-details">
//   <div className="description-city-line">
//     <div>Design Walk</div>
//     <div>Shanghai</div>
//   </div>
//   <div className="moment-card-title">Discover Art deco of shanghai 1930s</div>
//   <div className="moment-card-price-time">
//     <div>$40 per person</div>
//     <div>2.5 hours</div>
//   </div>
// </div>
// </div>