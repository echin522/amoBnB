import * as reservationAPIUtil from "../util/reservation_api_util";

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS'

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

const receiveReservationErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const fetchReservation = reservationId => dispatch => (
    reservationAPIUtil.fetchReservation(reservationId)
        .then(reservation => (dispatch(receiveReservation(reservation))
    ))
);

export const fetchReservations = userId => dispatch => (
    reservationAPIUtil.fetchReservations(userId)
        .then(reservations => (dispatch(receiveReservations(reservations))
    ))
);

export const createReservation = reservation => dispatch => (
    reservationAPIUtil.createReservation(reservation)
        .then(reservation => (dispatch(receiveReservation(reservation)),
        (err) => dispatch(receiveReservationErrors(err.responseJSON))
    ))
);

export const updateReservation = reservation => dispatch => {
    return reservationAPIUtil.updateReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation),
        (err) => dispatch(receiveReservationErrors(err.responseJSON))
    ))
}

export const deleteReservation = reservationId => dispatch => (
    reservationAPIUtil.deleteReservation(reservationId)
        .then(reservation => (dispatch(removeReservation(reservation)),
        (err) => dispatch(receiveReservationErrors(err.responseJSON))
    ))
);