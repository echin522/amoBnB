import React from "react";
import { Link } from "react-router-dom";

class ListingIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    redirectToShow() {
        const listingId = this.props.listing.id;
        this.props.history.push(`/listings/$`)
    }

    render() {
        let listing = this.props.listing;
        return (
            <div className="listing-item">
                <Link to={`/listings/${listing.id}`}>
                    <div className="listing-image-container">
                        <img src={this.props.listing.photoUrl}/>
                    </div>
                    <div className="listing-title">
                        <h4 className="listing-name">{listing.title.split(" ").slice(0, 3).join(" ")}</h4>
                        <p>{parseFloat(listing.average_rating).toFixed(2)} <i className="fa-solid fa-star"></i></p>
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