import React from "react";

export default ListingPhotos(listing) (
    <div id="listing-show-photos">
        {listing.photos.map(photo => (
            <img src={photo} />
        ))}
    </div>
);
