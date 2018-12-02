import React, { Component } from 'react';
import './Navbar.scss';
import withContext from '../ContextApi/Context_HOC';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div>
          <div>Logo</div>
          <div><input type="text" placeholder="Experiences"/></div>
          <div>Log in</div>
        </div>
      </div>
    )
  }
}


export default withContext(Navbar);
