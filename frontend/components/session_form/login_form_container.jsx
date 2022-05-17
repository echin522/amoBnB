import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";

const mSTP = ({ errors }) => {
    return {
        formType: "login",
        errors: errors.session,
    };
};
  
const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        openModal: otherForm => dispatch(openModal(otherForm)),
        closeModal: () => dispatch(closeModal()),
        otherForm: "signup"
    };
};
  
  export default connect(mSTP, mDTP)(SessionForm);