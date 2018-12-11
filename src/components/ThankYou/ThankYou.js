import React, { Component } from "react";
import "./ThankYou.scss";

class ThankYou extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="thankyou-container">
        <div className="thankyou-wrapper">
          <h1>Thank You</h1>
          <h3>Your order was completed successfully.</h3>
          <h4>
            An email receipt including the details about your order has been
            sent to the email address provided. Please keep it for your records.
          </h4>
        </div>
      </div>
    );
  }
}

export default ThankYou;
