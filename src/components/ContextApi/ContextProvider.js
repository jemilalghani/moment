import React from "react";
import axios from "axios";

export const AppContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      user: {},
      title: null,
      selectedCategory: null,
      duration: null,
      price: null,
      locale: null,
      hostQualification: null,
      streetAddress: null,
      city: null,
      state: null,
      zipcode: null,
      whatWeWillDo: null,
      whereWeWillBe: null,
      availableStartTime: null,
      availableEndTime: null,
      photoOne: null,
      photoTwo: null,
      availableDate: null,
      groupSizeLimit: null,
      userId: null,
      filteredMoments: []
    };
  }
  updateInfo = (key, e) => {
    this.setState({ [key]: e });
  };
  clear = () => {
    this.setState({
      login: false,
      user: {},
      title: null,
      selectedCategory: null,
      duration: null,
      price: null,
      locale: null,
      hostQualification: null,
      streetAddress: null,
      city: null,
      state: null,
      zipcode: null,
      whatWeWillDo: null,
      whereWeWillBe: null,
      availableStartTime: null,
      availableEndTime: null,
      photoOne: null,
      photoTwo: null,
      availableDate: null,
      groupSizeLimit: null,
      userId: null
    });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          updateInfo: this.updateInfo,
          clear: this.clear
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
