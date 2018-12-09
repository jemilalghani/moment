import React, { Component } from 'react';
import axios from 'axios';
import MomentContainer from './MomentContainer'
import MomentCard from './MomentCard'


class Moments extends Component {
  constructor(){
    super();
    this.state = {
      moments: [],
      user:[]
    }
  }

  componentDidMount(){
    this.getMoments();
    //this.getHost();
  }
  
  getMoments = () => {
    axios.get('/api/moment/:highlight').then(res => {
      //console.log('moment highligghghht',res.data)
      this.setState({moments: res.data})
    })
  }

  // getHost = () => {
  //   axios.get('/api/moment/hostFind').then(response => {
  //     console.log('found host', response.data)
  //   })
  // }
  giveTitle = (words) => {
    return <h2>{words}</h2>
  }

  render() {
    let mappedMoments1 = this.state.moments.slice(0,5)
    console.log('mappedMoments1', mappedMoments1)
    let mappedMoments = this.state.moments.slice(0,5).map(moment => {
      // console.log(moment.photos)
      return (
        <MomentCard moment={moment}/>
      )
    })
    let title = this.giveTitle('Highlighted Trips From Around the World')
    let title2 = this.giveTitle('Trips Found Nearby')
    return ( <>
      <MomentContainer title={title} mapped={mappedMoments}/>
      <MomentContainer title={title2} mapped={mappedMoments}/>
    </> )
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