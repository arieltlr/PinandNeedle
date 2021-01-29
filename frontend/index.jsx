import React from "react";
import ReactDOM from "react-dom";
import { createBoard, updateBoard, deleteBoard, getBoard, getBoards } from './actions/board_actions';
import configureStore from './store/store';
import Root from './root'

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
    // const store = configureStore();

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.getBoards = getBoards;
    // window.updateBoard = updateBoard;
    // window.deleteBoard = deleteBoard;
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
    ReactDOM.render(<Root store={store}/>, root)
})