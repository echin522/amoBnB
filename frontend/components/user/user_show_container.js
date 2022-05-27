import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import UserShow from "./user_show_page";

const mSTP = (state, ownProps) => ({
    currentUser: state.session.id,
});
  
const mDTP = dispatch => {
    return {
        // processForm: (user) => dispatch(login(user)),
        openModal: otherForm => dispatch(openModal(otherForm)),
        closeModal: () => dispatch(closeModal()),
    };
};
  
  export default connect(mSTP, mDTP)(UserShow);