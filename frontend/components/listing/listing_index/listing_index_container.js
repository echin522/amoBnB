import { connect } from "react-redux";
import ListingIndex from "./listing_index";
import { fetchListings } from "../../../actions/listing_actions";
import { updateFilter } from "../../../actions/filter_actions";

const mSTP = ({ entities: { listings }, ui: { filters }}) => ({
    filters: filters,
    listings: Object.values(listings)
});

const mDTP = dispatch => ({
    fetchListings: (filters) => dispatch(fetchListings(filters)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mSTP, mDTP)(ListingIndex)