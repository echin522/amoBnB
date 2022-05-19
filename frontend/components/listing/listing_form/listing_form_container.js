import { connect } from 'react-redux';
import { createListing } from '../../../actions/listing_actions';
import ListingForm from './listing_form';

const mSTP = (state, { location }) => ({
    // lat: new URLSearchParams(location.search).get('lat'),
    // lng: new URLSearchParams(location.search).get('lng')
});

const mDTP = dispatch => ({
    createListing: listing => dispatch(createListing(listing))
});

export default connect(mSTP, mDTP)(ListingForm);
