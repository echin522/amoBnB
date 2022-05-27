import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import UserShow from "./user_show_page";
import { fetchReviews } from "../../actions/listing_actions"

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch, ownProps) => ({
    // processForm: (user) => dispatch(login(user)),
    fetchReviews: () => dispatch(fetchReviews(ownProps.userId)),
    openModal: otherForm => dispatch(openModal(otherForm)),
    closeModal: () => dispatch(closeModal()),
});
  
  export default connect(mSTP, mDTP)(UserShow);