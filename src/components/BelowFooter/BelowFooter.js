import React, { Component } from "react";
import "./BelowFooter.scss";
import logo from "../../Image/Moment-M-Logo-Purple.svg";

class BelowFooter extends Component {
  render() {
    return (
      <div>
        <div className="checkout-footer-container">
          <div className="checkout-footer-wrapper">
            <img className="checkout-footer-logo" src={logo} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default BelowFooter;
