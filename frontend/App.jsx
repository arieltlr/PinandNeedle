import React from 'react';
import { Route } from 'react-router-dom';
import SplashContainer from './components/splash/splash_container';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';
import {AuthRoute} from './util/route_util';
import FeedContainer from './components/feed/feed_container';

const App = () => (
    <div>
        <Route exact path="/" component={SplashContainer} /> 
        <Route path="/home" component={FeedContainer} /> 
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> 
    </div>
)

export default App;

// splashcontainer should route with auth after there is a home feed. 