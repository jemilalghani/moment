import React, { Component } from 'react';
import './App.css';
import LoginRegister from './components/LoginRegister/LoginRegister';
import withContext from './components/ContextApi/Context_HOC';
import Moments from './components/Moments/Moments';
import Admin from './components/Admin/Admin';

class App extends Component {
  render() {
    console.log('CONTEXT', this.props.context)
    return (
      <div className="App">
        <LoginRegister/>
        <Moments />
        <Admin />
      </div>
    );
  }
}

export default withContext(App);
