import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store';
import Root from './root'
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesLoaded';


document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
 
    var grid = document.querySelector('.grid');


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