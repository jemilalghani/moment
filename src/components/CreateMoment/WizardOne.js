import React, { Component } from 'react';
import withContext from '../ContextApi/Context_HOC';

class WizardOne extends Component {
    render() {
        return (
            <div className="wizard-locale">
                <h2>Location</h2>
                <p>Which city will you host your experience in?</p>
                <input type="text" 
                value={this.props.context.locale} 
                onChange={(e)=>{this.props.context.updateInfo('locale', e.target.value)}} 
                className="wizard-input"
                required>
                </input>
            </div>
        );
    }
}
export default withContext(WizardOne);