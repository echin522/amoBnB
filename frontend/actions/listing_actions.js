import * as listingAPIUtil from "../util/listing_api_util";

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings,
});

export const receiveListing = ({ listing, reviews }) => ({
    type: RECEIVE_LISTING,
    listing,
    reviews,
});

export const receiveReview = ({ review, average_rating, reviewer }) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating,
    reviewer,
});

export const createReview = review => dispatch => (
    listingAPIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);

// Add filters to this later
export const fetchListings = () => dispatch => (
    listingAPIUtil.fetchListings()
        .then(listings => (dispatch(receiveListings(listings))
    ))
);

export const fetchListing = listingId => dispatch => (
    listingAPIUtil.fetchListing(listingId)
        .then(data => (dispatch(receiveListing(data))
    ))
);

export const createListing = listing => dispatch => (
    listingAPIUtil.createListing(listing)
        .then(listing => (dispatch(receiveListing(listing))
    ))
);
