import React, { Component } from 'react';
import withContext from '../ContextApi/Context_HOC';
import Cloudinary from '../Cloudinary/Cloudinary';
import pointer from '../../Image/down-arrow.png'

class WizardSeven extends Component {
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
            <div className="steptwo-photo">
                <h2>Add photos to your experience</h2>
                <p>These images will be at the top of your experience page, so try uploading high quality photos of your experience to make a great first impression.</p>
                <div className="wizard-tips-pointer" onClick={()=>this.toggle('tips')}>
                    <p className="tips">Tips</p>
                    <img src={pointer} alt='' className={this.state.tips ? "tips-pointer-up" : "tips-pointer"}/>
                </div>
                <div className="wizard-tips" style={{display: this.state.tips ? 'inline-block' : 'none'}}>
                    <div className="tips-top">
                        <div className="tips-whatworks">
                            <h4>What Works</h4>
                            <ul>
                                <li>Showing people engaged with the activity on the experience</li>
                                <li>Showing off the location, activity, and candid aspects of your experience</li>
                                <li>Making sure the photo has good lighting. Natural light is best</li>
                            </ul>
                        </div>
                        <div className="tips-whatdoesntwork">
                            <h4>What doesn't Work</h4>
                            <ul>
                                <li>Including selfies or pictures that look staged</li>
                                <li>Photos with filters (like black & white) or with graphic or text overlay</li>
                                <li>Uploading photos of drugs, nudity, alcohol, or children</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3>Cover photo</h3>
                <p>Choose a photo that represents your experience. This is the first photo that will appear when guests browse for things to do.</p>
                <div className="wizard-cloudinary">
                    <Cloudinary name='photoOne'/>
                    <Cloudinary name='photoTwo'/>
                </div>
            </div>
        );
    }
}
export default withContext(WizardSeven);