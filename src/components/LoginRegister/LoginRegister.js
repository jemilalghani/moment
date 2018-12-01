import React, { Component } from 'react';
import './LoginRegister.scss';

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
      phone: null,
      gender: '',
      about: '',
      locale: '',
      userPhoto: '',
      message: '',
      user: null
    }
  }

handleChange = (key, value) => {
    //console.log({[key]: value})
    this.setState({
        [key]: value
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
    this.setState({ user: response.data });
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
    this.setState({ user: response.data });
  }).catch(error => {
    this.setState({ message: 'Something went wrong: ' + this.getMessage(error) });
  });
};

  render() {
    return (
      <div>
        <div>username:<input type="text" onChange={this.handleChange}/></div>
        <div>first name:<input type="text" onChange={this.handleChange}/></div>
        <div>last name:<input type="text" onChange={this.handleChange}/></div>
        <div>password:<input type="text" onChange={this.handleChange}/></div>
        <div>email:<input type="text" onChange={this.handleChange}/></div>
        <div>phone number:<input type="number" onChange={this.handleChange}/></div>
        <div>gender:<input type="text" onChange={this.handleChange}/></div>
        <div>about:<input type="text" onChange={this.handleChange}/></div>
        <div>location:<input type="text" onChange={this.handleChange}/></div>
        <div>user photo:<input type="text" onChange={this.handleChange}/></div>
        <div><button onClick={this.register}>Register as new user</button></div>
      </div>
    )
  }
}

export default LoginRegister;