import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './components/splash/splash_container';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import FeedContainer from './components/feed/feed_container';
import Modal from '../frontend/components/modal/modal';
import NavBarContainer from '../frontend/components/nav_bar/nav_bar_container'

const App = (store) => (
    <div>
        <Modal />
            <header>
                <ProtectedRoute component={NavBarContainer} />
            </header>
            <Switch>
                <AuthRoute exact path="/" component={SplashContainer} />
                <Route path="/feed" component={FeedContainer} />
            </Switch> 
    </div>
)

export default App;

// splashcontainer should route with auth after there is a home feed. 