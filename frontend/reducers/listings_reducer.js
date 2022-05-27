import { RECEIVE_LISTING, RECEIVE_LISTINGS, REMOVE_LISTING } from "../actions/listing_actions";

const listingsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING:
            const newListing = { [action.listing.id]: action.listing };
            return Object.assign({}, newListing);
        case REMOVE_LISTING:
            let newState = Object.assign({}, oldState);
            delete newState[action.listingId];
            return newState;
        default:
            return oldState;
    }
};

export default listingsReducer;