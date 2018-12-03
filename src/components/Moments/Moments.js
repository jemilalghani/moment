import React, { Component } from 'react';
import './Moments.scss';
import axios from 'axios';


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
      return (<div className="moment-card">
      <div className="moment-image">
        <figure className="swap-hover">
          <img  className="swap-hover-front-image" src="http://313ct818yszd3xd6xa2z47nm-wpengine.netdna-ssl.com/wp-content/uploads/2011/11/ChinaPavilion.jpg"/>
          <img className="swap-hover-back-image" src="https://media.timeout.com/images/102875459/630/472/image.jpg"/>
        </figure>
      </div>
      <div className="moment-card-details">
        <div className="description-city-line">
          <p>Design Walk</p>
          <i className="fas fa-circle"></i>
          <p>Shanghai</p>
        </div>
          <div className="moment-card-title">
            <p>Discover Art deco of shanghai 1930s</p>
          </div>
        <div className="moment-card-price-time">
          <p>$40 per person</p>
          <i className="fas fa-circle"></i>
          <p>2.5 hours</p>
        </div>
      </div>
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