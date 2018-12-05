import React, { Component } from 'react';
import withContext from '../ContextApi/Context_HOC';
import Geocode from 'react-geocode';
import axios from 'axios';


class StepThree extends Component {
    constructor(){
        super();
        this.state={
            pageSeven: false,
            streetAddress: '',
            city: 'Phoenix',
            state: 'CA',
            zipcode: null,
            pageEight: false,
            groupSize: null, //not used yet
            pageNine: false,
            availableStartTime: null,
            availableEndTime: null,
            duration: null, //calc wrong
            price: null
        }
    }
    submit(){
        let address = this.state.streetAddress + ', ' + this.state.city+ ', ' +this.state.state+ ', ' +this.state.zipcode
        this.props.context.updateProfileInfo('availableStartTime', this.state.availableStartTime)
        this.props.context.updateProfileInfo('availableEndTime', this.state.availableEndTime)
        this.props.context.updateProfileInfo('duration', this.state.duration)
        this.props.context.updateProfileInfo('price', this.state.price)
        this.props.context.updateProfileInfo('meetinglocation', address)

    }
    geolocation(){
        
    }
    handleChange(key, e){
        this.setState({
            [key]: e.target.value
        })
    }
    toggle(key){
        this.setState((prevState)=>{
            return {[key]: !prevState[key]}
        })
    }
    duration(){
        if(this.state.availableStartTime && this.state.availableEndTime){
            let a = parseInt(this.state.availableStartTime.split(':').join(''))
            let b = parseInt(this.state.availableEndTime.split(':').join(''))
            console.log('a', a)
            console.log('b', b)
            let duration = Math.abs(b-a);
            let value = duration.toString().charAt(0)
            if(duration.toString().charAt(1)){
                let answer = value + '.5'
                // console.log(answer)
                this.setState({duration: answer})
            } else {
                // console.log(value)
                this.setState({duration: value})
            }
        } else {
            this.toggle('pageNine')
        }
    }
    render() {
        console.log(this.props.context)
        return (
            <div className="host-stepthree">

            {
                !this.state.pageSeven?
                <form className="stepthree-meetinglocation" onSubmit={()=>this.toggle('pageSeven')}>
                    <h2>Where should guests meet you?</h2>
                    <p>Tell guests exactly where to meet you at the start of the experience. Make sure the location is easy to find. The exact address won’t be shared until the guest’s reservation is confirmed.</p>
                    <h4>Provide an address</h4>
                    <h3>Street address</h3>
                    <input value={this.state.streetAddress} onChange={(e)=>this.handleChange('streetAddress',e)} required></input>
                    <div className='stepthree-citystate'>
                        <h3>City</h3>
                        <input type="text" value={this.state.city} onChange={(e)=>this.handleChange('city',e)} required></input>
                        <h3>State</h3>
                        <input type="text" value={this.state.state} onChange={(e)=>this.handleChange('state',e)} required></input>
                    </div>
                    <h3>ZIP Code</h3>
                    <input value={this.state.zipcode} onChange={(e)=>this.handleChange('zipcode',e)} required></input>
                    <h3>Location name</h3>
                    <input type="text" value={this.state.locationName} onChange={(e)=>this.handleChange('locationName',e)}></input>
                    {/* <button onClick={()=>this.geolocation}></button> */}
                    {/* <button onClick={()=>this.toggle('pageSeven')}>Next</button> */}
                    <input type="submit" value="Next"/>
                </form>
                :
                !this.state.pageEight?
                    <div className="stepthree-guestSize">
                        <h2>Maximum group size</h2>
                        <p>Think about the group size that works best for your experience. Should it be small and intimate? Is it fun with a large group? Please note that Airbnb has a one-guest minimum, which means that if only one person books your experience, you’ll still be expected to host.</p>
                        <form>
                            <select onChange={(e)=>this.handleChange('selectedGroupSize',e)}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                        </form>
                        <button onClick={()=>this.toggle('pageEight')}>Next</button>
                    </div>
                    :
                    !this.state.pageNine?
                        <form className="stepthree-price" onSubmit={()=>this.toggle('pageNine')}>
                            <h2>Set a price per guest</h2>
                            <p>The price of your experience is entirely up to you. Play with the calculator to see how much you’d earn depending on the number of guests.</p>
                            <div>
                                <input type="number" value={this.state.price} onChange={(e)=>this.handleChange('price', e)} required/>
                                <span>USD</span>
                            </div>
                            {/* <button onClick={()=>this.toggle('pageNine')}>Next</button> */}
                            <input type="submit" value="next"/>
                        </form>
                        :
                        <div className="stepthree-duration">
                            <h2>At what time will you typically host your experience?</h2> 
                            <p>Later on, you’ll pick the exact calendar dates you’d like to host. You’ll also be able to adjust times for each individual date.</p>
                                <select onChange={(e)=>this.handleChange('availableStartTime',e)} required>
                                    <option value="24:00:00">12:00 AM</option>
                                    <option value="24:30:00">12:30 AM</option>
                                    <option value="01:00:00">1:00 AM</option>
                                    <option value="01:30:00">1:30 AM</option>
                                    <option value="02:00:00">2:00 AM</option>
                                    <option value="02:30:00">2:30 AM</option>
                                    <option value="03:00:00">3:00 AM</option>
                                    <option value="03:30:00">3:30 AM</option>
                                    <option value="04:00:00">4:00 AM</option>
                                    <option value="04:30:00">4:30 AM</option>
                                    <option value="05:00:00">5:00 AM</option>
                                    <option value="05:30:00">5:30 AM</option>
                                    <option value="06:00:00">6:00 AM</option>
                                    <option value="06:30:00">6:30 AM</option>
                                    <option value="07:00:00">7:00 AM</option>
                                    <option value="07:30:00">7:30 AM</option>
                                    <option value="08:00:00">8:00 AM</option>
                                    <option value="08:30:00">8:30 AM</option>
                                    <option value="09:00:00">9:00 AM</option>
                                    <option value="09:30:00">9:30 AM</option>
                                    <option value="10:00:00">10:00 AM</option>
                                    <option value="10:30:00">10:30 AM</option>
                                    <option value="11:00:00">11:00 AM</option>
                                    <option value="11:30:00">11:30 AM</option>
                                    <option value="12:00:00">12:00 PM</option>
                                    <option value="12:30:00">12:30 PM</option>
                                    <option value="13:00:00">1:00 PM</option>
                                    <option value="13:30:00">1:30 PM</option>
                                    <option value="14:00:00">2:00 PM</option>
                                    <option value="14:30:00">2:30 PM</option>
                                    <option value="15:00:00">3:00 PM</option>
                                    <option value="15:30:00">3:30 PM</option>
                                    <option value="16:00:00">4:00 PM</option>
                                    <option value="16:30:00">4:30 PM</option>
                                    <option value="17:00:00">5:00 PM</option>
                                    <option value="17:30:00">5:30 PM</option>
                                    <option value="18:00:00">6:00 PM</option>
                                    <option value="18:30:00">6:30 PM</option>
                                    <option value="19:00:00">7:00 PM</option>
                                    <option value="19:30:00">7:30 PM</option>
                                    <option value="20:00:00">8:00 PM</option>
                                    <option value="20:30:00">8:30 PM</option>
                                    <option value="21:00:00">9:00 PM</option>
                                    <option value="21:30:00">9:30 PM</option>
                                    <option value="22:00:00">10:00 PM</option>
                                    <option value="22:30:00">10:30 PM</option>
                                    <option value="23:00:00">11:00 PM</option>
                                    <option value="23:30:00">11:30 PM</option>  
                                </select>
                                <p>to</p>
                                <select onChange={(e)=>this.handleChange('availableEndTime',e)} required>
                                    <option value="24:00:00">12:00 AM</option>
                                    <option value="24:30:00">12:30 AM</option>
                                    <option value="01:00:00">1:00 AM</option>
                                    <option value="01:30:00">1:30 AM</option>
                                    <option value="02:00:00">2:00 AM</option>
                                    <option value="02:30:00">2:30 AM</option>
                                    <option value="03:00:00">3:00 AM</option>
                                    <option value="03:30:00">3:30 AM</option>
                                    <option value="04:00:00">4:00 AM</option>
                                    <option value="04:30:00">4:30 AM</option>
                                    <option value="05:00:00">5:00 AM</option>
                                    <option value="05:30:00">5:30 AM</option>
                                    <option value="06:00:00">6:00 AM</option>
                                    <option value="06:30:00">6:30 AM</option>
                                    <option value="07:00:00">7:00 AM</option>
                                    <option value="07:30:00">7:30 AM</option>
                                    <option value="08:00:00">8:00 AM</option>
                                    <option value="08:30:00">8:30 AM</option>
                                    <option value="09:00:00">9:00 AM</option>
                                    <option value="09:30:00">9:30 AM</option>
                                    <option value="10:00:00">10:00 AM</option>
                                    <option value="10:30:00">10:30 AM</option>
                                    <option value="11:00:00">11:00 AM</option>
                                    <option value="11:30:00">11:30 AM</option>
                                    <option value="12:00:00">12:00 PM</option>
                                    <option value="12:30:00">12:30 PM</option>
                                    <option value="13:00:00">1:00 PM</option>
                                    <option value="13:30:00">1:30 PM</option>
                                    <option value="14:00:00">2:00 PM</option>
                                    <option value="14:30:00">2:30 PM</option>
                                    <option value="15:00:00">3:00 PM</option>
                                    <option value="15:30:00">3:30 PM</option>
                                    <option value="16:00:00">4:00 PM</option>
                                    <option value="16:30:00">4:30 PM</option>
                                    <option value="17:00:00">5:00 PM</option>
                                    <option value="17:30:00">5:30 PM</option>
                                    <option value="18:00:00">6:00 PM</option>
                                    <option value="18:30:00">6:30 PM</option>
                                    <option value="19:00:00">7:00 PM</option>
                                    <option value="19:30:00">7:30 PM</option>
                                    <option value="20:00:00">8:00 PM</option>
                                    <option value="20:30:00">8:30 PM</option>
                                    <option value="21:00:00">9:00 PM</option>
                                    <option value="21:30:00">9:30 PM</option>
                                    <option value="22:00:00">10:00 PM</option>
                                    <option value="22:30:00">10:30 PM</option>
                                    <option value="23:00:00">11:00 PM</option>
                                    <option value="23:30:00">11:30 PM</option>  
                                </select>
                            {this.state.duration? <button onClick={()=>this.submit()}>Finalize</button> : <button onClick={()=>{this.duration()}}>Submit</button>}
                        </div>
            }
            </div>
        );
    }
}
export default withContext(StepThree);