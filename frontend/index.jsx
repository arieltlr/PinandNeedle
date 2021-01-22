import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from './root'

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
    // const store = configureStore();

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                user: {[window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id }
        };
        
        store = configureStore(preloadedState)
        delete window.currentUser;
        
    } else {
        store = configureStore();
    }
    ReactDOM.render(<Root store={store}/>, root)
})