import React, { Component } from 'react';
import './Trips.scss';
import axios from 'axios';

class Trips extends Component {
    constructor(){
        super();;
        this.state = {
            trips: []
        }
    }


async componentDidMount () {
    const user = await axios.get('/api/sessions')
    if( user.data){
        const momentId = await axios.get(`/api/order/${user.data.user.id}`)
        console.log('momomoment td',momentId)
        this.setState({trips: momentId.data})
    }
}

  render() {
    const mappedTrips = this.state.trips.map(trip => {
        console.log(trip)
      return <div className="moment-card" key={trip.id}>
            <div className="moment-image">
            <figure className="swap-hover">
                <img  className="swap-hover-front-image" src={trip.photos[0]} />
                <img className="swap-hover-back-image" src={trip.photos[1]} />       
            </figure>
        </div>
        <div className="moment-card-details">
        <div className="description-city-line">
            <p>{trip.category}</p>
            <i className="fas fa-circle"></i>
            <p>{trip.locale}</p>
        </div>
            <div className="moment-card-title">
            <p>{trip.title}</p>
            </div>
        <div className="moment-card-price-time">
            <p>${trip.price * trip.group_size} for {trip.group_size} {trip.group_size > 1 ? "people" : "person"}</p>
        </div>
            <button>Give Review</button>
        </div>
    </div>
})
    return (
      <div className="trips-container">
        <div className="trips-wrapper">
            <div className="trips-upcoming">
                <p>upcoming trips</p>
                {mappedTrips}
            </div>
            <div className="trips-completed">
                <p>completed trips</p>

            </div>
        </div>
      </div>
    )
  }
}

export default Trips
