import React, { Component } from "react";
import "./DetailedMoments.scss";
import { SingleDatePicker } from "react-dates";
import Map from "../Map/Map";
import { Link } from "react-router-dom";
import withContext from "../ContextApi/Context_HOC";
import Reviews from "./Reviews";
import axios from "axios";
import Slider from "react-slick";
import prev from "../../Image/Group 4.svg";
import next from "../../Image/Group 5.svg";
import moment from "moment";
import BelowFooter from "../BelowFooter/BelowFooter";
var _ = require("lodash");

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src={prev}
      className={className + " detail-prevArrow"}
      onClick={onClick}
      alt=""
    />
  );
}
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src={next}
      className={className + " detail-nextArrow"}
      onClick={onClick}
      alt=""
    />
  );
}

class DetailedMoments extends Component {
  constructor() {
    super();
    this.state = {
      availableDate: "",
      user: "",
      groupRemaining: null
    };
  }
  async componentDidMount() {
    const id = this.props.match.params.id;
    window.scrollTo(0, 0);
    await axios.get(`/api/moments/${id}`).then(moment => {
      // console.log("axiosget by id", moment.data);
      this.setState({ moment: moment.data[0] });
    });
    axios.get("/api/sessions").then(user => {
      this.setState({ user: user.data });
    });
    this.state.moment && console.log("CDM state.moment", this.state.moment.id);
    this.state.moment &&
      axios.get(`/api/availabledates/${this.state.moment.id}`).then(el => {
        console.log("el is", el);
        const dates = el.data;
        let datesSorted = _.orderBy(dates, function(date) {
          return new moment(date["available_date"]).format("YYYYMMDD");
        });
        this.setState({
          availableDate: datesSorted,
          groupRemaining: el.data
        });
      });
  }

  render() {
    console.log("this.state.moment", this.state);
    console.log("props in detail", this.props);
    console.log("user", this.state.user);
    console.log("dateee", this.state.availableDate);
    const { groupRemaining } = this.state;
    const { moment } = this.state;
    const chooseDate = new Date(this.state.availableDate);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    const sendDate =
      this.state.availableDate &&
      this.state.availableDate.map(dates => {
        return <div>{dates.available_date}</div>;
      });
    let mappedDates =
      this.state.availableDate &&
      this.state.availableDate.map(date => {
        console.log("mapping detailed, date title", date.title);
        console.log("mapping detailed, date date", date.available_date);
        console.log(
          "mapping detailed, date group size rem",
          date.group_size_remaining
        );
        return (
          <div className="avail-date">
            {date.available_date}
            <button className="choose-button">
              <Link
                to={{
                  pathname: "/checkout",
                  moment: { moment },
                  dateId: date.id,
                  date: date.available_date,
                  sendGroupRemaining: date.group_size_remaining
                }}
                className="choose-button"
              >
                Choose
              </Link>
            </button>
          </div>
        );
      });
    return moment ? (
      <div className="detailed-container">
        <div className="detailed-wrapper">
          <Slider {...settings}>
            <div>
              <img className="detailed-img" src={moment.photos[0]} alt="" />
            </div>
            <div>
              <img className="detailed-img" src={moment.photos[1]} alt="" />
            </div>
          </Slider>
          <div className="detailed-info-wrapper">
            <div className="detailed-info-box">
              <div className="detailed-category-title">
                <h4 className="detailed-moment-category">{moment.category}</h4>
                <h1 className="detailed-moment-title">{moment.title}</h1>
              </div>
              <div className="detailed-descriptions">
                <p className="detailed-about">About your host</p> <br />
                <p className="detailed-paragraphs">
                  {moment.host_qualifications}
                </p>{" "}
                <br />
                <p className="detailed-about">What will we'll do</p> <br />
                <p className="detailed-paragraphs">{moment.what_we_will_do}</p>
              </div>
            </div>
          </div>
          <div className="date-price">{mappedDates}</div>
          <div />
        </div>
        <div className="detailed-reviews-box">
          <div className="detailed-reviews-box-wrapper">
            <span className="detailed-reviews-title">
              Reviews from people who took this experience{" "}
            </span>
            <div className="detailed-moment-wrapper">
              <div className="detailed-moment-wrapper-inside">
                <Reviews moment={moment} />
              </div>
            </div>
          </div>
        </div>
        <div className="box-over-map">
          <div className="map-box">
            <div className="map-box-wrapper">
              <h1>Where we'll be</h1>
              {moment.where_we_will_be}
            </div>
          </div>
          <Map city={moment.locale} />
        </div>
        <BelowFooter />
      </div>
    ) : (
      <img
        src="https://cdn-images-1.medium.com/max/1600/0*smsSMhaW2J5RgY8G.gif"
        className="loading-gif"
        width="300"
        alt=""
        style={{ filter: "contrast(200%)" }}
      />
    );
  }
}

export default withContext(DetailedMoments);

// <div className="date-price">
// <SingleDatePicker
//   date={this.state.date} // momentPropTypes.momentObj or null
//   onDateChange={date => this.setState({ availableDate: date._d })} // PropTypes.func.isRequired
//   focused={this.state.focused} // PropTypes.bool
//   onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
//   id="your_unique_id" // PropTypes.string.isRequired,
//   noBorder
// />
// {chooseDate.toDateString() === "Invalid Date" ? (
//   <div />
// ) : (
//   <div className="popup-box">
//     <p>{`${chooseDate.toDateString()}`}</p>
//     <p>
//       {moment.available_time_start}-{moment.available_time_end}
//     </p>
//     <p>${moment.price} per person</p>
//     {this.props.context.login ? (
//       <button className="choose-button">
//         <Link
//           to={{
//             pathname: "/checkout",
//             moment: { moment },
//             date: { sendDate }
//           }}
//           className="choose-button"
//         >
//           Choose
//         </Link>
//       </button>
//     ) : (
//       <span style={{ color: "red" }}>
//         please log in to select experience
//       </span>
//     )}
//   </div>
// )}
// </div>
