import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login, logout, signup } from "./actions/session_actions";
import { createReview, fetchListings, fetchListing, createListing } from "./actions/listing_actions";
import { fetchUser } from "./actions/user_actions"
import { createReservation, fetchReservation } from "./actions/reservation_actions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING ON WINDOW
    window.getState = store.getState;
    //
    
    ReactDOM.render(<Root store={store}/>, root);
});