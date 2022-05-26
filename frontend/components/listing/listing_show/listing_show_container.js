import { connect } from "react-redux";
import { createReview, fetchListing } from "../../../actions/listing_actions";
import { openModal } from "../../../actions/modal_actions";
import ListingShow from "./listing_show";

const mSTP = ( state, ownProps ) => {
    const listingId = parseInt(ownProps.match.params.listingId);
    const listing = state.entities.listings[listingId];
    
    return ({
        currentUser: state.entities.users[state.session.id],
        listing: listing,
        reviews: state.entities.reviews,
        errors: state.errors,
    });
};

const mDTP = ( dispatch, ownProps ) => ({
    fetchListing: id => dispatch(fetchListing(id)),
    createReview: review => dispatch(createReview(review)),
    openModal: modal => dispatch(openModal(modal))
    // createReservation: reservation => dispatch(createReservation(reservation)),
});

export default connect(mSTP, mDTP)(ListingShow)