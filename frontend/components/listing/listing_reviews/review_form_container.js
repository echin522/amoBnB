import ReviewModal from "./reviews_modal";
import { connect } from "react-redux";
import { createReview } from "../../../actions/listing_actions";
import { closeModal } from "../../../actions/modal_actions";

const mSTP = ( state, ownProps) => ({
    modal: state.ui.modal,
    listingId: ownProps.listingId,
    errors: state.errors.session,
    review: {
        body: "",
        cleanliness_rating: 0,
        check_in_rating: 0,
        location_rating: 0,
        communication_rating: 0,
        accuracy_rating: 0,
        value_rating: 0,
        listing_id: ownProps.listingId,
    }
});

const mDTP = dispatch => ({
    processForm: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(ReviewModal);