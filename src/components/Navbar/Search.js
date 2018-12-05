import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      momentArr: [],
      displayArr: [],
      searchField: '',
      searchArr: []
    }
  }
  componentDidMount = () => {
    this.getAllMoments()
  }
  getAllMoments = () => {
    axios.get('/api/moment').then(res => {
      console.log('alllllll moments',res.data.moment)
      this.setState({momentArr: res.data.moment})
    })
  }
  seeState = () => {
    console.log('this.state', this.state)
    console.log('this.state.momentArr', this.state.momentArr)
  }
  search = () => {

  }
  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }

  render() {
    // const { momentArr } = this.state;
    // console.log('momentArr', momentArr)
    return (
      <div>
          <div><input type="text" placeholder="Experiences"/></div>
          <button onChange={this.handleChange} onClick={this.search}>Search</button>
          <button onClick={this.seeState}>See Search State</button>
      </div>
    )
  }
}
