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
    render() {
        return(
            <AppContext.Provider value={{...this.state, updateInfo: this.updateInfo}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}