import React, { Component } from 'react';
import withContext from '../ContextApi/Context_HOC';

class WizardFour extends Component {
    constructor(){
        super();
        this.state={
            toggle: false,
        }
    }
    toggle(key){
        this.setState((prevState)=>{
            return {[key]: !prevState[key]}
        })
    }
    render() {
        return (
            <div className="wizard-whatWeWillDo">
                <h2>Describe what you’ll do</h2>
                <p>Your activity description is a chance to inspire guests to take your experience. Talk about the details of the itinerary you have planned for them.</p>
                <p onClick={()=>this.toggle('tips')}>Tips</p>
                <div className="wizard-tips" style={{display: this.state.tips ? 'inline' : 'none'}}>
                    <div className="tips-top">
                        <div className="tips-whatworks">
                            <h4>What Works</h4>
                            <ul>
                                <li>Being specific about what guests will do on your activity</li>
                                <li>Planning a detailed itinerary so that guests know what to expect</li>
                                <li>Giving guests special access to something they can’t find on their own</li>
                            </ul>
                        </div>
                        <div className="tips-whatdoesntwork">
                            <h4>What doesn't Work</h4>
                            <ul>
                                <li>Making a loose itinerary with vague information</li>
                                <li>Generic activities guests can easily do on their own</li>
                            </ul>
                        </div>
                    </div>
                    <div className='tips-down'>
                        <h4>Example</h4>
                        <p>You’ll jump right into the action of our weekly basketball coaching clinics, where we do drills and plays for two hours with 60 kids. There are only three of us for all of the kids (girls and boys ages 10-17), so you’ll be helping us with the drills and coaching. Be prepared to be active, sweat, and definitely be on your toes while having fun with the kids.</p>
                    </div>
                </div>
                <h3>Describe your experience from beginning to end, in the order you’ll do the activities</h3>
                <textarea cols="80" rows="10" value ={this.props.context.whatWeWillDo} onChange={(e)=>this.props.context.updateInfo('whatWeWillDo', e.target.value)} style={{resize: 'vertical'}} required ></textarea>
            </div>
        );
    }
}
export default withContext(WizardFour);