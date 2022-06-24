import { connect } from "react-redux";
import { deleteReview, updateReview } from "../../../actions/listing_actions";
import { fetchUser } from "../../../actions/user_actions";

import Review from "./listing_reviews_item";

const mSTP = ( state, ownProps ) => ({
    currentUserId: state.session.id,
});

const mDTP = ( dispatch, ownProps ) => ({
    fetchUser: (reviewerId) => dispatch(fetchUser(reviewerId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    updateReview: review => dispatch(updateReview(review)),
    // createReservation: reservation => dispatch(createReservation(reservation)),
});

export default connect(mSTP, mDTP)(Review)