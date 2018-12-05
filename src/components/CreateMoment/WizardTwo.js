import React from 'react';
import withContext from '../ContextApi/Context_HOC';

const WizardTwo = (props) => {
    return (
        <div className="wizard-category">
            <h2>What type of experience will you host?</h2>
            <p>Choose the category that best describes your experience.</p>
                <select value={props.context.selectedCategory} onChange={(e)=>props.context.updateInfo('selectedCategory',e.target.value)} required>
                    <option value="">selected a category</option>
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
        </div>
    );
};

export default withContext(WizardTwo);