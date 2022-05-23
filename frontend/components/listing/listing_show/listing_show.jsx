import React from "react";
import ListingMap from "../listing_map/listing_map";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            start_date: "",
            end_date: "",
            num_nights: 3,
            num_guests: 1,
            listing_id: this.props.listing.id,
            cleaning_fee: Math.ceil(this.props.listing.price_per_night * 0.05),
            // user_id: this.props.currentUser.id,
        }
    }

    componentDidMount() {
        if (!this.props.listing) {
            this.props.listing = this.props.fetchListing(this.props.match.params.listingId);
        }
    }



    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // const reservation = Object.assign({}, this.state);
        // this.props.processForm(user).then(this.props.closeModal);
    }

    redirecToBrowse() {
        // this.props.history.push(`/browse/${this.props.filter}`);
    }

    render() {
        let listing = this.props.listing;
        let averageRating = parseFloat(listing.average_rating).toFixed(2);

        return(
            <div className="listing-show-container content">
                <div className="listing-show-title">
                    <h1>{listing.title}</h1>
                    <h4 className="reserve-block-price">
                        ${listing.price_per_night} night · <i className="fa-solid fa-star"></i> {averageRating} · {listing.num_reviews} reviews
                    </h4>
                    
                </div>
                
                {/* REPLACE */}
                
                <div id="listing-show-photos">
                    <img src={listing.photoUrl}/>
                    <img src={window.icon}/>
                    <img src={window.icon}/>
                    <img src={window.icon}/>
                    <img src={window.icon}/>
                </div>
                
                {/* REPLACE */}

                <div className="listing-show-info">
                    <div className="listing-show-offerings-block">
                        <div className="show-block-title">
                            <div>
                                <h3>{`${listing.title.split(" ").slice(0, 2).join(" ")} by ${listing.owner_id}`}</h3>
                                {/* <i class="fa-solid fa-people-group"></i> */}
                                <h4>{`${listing.max_guests} guests`} · {`${listing.num_rooms} bedrooms`} · {`${listing.num_beds} beds`} · {`${listing.num_baths} baths`}</h4>
                            </div>
                            <div className="owner-pro-pic"><img src={window.icon} /></div>
                        </div>
                        <div className="listing-description">
                            <h3>About this home</h3>
                            <p>{listing.description}</p>
                        </div>
                        <div className="listing-amenities">
                            <h3>What this place offers</h3>
                            <p>Amenity</p>
                            <p>Amenity</p>
                            <p>Amenity</p>
                            <p>Amenity</p>
                            <p>Amenity</p>
                            <p>Amenity</p>
                            <p>Amenity</p>
                            {/* {listing.amenities.map(amenity => (
                                <p> {amenity}</p>
                            ))} */}
                        </div>
                    </div>
                    <div className="listing-show-reservation-block">
                        <div className="reserve-block-listing-info">
                            <h3 className="reserve-block-price">${listing.price_per_night} <span>night</span></h3>
                            <p><i className="fa-solid fa-star"></i> {averageRating} · {listing.num_reviews} reviews</p>
                        </div>
                        <form onSubmit={this.handleSubmit} className="reserve-block-form">
                            <label className="reserve-block-input">
                                <h3>CHECK-IN</h3>
                                <input 
                                    type="date"
                                    placeholder="Add dates" 
                                />
                            </label>
                            <label className="reserve-block-input">
                                <h3>CHECKOUT</h3>
                                <input 
                                    type="date"
                                    placeholder="Add dates" 
                                />
                            </label>
                            <label className="reserve-block-input">
                                <h3>GUESTS</h3>
                                <input 
                                    type="text"
                                    placeholder="1 guest"
                                />
                            </label>
                            <button onClick={this.handleSubmit} className="reserve-block-submit">
                                Reserve
                            </button>
                            <p id="charge-notice">You won't be charged</p>
                        </form>
                        <div className="reserve-block-subtotal">
                            <div className="fee">
                                {/* replace this with the actual number of nights later */}
                                <p>${listing.price_per_night} x {this.state.num_nights} nights</p>
                                <p>${listing.price_per_night * this.state.num_nights}</p>
                            </div>
                            <div className="fee">
                                {/* replace this with the actual number of nights later */}
                                <p>Cleaning fee</p>
                                <p>${this.state.cleaning_fee}</p>
                            </div>
                            <div className="fee">
                                {/* replace this with the actual number of nights later */}
                                <p>Service fee</p>
                                <p>$0</p>
                            </div>
                        </div>
                        <div className="reserve-block-total">
                            <p>Total before taxes</p>

                        </div>
                    </div>
                </div>

                {/* REVIEWS */}

                <div className="listing-show-map">
                    <h2>Where you'll be</h2>
                    <h4>{listing.address}</h4>
                    <ListingMap></ListingMap>
                </div>
            </div>
        )
    }
}

export default ListingShow