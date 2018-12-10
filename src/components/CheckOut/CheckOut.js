import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import "./CheckOut.scss";
import withContext from "../ContextApi/Context_HOC";
import get from "lodash/get";

class CheckOut extends Component {
  constructor() {
    super();
    this.state = {
      guests: 1,
      total: 95,
      user: null,
      moment: [],
      date: ""
    };
  }

  onToken = stripeToken => {
    console.log("onToken", stripeToken);
    let expId = this.props.location.moment.moment.id;
    //let selectedDate = this.props.location.date.sendDate
    axios
      .post("/api/charge", {
        method: "POST",
        body: stripeToken,
        amount: this.state.total * 100
      })
      .then(response => {
        console.log("succcccccessss", response.data);
        axios
          .post("/api/orderCheckout", {
            exp_id: expId,
            prof_id: this.state.user,
            group_size: this.state.guests
          })
          .then(() => {
            alert("sent");
          });
      });
  };

  handleGuestNumber(e) {
    this.setState({ guests: e.target.value });
  }

  setTotal() {
    setTimeout(() => {
      this.setState({
        total: this.props.location.moment.moment.price * this.state.guests
      });
    }, 500);
  }

  componentDidMount() {
    axios.get("/api/sessions").then(res => {
      console.log("profile data here?", res);
      if (res.data) {
        this.setState({ user: res.data.user.id });
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

    localStorage.setItem("date", JSON.stringify(date));

    this.setState({
      moment: moment,
      date: date
    });
  }

  render() {
    //   console.log('checkouttuttt passed props', this.props.location)
    //   console.log('this is the totatttal', this.state.total)
    //   console.log('context in checkout', this.props.context.login)
    // console.log("moment in moment", this.state.moment);
    // console.log("user id in checkout", this.state.user);
    // console.log("this props location", this.props.location);
    const date =
      get(this.props.location, "date") ||
      JSON.parse(localStorage.getItem("date"));
    const moment =
      get(this.props.location, "moment.moment") ||
      JSON.parse(localStorage.getItem("moment"));
    console.log("date in render", this.state.date);
    console.log("moment in render", this.state.moment);
    // console.log("moment", moment);
    const total = this.state.moment.price * this.state.guests;
    // let groupSizeLimit = this.props.location.moment.moment.group_size_limit;
    let array = [];
    for (let i = 0; i < this.state.moment.group_size_limit; i++) {
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
              <h2>Review and pay</h2>
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
              <h5>Verify your phone number</h5>
              <p>
                This is so your host can contact you during your trip, and so
                Airbnb knows how to reach you.
              </p>
              <input type="text" placeholder="enter phone number" />
              <button>verify</button>
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
                    <p>{moment.duration} experience</p>
                    <p>Hosted by Grace</p>
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
                  <h6>{`${date.sendDate}`}</h6>
                  <p>
                    {moment.available_time_start}-{moment.available_time_end}
                  </p>
                </div>
                <div className="checkout-price-calculation">
                  <p>
                    ${moment.price} X {this.state.guests} guests
                  </p>
                  <p className="total">${total}</p>
                </div>
                <div className="checkout-total">
                  <p>Total (USD) </p>
                  <p className="total">${total}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withContext(CheckOut);
