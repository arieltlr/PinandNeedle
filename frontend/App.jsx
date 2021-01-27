import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './components/splash/splash_container';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import FeedContainer from './components/feed/feed_container';
import Modal from '../frontend/components/modal/modal';
import NavBarContainer from '../frontend/components/nav_bar/nav_bar_container';
import ProfileContainer from './components/user/profile_container';
import FollowingContainer from './components/feed/following_container';

const App = (store) => (
    <div>
        <Modal />
            <header>
                <ProtectedRoute component={NavBarContainer} />
            </header>
            <Switch>
                <Route path="/feed" component={FeedContainer} />
                <Route path="/following" component={FollowingContainer} />
                <ProtectedRoute path="/user/:userId" component={ProfileContainer} />
                <AuthRoute exact path="/" component={SplashContainer} />
                    
            </Switch> 
    </div>
)

export default App;

// splashcontainer should route with auth after there is a home feed. 