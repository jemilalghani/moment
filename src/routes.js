import React from 'react';
import {Switch, Route } from 'react-router-dom';
import DetailedMoments from './components/DetailedMoments/DetailedMoments';
import LoginRegister from './components/LoginRegister/LoginRegister';
import Moments from './components/Moments/Moments';
import Wizard from './components/CreateMoment/Wizard';
import UserProfile from './components/UserProfile/UserProfile';
import CheckOut from './components/CheckOut/CheckOut';

export default (
    <Switch>
        <Route path='/basics' component={Wizard}/>
        {/* <Route path='/checkout' component ={} /> */}
        {/* <Route path='/host' component ={} /> */}
        {/* <Route path='/user' component ={} /> */}
        <Route path='/moments/:id' component ={DetailedMoments} />
        <Route path='/login' component={LoginRegister}/>
        <Route path='/userprofile' component={UserProfile}/>
        <Route path='/checkout' component={CheckOut} />
        <Route exact path='/' component ={Moments} />
    </Switch>
)