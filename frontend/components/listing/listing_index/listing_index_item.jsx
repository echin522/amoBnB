import React from "react";

class ListingIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { listing } = this.props.listing;
        return (
            <div className="listing-item">
                <Link to={`/listings/${listing.id}`}>
                    <div className="listing-image-container">
                        <img src={window.icon}/>
                    </div>
                    <div className="listing-title">
                        {listing.title.split(" ").slice(0, 4).join(" ")}
                        {parseFloat(listing.average_rating).toFixed(2)} <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="listing-capacity">
                        {`${listing.num_rooms} room, ${listing.num_beds} bed`}
                    </div>
                    <div className="listing-price">
                        <p>{listing.price_per_night}</p> night
                    </div>
                </Link>
            </div>
        )
    }
}

export default ListingIndexItem