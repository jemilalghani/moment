import React from 'react';

export const AppContext = React.createContext();

export default class ContextProvider extends React.Component {
    constructor(){
        super();
        this.state={
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            gender: null, 
            about: null,
            locale: null,
            userPhoto: null,
            dateJoined: null
        }
    }
    updateProfileInfo = (key, e) => {
        this.setState({[key]: e.target.value})
    }
    render() {
        return(
            <AppContext.Provider value={{...this.state, updateProfileInfo: this.updateProfileInfo}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}