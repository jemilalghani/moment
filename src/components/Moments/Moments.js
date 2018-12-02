import React, { Component } from 'react';
import './Moments.scss';


class Moments extends Component {
  render() {
    return (
      <div className="moment-container">
        <div className="moment-card">
          <div className="moment-image">
            <video src="https://a0.muscache.com/v/67/ed/67ede947-3144-4ee5-a55b-1c7a144a57c1/36fa8f79ae995a0ea53354b3550cecf9_1500k_1.mp4" autoPlay loop></video>
          </div>
          <div className="moment-card-details">
            <div className="description-city-line">
              <div>Design Walk</div>
              <div>Shanghai</div>
            </div>
            <div className="moment-card-title">Discover Art deco of shanghai 1930s</div>
            <div className="moment-card-price-time">
              <div>$40 per person</div>
              <div>2.5 hours</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Moments;
