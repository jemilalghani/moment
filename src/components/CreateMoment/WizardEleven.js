import React, { Component } from 'react';
import withContext from '../ContextApi/Context_HOC';
import { SingleDatePicker } from 'react-dates';
import './WizardEleven.scss';

let array = [];
class WizardEleven extends Component {
    constructor(){
        super();
        this.state={
            startDate: null,
            endDate: null,
            focusedInput: null,
        }
    }
    dateSelection(e){
        let values = `${e._d}`.split(' ').slice(0,4).join(" ")
        array.push(values) 
        // this.setState({availableDate: array})
        this.props.context.updateInfo('availableDate', array);
    }
    deleteFromDate(index){
        this.props.context.availableDate.splice(index, 1);
        let newArray = this.props.context.availableDate
        // this.setState({availableDate: newArray});
        this.props.context.updateInfo('availableDate', newArray);
    }
    render() {
        // let datesPicks = this.state.availableDate && this.state.availableDate.map((el, key)=>{
        //     return <div>
        //                 <p>{`${el}`}</p>
        //                 <div onClick={()=>this.deleteFromDate(key)}>X</div>
        //             </div>
            
        // })
        let datesPicks = this.props.context.availableDate && this.props.context.availableDate.map((el, key)=>{
            return <div className="wizard-date">
                        <p>{`${el}`}</p>
                        <div onClick={()=>this.deleteFromDate(key)}>X</div>
                    </div>
            
        })
        return (
            <div>
                <h2>What dates are you available to host your experience</h2>
                <p>Pick the exact calendar dates you’d like to host.</p>
                <SingleDatePicker
                date={this.state.date} // momentPropTypes.momentObj or null
                onDateChange={(e) => this.dateSelection(e)} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
                />
                {datesPicks}
            </div>
        );
    }
}
export default withContext(WizardEleven);