import React from 'react';
import withContext from '../ContextApi/Context_HOC';

const WizardEleven = (props) => {
    return (
        <div className="wizard-duration">
            <h2>At what time will you typically host your experience?</h2> 
            <p>Later on, you’ll pick the exact calendar dates you’d like to host. You’ll also be able to adjust times for each individual date.</p>
            <select onChange={(e)=>props.context.updateInfo('availableStartTime',e.target.value)} value={props.context.availableStartTime} required>
                <option value=''>Select Start Time</option>
                <option value="24:00:00">12:00 AM</option>
                <option value="24:30:00">12:30 AM</option>
                <option value="01:00:00">1:00 AM</option>
                <option value="01:30:00">1:30 AM</option>
                <option value="02:00:00">2:00 AM</option>
                <option value="02:30:00">2:30 AM</option>
                <option value="03:00:00">3:00 AM</option>
                <option value="03:30:00">3:30 AM</option>
                <option value="04:00:00">4:00 AM</option>
                <option value="04:30:00">4:30 AM</option>
                <option value="05:00:00">5:00 AM</option>
                <option value="05:30:00">5:30 AM</option>
                <option value="06:00:00">6:00 AM</option>
                <option value="06:30:00">6:30 AM</option>
                <option value="07:00:00">7:00 AM</option>
                <option value="07:30:00">7:30 AM</option>
                <option value="08:00:00">8:00 AM</option>
                <option value="08:30:00">8:30 AM</option>
                <option value="09:00:00">9:00 AM</option>
                <option value="09:30:00">9:30 AM</option>
                <option value="10:00:00">10:00 AM</option>
                <option value="10:30:00">10:30 AM</option>
                <option value="11:00:00">11:00 AM</option>
                <option value="11:30:00">11:30 AM</option>
                <option value="12:00:00">12:00 PM</option>
                <option value="12:30:00">12:30 PM</option>
                <option value="13:00:00">1:00 PM</option>
                <option value="13:30:00">1:30 PM</option>
                <option value="14:00:00">2:00 PM</option>
                <option value="14:30:00">2:30 PM</option>
                <option value="15:00:00">3:00 PM</option>
                <option value="15:30:00">3:30 PM</option>
                <option value="16:00:00">4:00 PM</option>
                <option value="16:30:00">4:30 PM</option>
                <option value="17:00:00">5:00 PM</option>
                <option value="17:30:00">5:30 PM</option>
                <option value="18:00:00">6:00 PM</option>
                <option value="18:30:00">6:30 PM</option>
                <option value="19:00:00">7:00 PM</option>
                <option value="19:30:00">7:30 PM</option>
                <option value="20:00:00">8:00 PM</option>
                <option value="20:30:00">8:30 PM</option>
                <option value="21:00:00">9:00 PM</option>
                <option value="21:30:00">9:30 PM</option>
                <option value="22:00:00">10:00 PM</option>
                <option value="22:30:00">10:30 PM</option>
                <option value="23:00:00">11:00 PM</option>
                <option value="23:30:00">11:30 PM</option>  
            </select>
            <p>to</p>
            <select onChange={(e)=>props.context.updateInfo('availableEndTime',e.target.value)} value={props.context.availableEndTime} required>
                <option value=''>Select End Time</option>
                <option value="24:00:00">12:00 AM</option>
                <option value="24:30:00">12:30 AM</option>
                <option value="01:00:00">1:00 AM</option>
                <option value="01:30:00">1:30 AM</option>
                <option value="02:00:00">2:00 AM</option>
                <option value="02:30:00">2:30 AM</option>
                <option value="03:00:00">3:00 AM</option>
                <option value="03:30:00">3:30 AM</option>
                <option value="04:00:00">4:00 AM</option>
                <option value="04:30:00">4:30 AM</option>
                <option value="05:00:00">5:00 AM</option>
                <option value="05:30:00">5:30 AM</option>
                <option value="06:00:00">6:00 AM</option>
                <option value="06:30:00">6:30 AM</option>
                <option value="07:00:00">7:00 AM</option>
                <option value="07:30:00">7:30 AM</option>
                <option value="08:00:00">8:00 AM</option>
                <option value="08:30:00">8:30 AM</option>
                <option value="09:00:00">9:00 AM</option>
                <option value="09:30:00">9:30 AM</option>
                <option value="10:00:00">10:00 AM</option>
                <option value="10:30:00">10:30 AM</option>
                <option value="11:00:00">11:00 AM</option>
                <option value="11:30:00">11:30 AM</option>
                <option value="12:00:00">12:00 PM</option>
                <option value="12:30:00">12:30 PM</option>
                <option value="13:00:00">1:00 PM</option>
                <option value="13:30:00">1:30 PM</option>
                <option value="14:00:00">2:00 PM</option>
                <option value="14:30:00">2:30 PM</option>
                <option value="15:00:00">3:00 PM</option>
                <option value="15:30:00">3:30 PM</option>
                <option value="16:00:00">4:00 PM</option>
                <option value="16:30:00">4:30 PM</option>
                <option value="17:00:00">5:00 PM</option>
                <option value="17:30:00">5:30 PM</option>
                <option value="18:00:00">6:00 PM</option>
                <option value="18:30:00">6:30 PM</option>
                <option value="19:00:00">7:00 PM</option>
                <option value="19:30:00">7:30 PM</option>
                <option value="20:00:00">8:00 PM</option>
                <option value="20:30:00">8:30 PM</option>
                <option value="21:00:00">9:00 PM</option>
                <option value="21:30:00">9:30 PM</option>
                <option value="22:00:00">10:00 PM</option>
                <option value="22:30:00">10:30 PM</option>
                <option value="23:00:00">11:00 PM</option>
                <option value="23:30:00">11:30 PM</option>  
            </select>
        </div>
    );
};

export default withContext(WizardEleven);