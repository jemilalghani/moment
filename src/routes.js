import React from 'react';
import {Switch, Route } from 'react-router-dom';
import DetailedMoments from './components/DetailedMoments/DetailedMoments';
import LoginRegister from './components/LoginRegister/LoginRegister';
import Moments from './components/Moments/Moments';
import CheckOut from './components/CheckOut/CheckOut';
import Admin from './components/Admin/Admin';
import StepOne from './components/CreateMoment/StepOne';
import StepTwo from './components/CreateMoment/StepTwo';

export default (
    <Switch>
        <Route path='/basics' component={StepOne}/>
        <Route path='/aboutexperience' component={StepTwo}/>
        {/* <Route path='/checkout' component ={} /> */}
        {/* <Route path='/host' component ={} /> */}
        {/* <Route path='/user' component ={} /> */}
        <Route path='/moments/:id' component ={DetailedMoments} />
        <Route path='/login' component={LoginRegister}/>
        <Route path='/checkout' component={CheckOut} />
        <Route exact path='/' component ={Moments} />
    </Switch>
)