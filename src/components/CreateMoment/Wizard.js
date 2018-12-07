import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import withContext from '../ContextApi/Context_HOC';
import './Wizard.scss';
import WizardOne from './WizardOne';
import WizardTwo from './WizardTwo';
import WizardThree from './WizardThree';
import WizardFour from './WizardFour';
import WizardFive from './WizardFive';
import WizardSix from './WizardSix';
import WizardSeven from './WizardSeven';
import WizardEight from './WizardEight';
import WizardNine from './WizardNine';
import WizardTen from './WizardTen';
import WizardEleven from './WizardEleven';
import WizardTwelve from './WizardTwelve';
import WizardEnd from './WizardEnd';
import Axios from 'axios';

class Wizard extends Component {
    constructor(){
        super();
        this.state={
            pageNumber: 0,
        };
        this.postToDatabase = this.postToDatabase.bind(this);
    }
    async componentDidMount(){
        const user = await Axios.get('/api/sessions');
        if( user.data){
            this.props.context.updateInfo('userId', user.data.user.id);
        } else {
            alert('Please login')
        }
    }
    increment(e){
        e.preventDefault();
        let pageNumber = this.state.pageNumber;
        this.setState({pageNumber: pageNumber +1})
    }
    decrement(e){
        e.preventDefault();
        let pageNumber = this.state.pageNumber;
        this.setState({pageNumber: pageNumber-1})
    }
    duration(){
        if(this.props.context.availableEndTime && this.props.context.availableStartTime){
            let a = parseInt(this.props.context.availableStartTime.split(':').join(''))
            let b = parseInt(this.props.context.availableEndTime.split(':').join(''))
            let duration = Math.abs(b-a);
            let value = duration.toString().charAt(0)
            if(duration.toString().charAt(1)){
                let answer = value + '.5'
                this.props.context.updateInfo('duration', answer)
            } else {
                this.props.context.updateInfo('duration', value)
            }
            this.setState({review: true})
        }
    }
    postToDatabase(){
        const { title, selectedCategory, duration, price, locale, hostQualification, streetAddress, city, state, zipcode, whatWeWillDo, whereWeWillBe, availableStartTime,availableEndTime, photoOne, photoTwo, availableDate, groupSizeLimit, userId} = this.props.context;
        let meetingLocation = streetAddress +", "+ city +", "+ state +", "+ zipcode;
        Axios.post('/api/moment/admin', {
            title,
            category: selectedCategory,
            duration,
            price,
            locale,
            hostQualification,
            meetingLocation,
            whatWeWillDo,
            whereWeWillBe,
            availableStartTime,
            availableEndTime,
            deleted : false,
            groupSize: groupSizeLimit,
            highlight: true,
            photoOne,
            photoTwo,
            availableDate: availableDate[0],
            userId
        }).then(()=>{
            this.setState({uploaded: true})
        }).catch(()=>{
            this.setState({uploaded: false})
        })
    }
    render() {
        let array = [<WizardOne />, <WizardTwo/>, <WizardThree/>, <WizardFour/>, <WizardFive/>, <WizardSix/>, <WizardSeven/>, <WizardEight/>, <WizardNine/>, <WizardTen/>, <WizardEleven/>, <WizardTwelve/>, <WizardEnd post={this.postToDatabase}/>]
        return (
            <div className="wizard">
                <form onSubmit={(e)=>this.increment(e)}>
                    {array[this.state.pageNumber]}
                    {this.state.pageNumber === 0 ? <Link to='/'><button>Escape</button></Link> 
                    : <button onClick={(e)=>this.decrement(e)}>Previous</button>}
                    {this.state.pageNumber === 11? <button onClick={()=>this.duration()}>Review</button> : <input type="submit" value={this.state.review ? "Finialize" : "next"}/>}
                </form>
            </div>
        );
    }
}
export default withContext(Wizard);