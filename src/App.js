import React, { Component } from 'react';
import './App.scss';
import './reset.css';
import LoginRegister from './components/LoginRegister/LoginRegister';
import withContext from './components/ContextApi/Context_HOC';
import Admin from './components/Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import routes from './routes';
//import UserProfile from './components/UserProfile/UserProfile';

class App extends Component {
  render() {
    console.log('CONTEXT', this.props.context)
    return (
      <div className="App">
        <Navbar />
        <div className="app-routes">
          {routes}
        </div>
      </div>
    );
  }
}

export default withContext(App);
