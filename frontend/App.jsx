import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './components/splash/splash_container';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import FeedContainer from './components/feed/feed_container';
import Modal from '../frontend/components/modal/modal';
import NavBarContainer from '../frontend/components/nav_bar/nav_bar_container';
import ProfileContainer from './components/user/profile_container';
import FollowingContainer from './components/feed/following_container';
import BoardShowContainer from './components/boards/board_show_container';
import CreatePinContainer from './components/pins/create_pin_container';
import PinShowContainer from './components/pins/pin_show_container';

const App = (store) => (
    <div>
        <Modal />
            <header>
                <ProtectedRoute component={NavBarContainer} />
            </header>
            <Switch>
                <ProtectedRoute path="/feed" component={FeedContainer} />
                <ProtectedRoute path="/following" component={FollowingContainer} />
                <ProtectedRoute path="/user/:userId" component={ProfileContainer} />
                <ProtectedRoute exact path="/pin" component={CreatePinContainer} />
                <ProtectedRoute exact path="/pin/:pinId" component={PinShowContainer} />
                <ProtectedRoute path="/board/:boardId" component={BoardShowContainer} />
                <AuthRoute exact path="/" component={SplashContainer} />
                    
            </Switch> 
    </div>
)

export default App;
