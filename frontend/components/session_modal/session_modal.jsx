import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ReviewFormContainer from "../listing/listing_reviews/review_form_container";

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    
    let component;
    switch(modal) {
        case "login":
            component = <LoginFormContainer />;
            break;
        case "signup":
            component = <SignupFormContainer />;
            break;
        case "review":
            component = <ReviewFormContainer/>;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-bg" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mSTP = ( state, ownProps ) => ({
    modal: state.ui.modal,
});

const mDTP = ( dispatch, ownProps ) => ({
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(Modal);