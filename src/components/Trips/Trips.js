import React, { Component } from "react";
import "./Trips.scss";
import axios from "axios";
import Moment from "react-moment";
import moment from "moment";
import MomentCard from "../Moments/MomentCard";
import MomentCardWide from "../Host/MomentCardWide";
import MomentContainer from "../Host/MomentContainer";
import image from "../../Image/upcoming.svg";

class Trips extends Component {
  constructor() {
    super();
    this.state = {
      trips: []
    };
  }

  async componentDidMount() {
    const user = await axios.get("/api/sessions");
    if (user.data) {
      const momentId = await axios.get(`/api/order/${user.data.user.id}`);
      this.formatDates(momentId.data);
      console.log("momomoment td", momentId);
      this.setState({ trips: momentId.data });
    }
  }
  formatDates = array => {
    // const{array} = this.state;
    for (let key in array) {
      let trip = array[key];
      const date = moment(trip.available_date).format("YYYY-MM-DD");
      var newDate = date + "T" + trip.available_time_end;
      console.log("newDate", newDate);
      var fromNow = moment(newDate).fromNow();
      // console.log('"from now":', fromNow, 'for', array[key])
      trip["when_starting"] = fromNow;
      if (fromNow.slice(0, 2) === "in") {
        trip["date_complete"] = false;
      } else {
        trip["date_complete"] = true;
        console.log("formatDates, trip with date_complete", trip);
      }
    }
  };
  giveTitle = words => {
    return <h2 className="title-padding">{words}</h2>;
  };

  render() {
    // const datePassed = this.state.trips.map(trip => {
    //   const date = moment(trip.available_date).format("YYYY-MM-DD")
    //   var newDate = date+'T'+trip.available_time_end;
    //   console.log('newDate', newDate)

    //   return (
    //   <Moment fromNow>
    //     {newDate}
    //   </Moment>
    //   )
    // })

    const upcomingTrips = this.state.trips.map(trip => {
      if (trip.date_complete === false) {
        return <MomentCardWide moment={trip} />;
      }
    });
    const completeTrips = this.state.trips.map(trip => {
      console.log(trip);
      if (trip.date_complete === true) {
        return <MomentCardWide moment={trip} />;
      }
    });
    let title = this.giveTitle("Completed Trips");
    let title2 = this.giveTitle("Upcoming Trips");
    let title3 = this.giveTitle("Book Your Next Adventure");
    console.log("Trips, this.state.trips", this.state.trips);
    return this.state.trips.length ? (
      <>
        <MomentContainer title={title2} mapped={upcomingTrips} />
        <MomentContainer title={title} mapped={completeTrips} />
        <div className="bottom-border" />
      </>
    ) : (
      <>
        <MomentContainer title={title3} mapped={upcomingTrips} />
        <div className="bottom-border" />
      </>
    );
  }
}

export default Trips;

{
  /* <div className="trips-container">
<div className="trips-wrapper">
    <div className="trips-upcoming">
        <p className='trip-title'>Upcoming Trips</p>
        {upcomingTrips}
    </div>
    <div className="trips-completed">
        <p className='trip-title'>Completed Trips</p>
        {completeTrips}
    </div>
</div>
</div> */
}
