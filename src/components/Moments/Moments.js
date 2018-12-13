import React, { Component } from "react";
import axios from "axios";
import MomentContainer from "./MomentContainer";
import MomentCard from "./MomentCard";
import Logo from "../../Image/Moment-M-Word-White.svg";
import withContext from "../ContextApi/Context_HOC";

class Moments extends Component {
  constructor() {
    super();
    this.state = {
      moments: [],
      user: []
    };
  }

  componentDidMount() {
    this.getMoments();
    //this.getHost();
  }

  getMoments = () => {
    axios.get("/api/moment/:highlight").then(res => {
      //console.log('moment highligghghht',res.data)
      this.setState({ moments: res.data });
    });
  };

  render() {
    let mappedMoments1 = this.state.moments.slice(0, 5);
    console.log("mappedMoments1", mappedMoments1);
    let mappedMoments = this.state.moments.slice(0, 12).map(moment => {
      // console.log(moment.photos)
      return <MomentCard moment={moment} />;
    });
    let filteredMoments =
      this.props.context.filteredMoments !== [] &&
      this.props.context.filteredMoments.map(moment => {
        return <MomentCard moment={moment} />;
      });
    let blankMap = <></>;
    let title = <h2>Highlighted Trips From Around the World</h2>;
    let title2 = <h2>Trips Found Nearby</h2>;
    let title3 = <img className="logo" src={Logo} />;
    let title4 = <h2>Filtered Results</h2>;
    let text3 = (
      <div className="front-page">
        <div className="slogan">
          Moment is a platform for people to share their unique knowledge,
          passions, and abilities to anyone by hosting experiences. Discover
          your next adventure!
        </div>
        {/* <div className="slogan">
          Hosts create an experience - an event limited to a single day, but
          which is not limited in creativity. Hosts will provide the opportunity
          to learn, taste, think, hike, ride see or discover something new.
          There are unique experiences across the globe waiting for you. Sign up
          now to find your next adventure!
        </div>{" "} */}
      </div>
    );
    return (
      <>
        <MomentContainer
          // title={filteredMoments && title4}
          mapped={filteredMoments}
        />

        <MomentContainer title={title3} text={text3} mapped={blankMap} />
        <MomentContainer title={title} mapped={mappedMoments} />
        <MomentContainer title={title2} mapped={mappedMoments} />
      </>
    );
  }
}

export default withContext(Moments);

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
