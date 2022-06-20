import { RECEIVE_RESERVATION, RECEIVE_RESERVATIONS, REMOVE_RESERVATION } from "../actions/reservation_actions"

const reservationsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_RESERVATIONS:
            return Object.assign({}, newState, action.reservations);
        case RECEIVE_RESERVATION:
            newState[action.reservation.id] = action.reservation;
            return newState;
        case REMOVE_RESERVATION:
            newState = Object.assign({}, oldState);
            delete newState[action.reservationId];
            return newState;
        default:
            return oldState;
    }
};

export default reservationsReducer;