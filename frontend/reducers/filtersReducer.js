import { UPDATE_FILTER } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
    city: "San Francisco",
    minGuests: 1,
    maxGuests: 100,
});

const filtersReducer = ( oldState = defaultFilters, action ) => {
    Object.freeze(oldState);
    if (action.type === UPDATE_FILTER) {
        const newFilter = {
            [action.filter]: action.value
        };
        return Object.assign({}, oldState, newFilter);
    } else {
        return oldState;
    }
}

export default filtersReducer;