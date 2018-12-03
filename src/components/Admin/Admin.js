import React, { Component } from 'react';
import './Admin.scss';

import axios from 'axios';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class Admin extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            category: '',
            duration: '',
            price: 0,
            locale: '',
            hostQualification: '',
            meetingLocation: '',
            whatWeWillDo: '',
            whereWeWillBe: '',
            availableStartTime: 0,
            availableEndTime: 0,
            deleted: false,
            locale_google: 0,
            highlight: false,
            photoOne: '',
            photoTwo: '',
            photoThree: '',
            availableDate: null
        }
 }

 handleChange(key, e){
    //console.log({[key]: value})
    this.setState({
        [key]: e.target.value
    })
}

sendHostData = () => {
    const {title, category, duration, price, locale, hostQualification, meetingLocation, whatWeWillDo,  whereWeWillBe, availableStartTime, availableEndTime, deleted, locale_google, highlight, photoOne, photoTwo, photoThree, availableDate} = this.state;
    axios.post('/api/moment/admin', {
        title, category, duration, price, locale, hostQualification, 
        meetingLocation, whatWeWillDo, whereWeWillBe, availableStartTime, 
        availableEndTime, deleted, locale_google, highlight, 
        photoOne, photoTwo, photoThree, availableDate
    }).then(response => {
        console.log('sent', response)
    })
}


  render() {
      //console.log("host qual",this.state.hostQualification)
      console.log('send the datttttteeee',this.state)
      console.log('dattteetetetetetetteet',this.state.availableDate)
    return (
      <div className="admin-input">
        title: <input type="text" onChange={(e)=>this.handleChange('title',e)}/>
        category: <input type="text" onChange={(e)=>this.handleChange('category',e)}/>
        duration: <input type="text" onChange={(e)=>this.handleChange('duration',e)}/>
        price: <input type="number" onChange={(e)=>this.handleChange('price',e)}/>
        location: <input type="text" onChange={(e)=>this.handleChange('locale',e)}/>
        host qualification: <textarea name="hostqualification" id="" cols="30" rows="10" onChange={(e)=>this.handleChange('hostQualification',e)}></textarea>
        meeting location: <input type="text" onChange={(e)=>this.handleChange('meetingLocation',e)}/>
        what we will do: <textarea name="whatwewilldo" id="" cols="30" rows="10" onChange={(e)=>this.handleChange('whatWeWillDo',e)}></textarea>
        where we wil be: <textarea name="wherewewillbe" id="" cols="30" rows="10" onChange={(e)=>this.handleChange('whereWeWillBe',e)}></textarea>
        photo One: <input type="text" onChange={(e)=>this.handleChange('photoOne',e)}/>
        photo Two: <input type="text" onChange={(e)=>this.handleChange('photoTwo',e)}/>
        photo Three: <input type="text" onChange={(e)=>this.handleChange('photoThree',e)}/>
        <div>date created:</div>
        <div>available time start: <input type="number" onChange={(e)=>this.handleChange('availableStartTime',e)}/></div>
        <div>available time end: <input type="number" onChange={(e)=>this.handleChange('availableEndTime',e)}/></div>
        <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState( {availableDate: date._d })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
        />
        <div><button onClick={this.sendHostData}>enter data</button></div>
      </div>
    )
  }
}

export default Admin;
