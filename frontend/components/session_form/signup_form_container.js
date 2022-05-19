import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";

const mSTP = ({ errors }) => {
    return {
        formType: "signup",
        errors: errors.session,
    };
};
  
const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        openModal: otherForm => dispatch(openModal(otherForm)),
        closeModal: () => dispatch(closeModal()),
        otherForm: "login"
    };
};
  
  export default connect(mSTP, mDTP)(SessionForm);