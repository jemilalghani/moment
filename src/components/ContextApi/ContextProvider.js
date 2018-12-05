import React from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default class ContextProvider extends React.Component {
    constructor(){
        super();
        this.state={
            login: false,
            user: {
                // firstName: null,
                // lastName: null,
                // email: null,
                // phone: null,
                // gender: null, 
                // about: null,
                // locale: null,
                // userPhoto: null,
                // dateJoined: null,
            }

        }
    }
    updateInfo = (key, e) => {
        this.setState({[key]: e})
    }
    postToDatabase(){
        const { title, category, duration, price, locale, hostQualification, meetingLocation, whatWeWillDo, whereWeWillBe, availableStartTime,availableEndTime, photoOne, photoTwo} = this.state;
        axios.post('/api/moment/admin', {
            title,
            category,
            duration,
            price,
            locale,
            hostQualification,
            meetingLocation,
            whatWeWillDo,
            whereWeWillBe,
            availableStartTime,
            availableEndTime,
            deleted : false,
            // locale_google
            highlight: false,
            photoOne,
            photoTwo,
            // availableDate
        }).then(()=>{
            this.setState({uploaded: true})
        }).catch(()=>{
            this.setState({uploaded: false})
        })
    }
    render() {
        return(
            <AppContext.Provider value={{...this.state, updateInfo: this.updateInfo}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}