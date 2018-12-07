import React from 'react';
import withContext from '../ContextApi/Context_HOC';

const WizardEnd = (props) => {
    return (
        <button onClick={()=>props.post()}></button>
    );
};

export default withContext(WizardEnd);