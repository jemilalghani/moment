import React, { Component } from 'react';
import withContext from '../ContextApi/Context_HOC';

class WizardThree extends Component {
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
            <div className="wizard-qualifications">
                    <h2>Describe your qualifications</h2>
                    <p>Your qualifications show why you’re the best person to host this experience. Take some time to tell guests why you’re passionate and knowledgeable about the subject.</p>
                    <p onClick={()=>this.toggle('tips')}>Tips</p>
                    <div className="wizard-tips" style={{display: this.state.tips ? 'inline' : 'none'}}>
                        <div className="tips-top">
                            <div className="tips-whatworks">
                                <h4>What Works</h4>
                                <ul>
                                    <li>Highlighting credentials that make you uniquely suited to host this activity</li>
                                    <li>Mentioning how many years you have been practicing the activity</li>
                                    <li>Telling people why you’re passionate about hosting this activity</li>
                                </ul>
                            </div>
                            <div className="tips-whatdoesntwork">
                                <h4>What doesn't Work</h4>
                                <ul>
                                    <li>Being a novice, or just learning about the activity. Guests are looking for experts</li>
                                </ul>
                            </div>
                        </div>
                        <div className='tips-down'>
                            <h4>Example</h4>
                            <p>I’m co-founder of the Amazing Brewing Company and one of seven certified cicerones (beer sommeliers) in Korea. I’ve lived in Asia, Europe, and the US and tasted beer at over 100 breweries worldwide.</p>
                        </div>
                    </div>
                    <h3>Describe yourself and your qualifications to guests</h3>
                    <textarea cols="80" rows="10" value={this.props.context.hostQualification} onChange={(e)=>this.props.context.updateInfo('hostQualification',e.target.value)} style={{resize: 'vertical'}} required></textarea>
                    <p>Do you have a social media following or website related to this interest or hobby? Add in links to your Instagram, Twitter, Facebook, website, blog, or articles written by you or about you.</p>
                    <button>Add a Link</button>
            </div>
        );
    }
}
export default withContext(WizardThree);