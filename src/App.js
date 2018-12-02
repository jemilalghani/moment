import React, { Component } from 'react';
import './App.css';
import LoginRegister from './components/LoginRegister/LoginRegister';
import withContext from './components/ContextApi/Context_HOC';
import Moments from './components/Moments/Moments';
import routes from './routes';

class App extends Component {
  render() {
    console.log('CONTEXT', this.props.context)
    return (
      <div className="App">
        {/* <LoginRegister/>
        <Moments /> */}
        {routes}
      </div>
    );
  }
}

export default withContext(App);
