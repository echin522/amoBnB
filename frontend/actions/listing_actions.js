import * as listingAPIUtil from "../util/listing_api_util";

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings,
});

const receiveListing = ({ listing, reviews }) => ({
    type: RECEIVE_LISTING,
    listing,
    reviews,
});

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews,
});

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
});

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const createReview = review => dispatch => (
    listingAPIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);

export const fetchReviews = search => dispatch => (
    listingAPIUtil.fetchReviews(search)
        .then(reviews => (dispatch(receiveReviews(reviews))
    ))
);

export const fetchListings = search => dispatch => (
    listingAPIUtil.fetchListings(search)
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

export const deleteListing = listingId => dispatch => {
    return listingAPIUtil.deleteListing(listingId)
        .then(() => dispatch(removeListing(listingId)))
}

export const deleteReview = reviewId => dispatch => {
    return listingAPIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
}