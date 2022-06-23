import ReviewModal from "./reviews_modal";
import { connect } from "react-redux";
import { updateReview } from "../../../actions/listing_actions";
import { closeModal } from "../../../actions/modal_actions";

const mSTP = ( state, ownProps) => ({
    modal: state.ui.modal,
    listingId: ownProps.listingId,
    errors: state.errors.session,
});

const mDTP = dispatch => ({
    processForm: review => dispatch(updateReview(review)),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(ReviewModal);