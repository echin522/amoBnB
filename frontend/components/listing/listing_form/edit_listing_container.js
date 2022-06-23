import React from 'react';
import { connect } from 'react-redux';
import { updateListing, fetchListing } from '../../../actions/listing_actions';
import ListingForm from './listing_form';


class EditListingForm extends React.Component {

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId)
    }
    
    render() {
        const { action, formType, listing, history, errors } = this.props;
        if (!listing) return null;
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

const mDTP = dispatch => ({
    // clearErrors: .......
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    action: (listing, id) => dispatch(updateListing(listing, id)), 
});

export default connect(mSTP, mDTP)(EditListingForm);
