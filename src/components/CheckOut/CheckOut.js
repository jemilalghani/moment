import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import "./CheckOut.scss";
import withContext from "../ContextApi/Context_HOC";
import get from "lodash/get";
import logo from "../../Image/Moment-M-Logo-Purple.svg";

class CheckOut extends Component {
  constructor() {
    super();
    this.state = {
      guests: 1,
      total: 95,
      userId: null,
      user: [],
      moment: [],
      date: "",
      email: "",
      dateId: ""
    };
  }

  onToken = stripeToken => {
    console.log("onToken", stripeToken);
    // let expId = this.state.moment.id;
    let dateID = this.state.dateId;
    //let dateId =
    //let selectedDate = this.props.location.date.sendDate
    axios
      .post("/api/charge", {
        method: "POST",
        body: stripeToken,
        amount: this.state.total * 100
      })
      .then(response => {
        console.log("succcccccessss", response.data);
        axios.post("/api/orderCheckout", {
          date_id: dateID,
          prof_id: this.state.userId,
          group_size: this.state.guests
        });
        axios
          .post("/api/confirmation", {
            body: stripeToken,
            moment: this.state.moment
          })
          .then(() => {
            alert("sent");
          });
        this.props.history.push({
          pathname: "/thankyou"
        });
      });
  };

  handleGuestNumber(e) {
    this.setState({ guests: e.target.value });
  }

  setTotal() {
    setTimeout(() => {
      this.setState({
        total: this.state.moment.price * this.state.guests
      });
    }, 500);
  }

  ////////verify email/////////

  handleChange = val => {
    this.setState({ email: val });
  };

  handleClick = () => {
    const { email } = this.state;
    axios.post("/api/email", { email }).then(res => {
      alert("sent email");
    });
  };

  /////////////////////

  componentDidMount() {
    axios.get("/api/sessions").then(res => {
      this.setState({ user: res.data.user });
      console.log("profile data here?", res);
      if (res.data) {
        this.setState({ userId: res.data.user.id });
      } else {
        this.props.history.push("/");
      }
    });
    const moment =
      get(this.props.location, "moment.moment") ||
      JSON.parse(localStorage.getItem("moment"));
    localStorage.setItem("moment", JSON.stringify(moment));

    const date =
      get(this.props.location, "date") ||
      JSON.parse(localStorage.getItem("date"));

    //localStorage.setItem("date", JSON.stringify(date));

    this.setState({
      moment: moment,
      date: date,
      dateId: this.props.history.location.dateId,
      group_size_remaining: this.props.history.location.sendGroupRemaining
    });
  }

  render() {
    //   console.log('checkouttuttt passed props', this.props.location)
    //   console.log('this is the totatttal', this.state.total)
    //   console.log('context in checkout', this.props.context.login)
    // console.log("this.props.history.location.", this.props.history.location);
    // console.log("user id in checkout", this.state.user);
    // console.log("this props location", this.props.location);
    const date =
      get(this.props.location, "date") ||
      JSON.parse(localStorage.getItem("date"));
    const moment =
      get(this.props.location, "moment.moment") ||
      JSON.parse(localStorage.getItem("moment"));
    // console.log("formate date", this.state.date);
    // console.log("moment in render", this.state.moment);
    // console.log("props in checkout", this.props);
    // console.log("trying to get a id", this.state.dateId);
    // console.log("get the dateID", this.state.dateId && this.state.dateId);

    // console.log("moment", moment);
    const total = this.state.moment.price * this.state.guests;
    // let groupSizeLimit = this.props.location.moment.moment.group_size_limit;
    let array = [];
    for (let i = 0; i < this.state.group_size_remaining; i++) {
      array.push(i);
    }
    let options = array.map(el => {
      return <option value={el + 1}>{el + 1}</option>;
    });
    return (
      <div className="checkout-container">
        <div className="checkout-wrapper">
          <div className="checkout-right">
            <div className="checkout-review">
              <h2 className="checkout-review-title">Review and pay</h2>
              <p>
                You can add more friends to this experience and confirm your
                reservation.
              </p>
              <p>Guests ages 7 and up can attend.</p>
            </div>
            <div className="checkout-whoscoming">
              <h3>Who's coming?</h3>
              <h5>Number of guests</h5>
              <select
                className="select-guest"
                name="guests"
                onChange={e => {
                  this.handleGuestNumber(e);
                  this.setTotal();
                }}
              >
                {options}
              </select>
            </div>
            <div className="checkout-phone">
              <div className="verify-phone">
                <h3>Verify your email address</h3>
                <p>
                  This is so your host can contact you during your trip, and so
                  Moment knows how to reach you.
                </p>
              </div>

              <h4>E-mail</h4>
              <div className="email-box">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input-phone"
                  onChange={e => this.handleChange(e.target.value)}
                />
                <i
                  class="fas fa-paper-plane"
                  onClick={() => this.handleClick()}
                />
              </div>
            </div>
            <div className="checkout-stripe">
              <p>
                By confirming this booking, you agree to the Guest Release and
                Waiver, the Cancellation Policy, and the Guest Refund Policy.
              </p>
              {this.state.total ? (
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_LjNm06RplXdJCIdfZJ7f9gTV"
                  amount={total * 100}
                  label={`Pay $${total}.00`}
                  //email={this.state.user.email && this.state.user.email}
                />
              ) : (
                <div />
              )}
            </div>
          </div>
          {moment && (
            <div className="checkout-left">
              <div className="checkout-left-wrapper">
                <div className="checkout-title-host">
                  <div className="checkout-blockone">
                    <h6 className="checkout-moment-title">{moment.title}</h6>
                    <p>{moment.duration} hours</p>
                  </div>
                  <div className="checkout-title-img">
                    <img
                      className="checkout-img"
                      src={moment.photos[0]}
                      alt=""
                    />
                  </div>
                </div>
                <div className="checkout-selected-datetime">
                  <h4>{`${date}`}</h4>
                  <p>
                    {moment.available_time_start}-{moment.available_time_end}
                  </p>
                </div>
                <div className="checkout-price-calculation">
                  <p>
                    ${moment.price} X {this.state.guests}
                    {this.state.guests > 1 ? <p>guests</p> : <p>guest</p>}
                  </p>
                  <p className="total">${total}.00</p>
                </div>
                <div className="checkout-total">
                  <p>Total (USD) </p>
                  <p className="total">${total}.00</p>
                </div>
                <div className="cancellation-policy">
                  <p>Cancellation Policy</p>
                  <p>
                    Get a full refund if you cancel within 24 hours of purchase.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="checkout-footer-container">
          <div className="checkout-footer-wrapper">
            <img className="checkout-footer-logo" src={logo} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(CheckOut);
export const TestCheckOut = CheckOut;
