import React from 'react';
import { connect } from 'react-redux';
import { updateListing, fetchListing } from '../../../actions/listing_actions';
import ListingForm from './listing_form';


class EditListingForm extends React.Component {

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId)
    }
    
    render() {
        if (!this.props.listing) return null;

        const { action, formType, listing, history, errors } = this.props;

        return (
            <ListingForm
                action={action}
                formType={formType}
                listing={listing}
                errors={errors}
                history={history}
            />
        );
    }
}
    

const mSTP = (state, ownProps) => ({
    formType: "update",
    listing: state.entities.listings[ownProps.match.params.listingId],
    currentUserId: state.session.id,
    errors: state.errors.listingErrors,
});

const mDTP = (dispatch, ownProps) => ({
    // clearErrors: .......
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    action: (listing) => dispatch(updateListing(listing, ownProps.match.params.listingId)), 
});

export default connect(mSTP, mDTP)(EditListingForm);
