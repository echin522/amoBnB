import React from "react";
import { Link } from "react-router-dom";

class ListingIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let listing = this.props.listing;
        let averageRating;
        (typeof listing.average_rating !== "string")
            ? averageRating = "-"
            : averageRating = parseFloat(listing.average_rating).toFixed(2)
        return (
            <div className="listing-item">
                <Link to={`/listings/${listing.id}`}>
                    <div className="listing-image-container">
                        <img src={listing.photoUrls[0]}/>
                    </div>
                    <div className="listing-title">
                        <h4 className="listing-name">
                            {listing.title.split(" ").slice(0, 3).join(" ")}
                        </h4>
                        <p>{averageRating} <i className="fa-solid fa-star"></i></p>
                    </div>
                    <div className="listing-capacity">
                        {`${listing.num_rooms} room, ${listing.num_beds} bed`}
                    </div>
                    <div className="listing-price">
                        <p>$<span>{listing.price_per_night}</span> night</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ListingIndexItem