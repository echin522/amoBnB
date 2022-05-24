import React from "react";
import ListingMap from "../listing_map/listing_map";
import Amenities from "./listing_amenities";
import ListingReviewsItem from "./listing_reviews_item_container";
import ProgressBar from "./progress_bar";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            start_date: "",
            end_date: "",
            num_nights: 3,
            num_guests: 1,
            listing_id: this.props.match.params.listingId,
            cleaning_fee: 0,
            reviewModal: false,
            // user_id: this.props.currentUser.id,
        }
        this.reviews = []
        this.toggleReviewModal = this.toggleReviewModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId)
            .then(listing => this.setState({ cleaning_fee: Math.ceil(listing.price_per_night * 0.05) }));
        document.querySelector("header").style.position = "static";
    }
    
    componentWillUnmount() {
        document.querySelector("header").style.position = "sticky";
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // const reservation = Object.assign({}, this.state);
        // this.props.processForm(user).then(this.props.closeModal);
    }

    toggleReviewModal() {
        this.setState({reviewModal: !this.state.reviewModal})
    }

    render() {
        let listing = this.props.listing;
        if (!listing) return null;
        let averageRating = parseFloat(listing.average_rating).toFixed(2);
        
        return(
            <div className="listing-show-container content">
                {/* {this.state.reviewModal && (
                    <ReviewModal />
                )} */}
                <div className="listing-show-title">
                    <h1>{listing.title}</h1>
                    <h4 className="reserve-block-price">
                        ${listing.price_per_night} night · <i className="fa-solid fa-star"></i> {averageRating} · {listing.num_reviews} reviews
                    </h4>
                    
                </div>
                
                {/* REPLACE */}
                
                <div id="listing-show-photos">
                    {Object.values(listing.photoUrls).map(photoUrl => (
                        <img src={photoUrl}/>
                    ))}
                </div>
                
                {/* REPLACE */}

                <div className="listing-show-info">
                    <div className="listing-show-offerings-block">
                        <div className="show-block-title">
                            <div>
                                <h1>{`${listing.title.split(" ").slice(0, 2).join(" ")} by ${listing.owner.fname} ${listing.owner.lname}`}</h1>
                                {/* <i class="fa-solid fa-people-group"></i> */}
                                <h4>{`${listing.max_guests} guests`} · {`${listing.num_rooms} bedrooms`} · {`${listing.num_beds} beds`} · {`${listing.num_baths} baths`}</h4>
                            </div>
                            <div className="owner-pro-pic"><img src={window.icon} /></div>
                        </div>
                        <div className="listing-description">
                            <h2>About this home</h2>
                            <p>{listing.description}</p>
                        </div>
                        <Amenities/>
                    </div>
                    <div className="listing-show-reservation-block">
                        <div className="reserve-block-listing-info">
                            <h2 className="reserve-block-price">${listing.price_per_night} <span>night</span></h2>
                            <p><i className="fa-solid fa-star"></i> {averageRating} · {listing.num_reviews} reviews</p>
                        </div>
                        <form onSubmit={this.handleSubmit} className="reserve-block-form">
                            <label className="reserve-block-input">
                                <h2>CHECK-IN</h2>
                                <input 
                                    type="date"
                                    placeholder="Add dates" 
                                />
                            </label>
                            <label className="reserve-block-input">
                                <h2>CHECKOUT</h2>
                                <input 
                                    type="date"
                                    placeholder="Add dates" 
                                />
                            </label>
                            <label className="reserve-block-input">
                                <h2>GUESTS</h2>
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
                <div className="reviews-overview">
                    <div className="reviews-header">
                        <h2>Reviews</h2>
                        <h4 id="leave-review" onClick={this.toggleReviewModal}>Leave a review</h4>
                    </div>
                    <p id="reviews-scores">
                        <i className="fa-solid fa-star"></i> {averageRating} · {listing.num_reviews} reviews
                    </p>
                    <ul id="reviews-metrics">
                        <li className="metric">
                            <p>Cleanliness</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress="76"
                            />
                        </li>
                        <li className="metric">
                            <p>Communication</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress="42"
                            />
                        </li>
                        <li className="metric">
                            <p>Check-in</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress="71"
                            />
                        </li>
                        <li className="metric">
                            <p>Accuracy</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress="23"
                            />
                        </li>
                        <li className="metric">
                            <p>Location</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress="98"
                            />
                        </li>
                        <li className="metric">
                            <p>Value</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress="12"
                            />
                        </li>
                    </ul>
                </div>
                <ul className="listing-reviews">
                    {Object.values(this.props.reviews).map(review => (
                        <ListingReviewsItem
                            key={review.id}
                            reviewer_id={review.reviewer_id}
                            rating={review.rating}
                            body={review.body}
                        />
                    ))}
                </ul>

                <div className="listing-show-map">
                    <h2>Where you'll be</h2>
                    <h4>{listing.address}</h4>
                    <ListingMap
                        listings={{listings: listing}}
                        updateFilter={this.props.updateFilter}
                        singleListing={true}
                    />
                </div>
            </div>
        )
    }
}

export default ListingShow