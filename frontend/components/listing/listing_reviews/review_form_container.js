import React from "react";
import { connect } from "react-redux";
import { createReview } from "../../../actions/listing_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";
import ReviewForm from "./reviews_form";

const mSTP = ( state, ownProps) => ({
    modal: state.ui.modal,
    errors: state.errors.session,
    formType: "create",
    review: {
        body: "",
        cleanliness_rating: 0,
        check_in_rating: 0,
        location_rating: 0,
        communication_rating: 0,
        accuracy_rating: 0,
        value_rating: 0,
        listing_id: Object.keys(state.entities.listings)[0],
    }
});

const mDTP = dispatch => ({
    processForm: review => dispatch(createReview(review)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(ReviewForm);