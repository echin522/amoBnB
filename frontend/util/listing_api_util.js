export const fetchListings = (search) => (
    $.ajax({
        method: 'GET',
        url: 'api/listings',
        data: search
    })
);

export const fetchListing = listingId => (
    $.ajax({
        method: 'GET',
        url: `api/listings/${listingId}`
    })
);

export const createReview = review => {
    return(
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
)};

export const fetchReviews = (search) => (
    $.ajax({
        method: 'GET',
        url: 'api/reviews',
        data: search
    })
);

export const createListing = listingForm => (
    $.ajax({
        method: 'POST',
        url: 'api/listings',
        data: listingForm,
        // data: {listing: listingForm},
        contentType: false,
        processData: false,
    })
);

export const deleteListing = listingId => $.ajax({
    url: `/api/listings/${listingId}`,
    method: 'DELETE'
});

export const deleteReview = reviewId => $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'DELETE'
});
