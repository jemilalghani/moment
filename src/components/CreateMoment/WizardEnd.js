import React from 'react';
import withContext from '../ContextApi/Context_HOC';
import {Link} from 'react-router-dom';

const WizardEnd = (props) => {
    return (
        <button onClick={()=>props.post()}><Link to="/host">POST TO DATABASE</Link></button>
    );
};

export default withContext(WizardEnd);