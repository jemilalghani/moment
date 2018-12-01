import React, { Component } from 'react';
import './App.css';
import LoginRegister from './components/LoginRegister/LoginRegister';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginRegister/>
      </div>
    );
  }
}

export default App;
