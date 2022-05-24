import { connect } from "react-redux";
import { fetchUser } from "../../../actions/user_actions";
import Review from "./listing_reviews_item";

const mSTP = ( state, ownProps ) => {
    
};

const mDTP = ( dispatch, ownProps ) => ({
    fetchUser: (reviewerId) => dispatch(fetchUser(reviewerId))
    // createReservation: reservation => dispatch(createReservation(reservation)),
});

export default connect(null, mDTP)(Review)