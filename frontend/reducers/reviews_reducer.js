import { RECEIVE_LISTING, RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from "../actions/listing_actions"

const reviewsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return Object.assign({}, newState, action.reviews);
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case RECEIVE_LISTING:
            return Object.assign({}, newState, action.reviews);
        case REMOVE_REVIEW:
            newState = Object.assign({}, oldState);
            delete newState[action.reviewId];
            return newState;
        default:
            return oldState;
    }
};

export default reviewsReducer;