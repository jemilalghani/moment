import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="foot-square">
            <p className="foot-title">Moment</p>
            <div className="foot-links">
                <Link className="foot-items" to="#">Help</Link>
                <Link className="foot-items" to="#">Policies</Link>
                <Link className="foot-items" to="#">Terms</Link>
                <Link className="foot-items" to="#">Privacy</Link>
            </div>
          </div>
          <div className="foot-square">
            <p className="foot-title">Discovery</p>
            <div className="foot-links">
                <Link className="foot-items" to="#">Trust & Safety</Link>
                <Link className="foot-items" to="#">Site Map</Link>
            </div>
          </div>
          <div className="foot-square">
            <p className="foot-title">Hosting</p>
            <div className="foot-links">
                <Link className="foot-items" to="#">Why Host</Link>
                <Link className="foot-items" to="#">Responsible Hosting</Link>
                <Link className="foot-items" to="#">Open Homes</Link>
            </div>
          </div>
          <div className="foot-square">
            <p className="foot-title">Extras</p>
            <div className="foot-links">
                <Link className="foot-items" to="#">Terms</Link>
                <Link className="foot-items" to="#">Privacy</Link>
                <Link className="foot-items" to="#">Site Map</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
