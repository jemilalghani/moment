import React, { Component } from 'react';
import './LoginRegister.scss';
import withContext from '../ContextApi/Context_HOC';
import {Link} from 'react-router-dom';

import axios from 'axios';

class LoginRegister extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      phone: 0,
      gender: '',
      about: '',
      locale: '',
      userPhoto: '',
      message: '',
      user: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(key, e){
    //console.log({[key]: value})
    this.setState({
        [key]: e.target.value
    })
}

register = () => {
  this.setState({ message: null });
  const {username, firstName, lastName, password, email, phone, gender, about, locale, userPhoto} = this.state;
  axios.post('/api/register', {
    username,
    password,
    firstName,
    lastName,
    email,
    phone,
    gender,
    about,
    locale,
    userPhoto
  })
  .then(response => {
    this.setState({ user: true });
  }).catch(error => {
    this.setState({ message: 'Something went wrong: '});
  });
};

login = () => {
  this.setState({ message: null });
  const {username, password} = this.state;
  axios.post('/api/login', {
    username,
    password
  }).then(response => {
    this.setState({ user: true });
    this.props.context.updateInfo('login', true);
    this.props.context.updateInfo('user', response.data);
  }).catch(error => {
    this.setState({ message: 'Something went wrong: '});
  });
};

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
    return (
      <div>
        <div>username:<input type="text" onChange={(e)=>this.handleChange('username',e)}/></div>
        <div>first name:<input type="text" onChange={(e)=>this.handleChange('firstName', e)}/></div>
        <div>last name:<input type="text" onChange={(e)=>this.handleChange('lastName', e)}/></div>
        <div>password:<input type="text" onChange={(e)=>this.handleChange('password', e)}/></div>
        <div>email:<input type="text" onChange={(e)=>this.handleChange('email', e)}/></div>
        <div>phone number:<input type="number" onChange={(e)=>this.handleChange('phone', e)}/></div>
        <div>gender:<input type="text" onChange={(e)=>this.handleChange('gender', e)}/></div>
        <div>about:<input type="text" onChange={(e)=>this.handleChange('about', e)}/></div>
        <div>location:<input type="text" onChange={(e)=>this.handleChange('locale', e)}/></div>
        <div>user photo:<input type="text" onChange={(e)=>this.handleChange('userPhoto', e)}/></div>
        <div><button onClick={this.register}>Register as new user</button></div>
        

        <div>username:<input type="text" onChange={(e)=>this.handleChange('username',e)}/></div>
        <div>password:<input type="text" onChange={(e)=>this.handleChange('password', e)}/></div>
        <div><Link to="/userprofile"><button onClick={this.login}>Login</button></Link></div>
        <div><button onClick={this.logout}>logout</button></div>
        {this.props.context.user.user && this.props.context.user.user.user_name}

      </div>
    )
  }
}

export default withContext(LoginRegister);