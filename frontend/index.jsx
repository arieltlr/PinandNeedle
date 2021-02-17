import React from "react";
import ReactDOM from "react-dom";
import { createBoard, updateBoard, deleteBoard, getBoard, getBoards } from './actions/board_actions';
import { createPin, updatePin, deletePin, getPin, getPins } from './actions/pin_actions';

import configureStore from './store/store';
import Root from './root'

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
    // const store = configureStore();

    
    // window.dispatch = store.dispatch;
    // window.getPins = getPins;
    // window.getPin = getPin;
    // window.createPin = createPin;
    // window.updatePin = updatePin;
    // window.deletePin = deletePin;
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                user: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };

        store = configureStore(preloadedState)
        delete window.currentUser;

    } else {
        store = configureStore();
    }
    // window.getState = store.getState;

    ReactDOM.render(<Root store={store}/>, root)
})