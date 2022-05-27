import * as reservationAPIUtil from "../util/reservation_api_util";

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveReservations = reservations => ({
    type: RECEIVE_RESERVATIONS,
    reservations,
});

const receiveReservation = ({ reservation }) => ({
    type: RECEIVE_RESERVATION,
    reservation,
});

const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const fetchReservation = reservationId => dispatch => (
    reservationAPIUtil.fetchReservation(reservationId)
        .then(reservation => (dispatch(receiveReservation(reservation))
    ))
);

export const fetchReservations = () => dispatch => (
    reservationAPIUtil.fetchReservations()
        .then(reservations => (dispatch(receiveReservations(reservations))
    ))
);

export const createReservation = reservation => dispatch => (
    reservationAPIUtil.createReservation(reservation)
        .then(reservation => (dispatch(receiveReservation(reservation))
    ))
);

export const updateReservation = (reservation, id) => dispatch => {
    return reservationAPIUtil.updateReservation(reservation, id)
        .then(reservation => dispatch(receiveReservation(reservation)
    ))
}

export const deleteReservation = reservationId => dispatch => (
    reservationAPIUtil.deleteReservation(reservationId)
        .then(reservation => (dispatch(removeReservation(reservation))
    ))
);
