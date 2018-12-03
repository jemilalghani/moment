import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class StepOne extends Component {
    constructor(){
        super();
        this.state ={
            locale: '',
            pageTwo: false,
            selectedCategory: "Arts & Design",
            selectedOption: null
        }
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
    render() {
        return (
            <div className="host-stepone">
            {
                !this.state.pageTwo ?
                <div className="stepone-locale">
                    <h2>Location</h2>
                    <p>Which city will you host your experience in?</p>
                    <input type="text" value={this.state.locale} onChange={(e)=>this.handleChange('locale',e)}></input>
                    <button onClick={()=>this.toggle('pageTwo')}>Next</button>
                </div> 
                :
                <div className="stepone-category">
                    <h2>What type of experience will you host?</h2>
                    <p>Choose the category that best describes your experience.</p>
                    <form>
                        <select onChange={(e)=>this.handleChange('selectedCategory',e)}>
                            <option value="Arts & Design">Arts & Design</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Sports">Sports</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Nature">Nature</option>
                            <option value="Food & Drink">Food & Drink</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="History">History</option>
                            <option value="Music">Music</option>
                            <option value="Business">Business</option>
                            <option value="Nightlife">Nightlife</option>
                        </select>
                    </form>
                    <p>What will guests spend the majority of time doing on your experience?</p>
                    <form>
                        <label class="container">
                            <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={(e)=>this.handleChange('selectedOption',e)} />
                            Exploring a city, community, natural habitat, or business location
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">
                            <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={(e)=>this.handleChange('selectedOption',e)}/>
                            Learning or practicing a skill or other unique activity
                            <span class="checkmark"></span>
                        </label>
                        <label class="container">
                            <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={(e)=>this.handleChange('selectedOption',e)}/>
                            Watching a performance
                            <span class="checkmark"></span>
                        </label>
                    </form>
                    <button onClick={()=>this.toggle('pageTwo')}>Previous</button>
                    <Link to ='/aboutexperience'><button>Next</button></Link>
                </div>
            }
            </div>
        );
    }
}