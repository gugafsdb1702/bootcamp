import React, {Component} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages//home/index';
import Signup from './pages/signup/index';
import NotFound from './pages/not-found/index';

export default class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Signup" component={Signup}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}