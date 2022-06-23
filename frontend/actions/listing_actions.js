import * as listingAPIUtil from "../util/listing_api_util";

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

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

const receiveListingErrors = errors => ({
    type: RECEIVE_LISTING_ERRORS,
    errors
});

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

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
        .then(listing => dispatch(receiveListing(listing)),
        (err) => dispatch(receiveListingErrors(err)))
);

export const deleteListing = listingId => dispatch => (
    listingAPIUtil.deleteListing(listingId)
        .then(() => dispatch(removeListing(listingId)),
        (err) => dispatch(receiveListingErrors(err)))
);

export const updateListing = (listing, id) => dispatch => (
    listingAPIUtil.updateListing(listing, id)
        .then(listing => dispatch(receiveListing(listing)),
        (err) => dispatch(receiveListingErrors(err)))
);

export const createReview = review => dispatch => (
    listingAPIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)),
        (err) => dispatch(receiveReviewErrors(err)))
);

export const deleteReview = reviewId => dispatch => {
    return listingAPIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)
    ))
}

export const fetchReviews = search => dispatch => (
    listingAPIUtil.fetchReviews(search)
        .then(reviews => (dispatch(receiveReviews(reviews))
    ))
);

export const updateReview = review => dispatch => (
    listingAPIUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)),
        err => dispatch(receiveReviewErrors(err)))
);