import { connect } from "react-redux";
import ListingIndex from "./listing_index";
import { fetchListings } from "../../../actions/listing_actions";

const mSTP = ({ entities: { listings }, ui: { filters }}) => ({
    filters: filters,
    listings: Object.values(listings)
});

const mDTP = dispatch => ({
    fetchListings: (filters) => dispatch(fetchListings(filters)),
});

export default connect(mSTP, mDTP)(ListingIndex)