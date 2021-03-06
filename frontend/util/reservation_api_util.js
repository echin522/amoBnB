export const fetchReservations = data => (
    $.ajax({
        method: 'GET',
        url: 'api/reservations',
        data
    })
);

export const fetchReservation = reservationId => (
    $.ajax({
        method: 'GET',
        url: `api/reservations/${reservationId}`
    })
);

export const createReservation = reservation => (
    $.ajax({
        method: 'POST',
        url: 'api/reservations',
        data: { reservation }
    })
);

export const updateReservation = reservation => (
    $.ajax({
        method: 'PATCH',
        url: `api/reservations/${reservation.id}`,
        data: { reservation }
    })
)

export const deleteReservation = reservationId => (
    $.ajax({
        url: `/api/reservations/${reservationId}`,
        method: 'DELETE'
    })
);