import { connect } from "react-redux";
import { deleteReservation, updateReservation } from "../../../actions/reservation_actions";
import { openModal } from "../../../actions/modal_actions";
import ReservationItem from "./reservation_item";

const mSTP = ( state, ownProps ) => ({

});

const mDTP = ( dispatch, ownProps ) => ({
    deleteReservation: id => dispatch(deleteReservation(id)),
    updateReservation: reservation => dispatch(updateReservation(reservation)),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(ReservationItem)