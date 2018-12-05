import React from 'react';
import withContext from '../ContextApi/Context_HOC';

const WizardEight = (props) => {
    return (
        <div className="wizard-meetinglocation">
            <h2>Where should guests meet you?</h2>
            <p>Tell guests exactly where to meet you at the start of the experience. Make sure the location is easy to find. The exact address won’t be shared until the guest’s reservation is confirmed.</p>
            <h4>Provide an address</h4>
            <h3>Street address</h3>
            <input value={props.context.streetAddress} onChange={(e)=>props.context.updateInfo('streetAddress',e.target.value)} required></input>
            <div className='wizard-citystate'>
                <h3>City</h3>
                <input type="text" value={props.context.city} onChange={(e)=>props.context.updateInfo('city',e.target.value)} required></input>
                <h3>State</h3>
                <input type="text" value={props.context.state} onChange={(e)=>props.context.updateInfo('state',e.target.value)} required></input>
            </div>
            <h3>ZIP Code</h3>
            <input value={props.context.zipcode} onChange={(e)=>props.context.updateInfo('zipcode',e.target.value)} required></input>
            <h3>Location name</h3>
            <input type="text" value={props.context.locationName} onChange={(e)=>props.context.updateInfo('locationName',e.target.value)}></input>
        </div>
    );
};

export default withContext(WizardEight);