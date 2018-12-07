import React, { Component } from 'react';
import './UserProfile.scss';
import Footer from '../Footer/Footer';

import withContext from '../ContextApi/Context_HOC';

class UserProfile extends Component {
    constructor(){
        super();
        this.state = {
            toggle: false
        }
    }
  render() {
    console.log('in user profile',this.props.context.user.user)
    const {user} = this.props.context.user;
  
    return (
      <div className="user-profile-container">
      { this.props.context.user.user ? 
        <div className="user-profile-wrapper">
            <div className="user-profile-img">
                <img className="user-img" src={user.prof_photo_url} alt=""/>
            </div>
            
            <div className="user-profile-right">
                <div className="user-profile-right-wrapper">
                    <div className="user-name-location">
                        <div className="user-name">
                            <h1 className="user-greeting">Hey, I'm {user.name_first}!</h1>
                        </div>
                        <div className="user-location">
                            <p className="location-date">
                            {
                                user.locale.charAt(0).toUpperCase() + user.locale.slice(1)
                            }  
                            {user.date_joined.slice(0,10)} </p>
                        </div>
                    </div>
                    <div className="user-profile-right-bottom">
                        <div className="user-about-me">
                            <p>{user.about}</p>
                        </div>
                    </div>
                </div>
                
            </div>  
        </div>
        :
        <img src="https://cdn-images-1.medium.com/max/1600/0*smsSMhaW2J5RgY8G.gif" width="300" alt=""/>
      }
        <Footer />
      </div>
    )
  }
}

export default withContext(UserProfile);
