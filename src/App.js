import React, { Component } from 'react';
import './App.css';
import LoginRegister from './components/LoginRegister/LoginRegister';
import Moments from './components/Moments/Moments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginRegister/>
        <Moments />
      </div>
    );
  }
}

export default App;
