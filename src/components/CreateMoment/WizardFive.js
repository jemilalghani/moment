import React, { Component } from 'react';
import withContext from '../ContextApi/Context_HOC';

class WizardFive extends Component {
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
            <div className="wizard-whereWeWillBe">
                <h2>Describe each place you’ll visit</h2>
                <p>If your experience includes multiple stops, describe every place you’ll stop to explore. You don’t need to include the address here, guests will get an email with details later. </p>
                <p onClick={()=>this.toggle('tips')}>Tips</p>
                <div className="wizard-tips" style={{display: this.state.tips ? 'inline' : 'none'}}>
                    <div className="tips-top">
                        <div className="tips-whatworks">
                            <h4>What Works</h4>
                            <ul>
                                <li>Mentioning places you’ll visit that are meaningful to you</li>
                                <li>Giving guests access to special spaces only locals know about</li>
                            </ul>
                        </div>
                        <div className="tips-whatdoesntwork">
                            <h4>What doesn't Work</h4>
                            <ul>
                                <li>Making it a common activity at a popular location</li>
                                <li>Getting too detailed about locations. Being brief will give guests the idea</li>
                            </ul>
                        </div>
                    </div>
                    <div className='tips-down'>
                        <h4>Example</h4>
                        <p>We will conduct our workshop in our tiny house on wheels, a school bus we converted into a beautiful home. Everything in the house is sustainable. It’s a special place to see and experience.</p>
                    </div>
                </div>
                <h3>Describe each place you’ll visit on the experience</h3>
                <textarea cols="80" rows="10" value ={this.props.context.whereWeWillBe} onChange={(e)=>this.props.context.updateInfo('whereWeWillBe',e.target.value)} style={{resize: 'vertical'}} required></textarea>
            </div>
        );
    }
}
export default withContext(WizardFive);