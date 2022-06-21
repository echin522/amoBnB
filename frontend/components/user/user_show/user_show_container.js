import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../../actions/modal_actions";
import UserShow from "./user_show_page";
import { fetchReviews, fetchListings, fetchListing } from "../../../actions/listing_actions";
import { fetchReservations } from "../../../actions/reservation_actions";

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
    openModal: otherForm => dispatch(openModal(otherForm)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(UserShow);