import connect from "react-redux";
import SearchBar from "./search_bar"

const mSTP = ({ session, entities: { users }, errors }) => {
    return {
        currentUser: users[session.id],
        errors: errors.session,
    };
};
  
const mDTP = dispatch => ({

});
  
export default connect(mSTP, mDTP)(SearchBar);