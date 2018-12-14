import React, { Component } from "react";
import axios from "axios";
import MomentContainer from "./MomentContainer";
import MomentCard from "./MomentCard";
import Logo from "../../Image/Moment-M-Word-White.svg";
import withContext from "../ContextApi/Context_HOC";
import imageOne from "../../Image/imageOne.png";
import imageTwo from "../../Image/imageTwo.png";
import video from "../../Image/Sailing.mp4";
import video2 from "../../Image/food.mp4";
import BelowFooter from "../BelowFooter/BelowFooter";
var _ = require("lodash");

class Moments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moments: [],
      user: [],
      screenWidth: this.props.context.screenWidth,
      cardsNumber: 0
    };
  }

  componentDidMount() {
    console.log("component did mount, state is", this.state);
    this.cardNumberCalc();
    this.getMoments();
  }
  componentWillUnmount() {
    console.log("component did UNmount");
  }
  async componentDidUpdate(prevProps) {
    const { screenWidth } = this.props.context;
    if (this.props.context.screenWidth !== prevProps.context.screenWidth) {
      console.log("screenWidth is ", screenWidth);
      await this.setState({ screenWidth: screenWidth });
      this.cardNumberCalc();
    }
  }

  cardNumberCalc = () => {
    let cardAreaWidth = window.innerWidth * 0.85;
    let cardWidth = 240;
    let cardsNumber = Math.floor(cardAreaWidth / cardWidth);
    this.setState({ cardsNumber: cardsNumber });
  };

  getMoments = () => {
    axios.get("/api/moment/:highlight").then(async res => {
      let randomHighlights = _.shuffle(res.data);
      await this.setState({ momentHighlights: randomHighlights });
    });

    axios.get(`/api/m/place`).then(async res => {
      let randomLocals = _.shuffle(res.data);
      await this.setState({ momentLocals: randomLocals });
    });
  };
  playVideo() {
    this.refs.vidRef.play();
  }
  stopVideo() {
    this.refs.vidRef.pause();
  }
  play2Video() {
    this.refs.vidRef2.play();
  }
  stop2Video() {
    this.refs.vidRef2.pause();
  }
  render() {
    const { cardsNumber } = this.state;
    let mappedHighlights =
      this.state.momentHighlights &&
      this.state.momentHighlights.slice(0, cardsNumber).map(moment => {
        return <MomentCard moment={moment} />;
      });
    let mappedLocals =
      this.state.momentLocals &&
      this.state.momentLocals.slice(0, cardsNumber).map(moment => {
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
    // let title4 = <h2>Filtered Results</h2>;
    let text3 = (
      <div className="front-page">
        <div className="slogan">
          Moment is a platform for people to share their unique knowledge,
          passions, and abilities to anyone by hosting experiences. Discover
          your next adventure!
        </div>
      </div>
    );
    return (
      <>
        <MomentContainer
          // title={filteredMoments && title4}
          mapped={filteredMoments}
        />

        <MomentContainer title={title3} text={text3} mapped={blankMap} />
        <MomentContainer title={title} mapped={mappedHighlights} />
        {/* <div className="filler-images">
          <img src={imageOne} width="400" />
          <img src={imageTwo} width="400" />
        </div> */}
        <div className="filler-images">
          <div
            className="video"
            // style={{ backgroundImage: `url(${imageOne})` }}
            onMouseOver={this.playVideo.bind(this)}
            onMouseOut={this.stopVideo.bind(this)}
          >
            <div className="video-container">
              <video
                ref="vidRef"
                className="thevideo"
                loop
                preload="none"
                // style={{ width: "100%", height: "100%" }}
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <img className="image-video" src={imageTwo} />
          </div>
          <div
            className="video"
            // style={{ backgroundImage: `url(${imageOne})` }}
            onMouseOver={this.play2Video.bind(this)}
            onMouseOut={this.stop2Video.bind(this)}
          >
            <div className="video-container">
              <video
                ref="vidRef2"
                className="thevideo"
                loop
                preload="none"
                // style={{ width: "100%", height: "100%" }}
              >
                <source src={video2} type="video/mp4" />
              </video>
            </div>
            <img className="image-video" src={imageOne} />
          </div>
        </div>
        <MomentContainer title={title2} mapped={mappedLocals} />
        <BelowFooter />
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
