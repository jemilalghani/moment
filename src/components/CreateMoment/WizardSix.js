import React, { Component } from 'react';
import withContext from '../ContextApi/Context_HOC';
import pointer from '../../Image/down-arrow.png';

class WizardSix extends Component {
    constructor(){
        super();
        this.state={
            toggle: true,
        }
    }
    toggle(key){
        this.setState((prevState)=>{
            return {[key]: !prevState[key]}
        })
    }
    render() {
        return (
            <div className="wizard-title">
                <h2>Give your experience a title</h2>
                <p>Tell guests what’s different about your experience and help them imagine what they’ll be doing. Great titles highlight your expertise and access to things or places guests can’t find on their own.</p>
                <div className="wizard-tips-pointer" onClick={()=>this.toggle('tips')}>
                    <p className="tips">Tips</p>
                    <img src={pointer} alt='' className={this.state.tips ? "tips-pointer-up" : "tips-pointer"}/>
                </div>
                <div className="wizard-tips" style={{display: this.state.tips ? 'inline-block' : 'none'}}>
                    <div className="tips-top">
                        <div className="tips-whatworks">
                            <h4>What Works</h4>
                            <ul>
                                <li>Correct spelling and grammar</li>
                                <li>Active verbs</li>
                                <li>What makes your experience unique</li>
                            </ul>
                        </div>
                        <div className="tips-whatdoesntwork">
                            <h4>What doesn't Work</h4>
                            <ul>
                                <li>Local slang</li>
                                <li>ALL CAPS and punctuation</li>
                                <li>Symbols or emojis</li>
                            </ul>
                        </div>
                    </div>
                    <div className='tips-down'>
                        <h4>Example</h4>
                        <p>Songwriting with a platinum producer</p>

                    </div>
                </div>
                <h3>What is the title of your experience?</h3>
                <input className="wizard-input" type="text" value={this.props.context.title} onChange={(e)=>this.props.context.updateInfo('title',e.target.value)} required></input>
            </div>
        );
    }
}
export default withContext(WizardSix);