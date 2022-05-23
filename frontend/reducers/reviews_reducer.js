import { RECEIVE_LISTING } from "../actions/listing_actions"

const reviewsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_LISTING:
            const newState = Object.assign({}, oldState, action.reviews);
            return newState;
        default:
            return oldState;
    }
};

export default reviewsReducer;