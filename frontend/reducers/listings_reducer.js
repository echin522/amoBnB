import { RECEIVE_LISTING, RECEIVE_LISTINGS, RECEIVE_REVIEW } from "../actions/listing_actions";

const listingsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING:
            const newListing = { [action.listing.id]: action.listing };
            return Object.assign({}, oldState, newListing);
        case RECEIVE_REVIEW:
            const { review, average_rating } = action;
            const newState = Object.assign({}, oldState);
            newState[review.listing_id].reviewIds.push(review.id);
            newState[review.listing_id].average_rating = average_rating;
            return newState;
        default:
            return oldState;
    }
};

export default listingsReducer;