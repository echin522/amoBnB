import { RECEIVE_LISTING, RECEIVE_REVIEW } from "../actions/listing_actions"

const reviewsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case RECEIVE_LISTING:
            return Object.assign({}, newState, action.reviews);
        default:
            return oldState;
    }
};

export default reviewsReducer;