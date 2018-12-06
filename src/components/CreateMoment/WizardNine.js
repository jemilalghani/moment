import React from 'react';
import withContext from '../ContextApi/Context_HOC';

const WizardNine = (props) => {
    return (
        <div className="wizard-guestSize">
            <h2>Maximum group size</h2>
            <p>Think about the group size that works best for your experience. Should it be small and intimate? Is it fun with a large group? Please note that Airbnb has a one-guest minimum, which means that if only one person books your experience, you’ll still be expected to host.</p>
                <select onChange={(e)=>props.context.updateInfo('groupSizeLimit',e.target.value)} value={props.context.groupSizeLimit} required>
                    <option value=''>select group size</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
        </div>
    );
};

export default withContext(WizardNine);