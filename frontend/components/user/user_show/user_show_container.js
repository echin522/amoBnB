import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../../actions/modal_actions";
import UserShow from "./user_show_page";
import { fetchReviews, fetchListings, fetchListing } from "../../../actions/listing_actions";
import { fetchReservations, deleteReservation, updateReservation } from "../../../actions/reservation_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    reservations: Object.values(state.entities.reservations)
});

const mDTP = (dispatch, ownProps) => ({
    // processForm: (user) => dispatch(login(user)),
    // fetchListing: listingId => dispatch(fetchListing(listingId)),
    fetchListings: () => dispatch(fetchListings(ownProps.userId)),
    fetchReviews: () => dispatch(fetchReviews(ownProps.userId)),
    fetchReservations: () => dispatch(fetchReservations(ownProps.userId)),
    deleteReservation: reservationId => dispatch(deleteReservation(reservationId)),
    updateReservation: () => dispatch(fetchReservations(ownProps.userId)),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(UserShow);