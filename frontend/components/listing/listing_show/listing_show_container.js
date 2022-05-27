import { connect } from "react-redux";
import { createReview, fetchListing, deleteListing } from "../../../actions/listing_actions";
import { openModal } from "../../../actions/modal_actions";
import { createReservation } from "../../../actions/reservation_actions";
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
    deleteListing: listingId => dispatch(deleteListing(listingId)),
    fetchListing: id => dispatch(fetchListing(id)),
    createReview: review => dispatch(createReview(review)),
    createReservation: reservation => dispatch(createReservation(reservation)),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(ListingShow)