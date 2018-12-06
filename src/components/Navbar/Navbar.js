import React, { Component } from 'react';
import './Navbar.scss';
import withContext from '../ContextApi/Context_HOC';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from './Search'

class Navbar extends Component {
  constructor(){
    super();
    this.state={
      dropdown: false,
    }
  }
  componentDidMount(){
    axios.get('/api/sessions').then((user)=>{
      this.setState({user: user.data})
    })
  }
  toggle = (key) =>{this.setState((prevState)=>{
    return{[key]: !prevState[key]}
  })}
  logout = () => {
    axios.post('/api/logout').then(response => {
      this.props.context.updateInfo('login', false);
      this.props.context.updateInfo('user', {});
      this.setState({ user: false });
    }).catch(error => {
      this.setState({ message: 'Something went wrong: '});
    });
  };
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
            this.props.context.login || this.state.user?
            <div className="navbar-right">
              {
                this.props.context.user.user ?
                <div className="navbar-loggedin">
                  <Link to='/host/create'><div>Host</div></Link>
                  <Link to="/trips"><div><p>Trips</p></div></Link>
                  <img src={this.props.context.user.user.prof_photo_url} className="nav-profile-img" onClick={()=>this.toggle('dropdown')}/>
                </div> 
                :
                this.state.user.user && 
                <div className="navbar-loggedin">
                  <Link to='/host/create'><div>Host</div></Link>
                  <Link to="/trips"><div><p>Trips</p></div></Link>
                  <img src={this.state.user.user.prof_photo_url} className="nav-profile-img" onClick={()=>this.toggle('dropdown')}/>
                </div> 
              }
              <div className={this.state.dropdown ? 'navbar-dropdown-closed' : 'navbar-dropdown'}>
                <ul>
                  <Link to= '/userprofile' ><li>Edit Profile</li></Link>
                  <li><button onClick={this.logout}>logout</button></li>
                </ul>
              </div>
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
