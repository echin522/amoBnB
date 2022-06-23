import { 
    RECEIVE_REVIEW_ERRORS,
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
} from "../actions/listing_actions";
import { CLEAR_ERRORS } from "../actions/session_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW:
            return [];
        case RECEIVE_REVIEWS:
            return [];
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        default:
            return state;
    }
};
