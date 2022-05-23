import { RECEIVE_LISTING, RECEIVE_LISTINGS, } from "../actions/listing_actions";

const listingsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING:
            const newListing = { [action.listing.id]: action.listing };
            return Object.assign({}, newListing);
        default:
            return oldState;
    }
};

export default listingsReducer;