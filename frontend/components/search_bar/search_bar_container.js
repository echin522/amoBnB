import { connect } from "react-redux";
import SearchBar from "./search_bar"
import { fetchListings } from "../../actions/listing_actions";

const mSTP = ({ session, entities: { users }, errors }) => {
    return {
        currentUser: users[session.id],
        errors: errors.session,
    };
};
  
const mDTP = dispatch => ({
    fetchListings: search => dispatch(fetchListings(search))
});
  
export default connect(mSTP, mDTP)(SearchBar);