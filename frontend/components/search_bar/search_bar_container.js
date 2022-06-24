import { connect } from "react-redux";
import SearchBar from "./search_bar"
import { fetchListings } from "../../actions/listing_actions";

const mSTP = ({ session, entities: { users }, errors }, ownProps) => ({
    currentUser: users[session.id],
    errors: errors.session,
    // history: ownProps.history,
});

const mDTP = dispatch => ({
    fetchListings: search => dispatch(fetchListings(search))
});

export default connect(mSTP, mDTP)(SearchBar);