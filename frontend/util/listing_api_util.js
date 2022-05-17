export const fetchListings = data => (
    $.ajax({
      method: 'GET',
      url: 'api/listings',
      data
    })
  );
  
  export const fetchListing = id => (
    $.ajax({
      method: 'GET',
      url: `api/listings/${id}`
    })
  );
  
  export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
  );
  
  export const createListing = listingForm => (
    $.ajax({
        method: 'POST',
        url: 'api/listings',
        data: listingForm,
        //   contentType: false,
        //   processData: false
    })
  );
  