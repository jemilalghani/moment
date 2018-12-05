import React, { Component } from 'react';
import './Navbar.scss';
import withContext from '../ContextApi/Context_HOC';
import { Link } from 'react-router-dom';
import Search from './Search'

class Navbar extends Component {
  render() {
    console.log('from contextttttt',this.props.context.user.user)
    return (
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <div>Logo</div>
            <Search/>
          </div>
          {
          this.props.context.login ?
          <div className="navbar-right">
             {this.props.context.user.user &&
              <div className="navbar-loggedin">
                <div><p>Host</p></div>
                <div><p>Trips</p></div>
                <img src={this.props.context.user.user.prof_photo_url} className="nav-profile-img"/>
              </div>
            }
          </div>
          :
          <div className="navbar-right"><Link to="/login">Log in</Link></div>
          }
        </div>
      </div>
    )
  }
}


export default withContext(Navbar);
