import React, { Component } from 'react';

export default class StepTwo extends Component {
    constructor(){
        super();
        this.state={
            hostQualifications: '',
            whatWeWillDo: '',
            whereWeWillBe: '',
            title: '',
            photoOne: '',
            photoTwo: '',
            tips: true,
        }
    }
    toggle(key){
        this.setState((prevState)=>{
            return {[key]: !prevState[key]}
        })
    }
    render() {
        return (
            <div className="steptwo-qualifications">
                <h2>Describe your qualifications</h2>
                <p>Your qualifications show why you’re the best person to host this experience. Take some time to tell guests why you’re passionate and knowledgeable about the subject.</p>
                <p onClick={()=>this.toggle('tips')}>Tips</p>
                <div className="tips" style={{visibility: this.state.tips ? 'visible' : 'hidden'}}>
                    <div className="tips-top">
                        <div className="whatworks">
                            <h3>What Works</h3>
                            <ul>
                                <li>Highlighting credentials that make you uniquely suited to host this activity</li>
                                <li>Mentioning how many years you have been practicing the activity</li>
                                <li>Telling people why you’re passionate about hosting this activity</li>
                            </ul>
                        </div>
                        <div className="whatdoesntwork">
                            <h3>What doesn't Work</h3>
                            <ul>
                                <li>Being a novice, or just learning about the activity. Guests are looking for experts</li>
                            </ul>
                        </div>
                    </div>
                    <div className='tips-down'>

                    </div>
                </div>
            </div>
        );
    }
}