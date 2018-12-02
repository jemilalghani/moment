import React, { Component } from 'react';
import './App.css';
import LoginRegister from './components/LoginRegister/LoginRegister';
import withContext from './components/ContextApi/Context_HOC';

class App extends Component {
  render() {
    console.log('CONTEXT', this.props.context)
    return (
      <div className="App">
        <LoginRegister/>
      </div>
    );
  }
}

export default withContext(App);
