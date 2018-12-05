import React from 'react';
import withContext from '../ContextApi/Context_HOC';

const WizardTen = (props) => {
    return (
        <div className="wizard-price">
            <h2>Set a price per guest</h2>
            <p>The price of your experience is entirely up to you. Play with the calculator to see how much you’d earn depending on the number of guests.</p>
            <div>
                <input type="number" value={props.context.price} onChange={(e)=>props.context.updateInfo('price', e.target.value)} required/>
                <span>USD</span>
            </div>
        </div>
    );
};

export default withContext(WizardTen);