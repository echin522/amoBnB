import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Banner from "./banner"

const mSTP = (state, ownProps) => ({
    currentUser: state.session.id
});
  
const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});
  
export default connect(mSTP, mDTP)(Banner);