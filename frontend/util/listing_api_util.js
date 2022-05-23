export const fetchListings = data => (
    $.ajax({
        method: 'GET',
        url: 'api/listings',
        data
    })
);

export const fetchListing = listingId => (
    $.ajax({
        method: 'GET',
        url: `api/listings/${listingId}`
    })
);

export const createReview = review => {
    console.log("CREATING REVIEW")
    return(
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
)};

export const createListing = listingForm => (
    $.ajax({
        method: 'POST',
        url: 'api/listings',
        data: JSON.stringify(listingForm),
        contentType: false,
        processData: false
    })
);
