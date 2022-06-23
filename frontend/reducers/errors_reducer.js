import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import listings from './listings_errors_reducer';
import reviews from './reviews_errors_reducer';
import reservations from './reservations_errors_reducer';

export default combineReducers({
      session,
      listings,
      reviews,
      reservations,
});