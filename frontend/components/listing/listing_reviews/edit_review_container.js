import ReviewForm from "./reviews_form";
import { connect } from "react-redux";
import { updateReview } from "../../../actions/listing_actions";
import { openModal } from "../../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    modal: state.ui.modal,
    listingId: ownProps.listingId,
    errors: state.errors.session,
    formType: "update",
});

const mDTP = dispatch => ({
    processForm: review => dispatch(updateReview(review)),
    openModal: modal => dispatch(openModal(modal)),
})

export default connect(mSTP, mDTP)(ReviewForm);