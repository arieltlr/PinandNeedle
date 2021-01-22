import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './components/splash/splash_container';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';
import {AuthRoute} from './util/route_util';
import FeedContainer from './components/feed/feed_container';
import Modal from '../frontend/components/modal/modal';

const App = () => (
    <div>
        <Modal />
            <header>
                <SplashContainer />
            </header>
            <Switch>
            </Switch> 
    </div>
)

export default App;

// splashcontainer should route with auth after there is a home feed. 