import React, { Component } from 'react';
import './DetailedMoments.scss';

class DetailedMoments extends Component {
  render() {
    console.log('props in detail',this.props.location.state.moment)
    const {moment} = this.props.location.state
    return (
      <div className="detailed-container">
        <div className="detailed-wrapper">
          <img src={moment.exp_photo_url} alt=""/>
          <div className="detailed-info-box">
            <div className="detailed-category-title">
              <p>{moment.category}</p>
              <p>{moment.title}</p>
            </div>
            <div>
              <p>{moment.host_qualifications}</p>
              <p>{moment.what_we_will_do}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailedMoments;
