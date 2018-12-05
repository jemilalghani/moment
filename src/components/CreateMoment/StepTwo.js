import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Cloudinary from '../Cloudinary/Cloudinary';
import withContext from '../ContextApi/Context_HOC';

class StepTwo extends Component {
    constructor(){
        super();
        this.state={
            hostQualification: '',
            whatWeWillDo: '',
            whereWeWillBe: '',
            title: '',
            tips: true,
            pageThree: false,
            pageFour: false,
        }
    }
    submit(){
        this.props.context.updateProfileInfo('hostQualifications', this.state.hostQualification)
        this.props.context.updateProfileInfo('whatWeWillDo', this.state.whatWeWillDo)
        this.props.context.updateProfileInfo('whereWeWillBe', this.state.whereWeWillBe)
        this.props.context.updateProfileInfo('title', this.state.title)
    }
    handleChange(key, e){
        this.setState({
            [key]: e.target.value
        })
    }
    toggle(key, e){
        e.preventDefault();
        this.setState((prevState)=>{
            return {[key]: !prevState[key]}
        })
    }
    render() {
        // console.log(this.props.context)
        return (
            <div className="host-steptwo">
            {
                !this.state.pageThree?
                <form className="steptwo-qualifications" onSubmit={(e)=>this.toggle('pageThree', e)}>
                    <h2>Describe your qualifications</h2>
                    <p>Your qualifications show why you’re the best person to host this experience. Take some time to tell guests why you’re passionate and knowledgeable about the subject.</p>
                    <p onClick={()=>this.toggle('tips')}>Tips</p>
                    <div className="steptwo-tips" style={{display: this.state.tips ? 'inline' : 'none'}}>
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
                    <textarea cols="80" rows="10" value={this.state.hostQualification} onChange={(e)=>this.handleChange('hostQualification',e)} style={{resize: 'vertical'}} required></textarea>
                    <p>Do you have a social media following or website related to this interest or hobby? Add in links to your Instagram, Twitter, Facebook, website, blog, or articles written by you or about you.</p>
                    <button>Add a Link</button>
                    <Link to ='/basics'><button>Previous</button></Link>
                    {/* <button onClick={()=>this.toggle('pageThree')}>Next</button> */}
                    <input type="submit" value="next"/>
                </form>
                :
                !this.state.pageFour?
                    <form className="steptwo-whatWeWillDo" onSubmit={(e)=>this.toggle('pageFour',e)}>
                        <h2>Describe what you’ll do</h2>
                        <p>Your activity description is a chance to inspire guests to take your experience. Talk about the details of the itinerary you have planned for them.</p>
                        <p onClick={()=>this.toggle('tips')}>Tips</p>
                        <div className="steptwo-tips" style={{display: this.state.tips ? 'inline' : 'none'}}>
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
                        <textarea cols="80" rows="10" value ={this.state.whatWeWillDo} onChange={(e)=>this.handleChange('whatWeWillDo', e)} style={{resize: 'vertical'}} required ></textarea>
                    
                        <button onClick={(e)=>this.toggle('pageThree',e)}>Previous</button>
                        {/* <button onClick={()=>this.toggle('pageFour')}>Next</button> */}
                        <input type="submit" value="next"/>
                    </form>
                    :
                    !this.state.pageFive?
                        <form className="steptwo-whereWeWillBe" onSubmit={(e)=>this.toggle('pageFive',e)}>
                            <h2>Describe each place you’ll visit</h2>
                            <p>If your experience includes multiple stops, describe every place you’ll stop to explore. You don’t need to include the address here, guests will get an email with details later. </p>
                            <p onClick={()=>this.toggle('tips')}>Tips</p>
                            <div className="steptwo-tips" style={{display: this.state.tips ? 'inline' : 'none'}}>
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
                            <textarea cols="80" rows="10" value ={this.state.whereWeWillBe} onChange={(e)=>this.handleChange('whereWeWillBe',e)} style={{resize: 'vertical'}} required></textarea>
                            <button onClick={(e)=>this.toggle('pageFour',e)}>Previous</button>
                            {/* <button onClick={(e)=>this.toggle('pageFive',e)}>Next</button> */}
                            <input type="submit" value="next"/>
                        </form>
                        :
                        !this.state.pageSix ?
                        <form className="steptwo-title" onSubmit={(e)=>this.toggle('pageSix',e)}>
                            <h2>Give your experience a title</h2>
                            <p>Tell guests what’s different about your experience and help them imagine what they’ll be doing. Great titles highlight your expertise and access to things or places guests can’t find on their own.</p>
                            <p onClick={()=>this.toggle('tips')}>Tips</p>
                            <div className="steptwo-tips" style={{display: this.state.tips ? 'inline' : 'none'}}>
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
                                    <p>Private dinner in a chef’s Parisian home</p>
                                    <p>Hike Runyon Canyon with a rescue dog</p>
                                </div>
                            </div>
                            <h3>What is the title of your experience?</h3>
                            <input type="text" value={this.state.title} onChange={(e)=>this.handleChange('title',e)} required></input>
                            <button onClick={(e)=>this.toggle('pageFive',e)}>Previous</button>
                            {/* <button onClick={(e)=>this.toggle('pageSix',e)}>Next</button> */}
                            <input type="submit" value="next"/>
                        </form>
                        :
                        <div className="steptwo-photo">
                            <h2>Add photos to your experience</h2>
                            <p>These images will be at the top of your experience page, so try uploading high quality photos of your experience to make a great first impression.</p>
                            <p onClick={()=>this.toggle('tips')}>Tips</p>
                            <div className="steptwo-tips" style={{display: this.state.tips ? 'inline' : 'none'}}>
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
                            <Cloudinary name='photoOne'/>
                            <Cloudinary name='photoTwo'/>
                            <button onClick={()=>this.toggle('pageSix')}>Previous</button>
                            <Link to ='/settings'><button onClick={()=>this.submit()}>Submit Part Two</button></Link>
                        </div>
                }
            </div>
        );
    }
}
export default withContext(StepTwo);