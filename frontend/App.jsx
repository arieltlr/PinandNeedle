import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './components/splash/splash_container';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import FeedContainer from './components/feed/feed_container';
import Modal from '../frontend/components/modal/modal';
import NavBarContainer from '../frontend/components/nav_bar/nav_bar_container'

const App = () => (
    <div>
        <Modal />
            <header>
                <ProtectedRoute path="/" component={NavBarContainer}/>
            </header>
            <Switch>
                <Route exact path="/" component={SplashContainer} />
                {/* <ProtectedRoute exact path="/feed" component={FeedContainer} /> */}
            </Switch> 
    </div>
)

export default App;

// splashcontainer should route with auth after there is a home feed. 