import { RECEIVE_LISTING_ERRORS, RECEIVE_LISTINGS, RECEIVE_LISTING } from "../actions/listing_actions";
import { CLEAR_ERRORS } from "../actions/session_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LISTINGS:
            return [];
        case RECEIVE_LISTING:
            return [];
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_LISTING_ERRORS:
            return action.errors;
        default:
            return state;
    }
};
