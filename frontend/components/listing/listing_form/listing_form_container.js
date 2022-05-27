import { connect } from 'react-redux';
import { createListing } from '../../../actions/listing_actions';
import ListingForm from './listing_form';

const mSTP = (state, { location }) => ({
    listing: {
        title: "",
        description: "",
        address: "",
        location: "San Francisco",
        lat: 37.798635,
        lng: -122.402313,
        max_guests: 0,
        num_rooms: 0,
        num_beds: 0,
        num_baths: 0,
        price_per_night: 0,
        photoFiles: [],
    },
    formType: "create",
    currentUserId: state.session.id,
});

const mDTP = dispatch => ({
    action: listing => dispatch(createListing(listing)),
});

export default connect(mSTP, mDTP)(ListingForm);
