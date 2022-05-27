import React from "react";
import ListingMap from "../listing_map/listing_map";
import Amenities from "./listing_amenities";
import ListingReviewsItem from "../listing_reviews/listing_reviews_item_container";
import ProgressBar from "./progress_bar";
import ReviewModal from "../listing_reviews/reviews_modal";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            start_date: "",
            end_date: "",
            num_guests: "",
            listing_id: this.props.match.params.listingId,
        }
        this.reviews = [];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId)
        document.querySelector("header").style.position = "static";
        document.querySelector(".banner").style.maxWidth = "1300px";
        console.log(this.props)
    }
    
    componentWillUnmount() {
        document.querySelector("header").style.position = "sticky";
        document.querySelector(".banner").style.removeProperty("max-width");
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const reservation = Object.assign({}, this.state);
        this.props.createReservation(reservation);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteListing(this.props.listing.id);
        this.props.history.push("/");
    }

    renderDeleteButton() {
        if (!this.props.currentUser) return
        if (this.props.listing.owner_id === this.props.currentUser.id) {
            return (
                <button onClick={this.handleDelete} id="delete-button">
                    Delete this listing
                </button>
            )
        }
    }

    render() {
        let listing = this.props.listing;
        if (!listing) return null;
        let numNights;
        if (!this.state.start_date || !this.state.end_date) { 
            numNights = 0
        } else {
            let startDate = new Date(this.state.start_date);
            let endDate = new Date(this.state.end_date);
            numNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
        }

        // I tried using typeof and I would vastly prefer refactoring htis to use it
        // but I am too lazy and the project is due in 13 hours
        let averageRating = parseFloat(parseInt(listing.average_rating)).toFixed(2);
        if (averageRating === "NaN") {averageRating = "-"};
        let averageCleanlinessRating = parseFloat(parseInt(listing.average_cleanliness_rating)).toFixed(2);
        if (averageCleanlinessRating === "NaN") {averageCleanlinessRating = "-"};
        let averageCheckInRating = parseFloat(parseInt(listing.average_check_in_rating)).toFixed(2);
        if (averageCheckInRating === "NaN") {averageCheckInRating = "-"};
        let averageLocationRating = parseFloat(parseInt(listing.average_location_rating)).toFixed(2);
        if (averageLocationRating === "NaN") {averageLocationRating = "-"};
        let averageCommunicationRating = parseFloat(parseInt(listing.average_communication_rating)).toFixed(2);
        if (averageCommunicationRating === "NaN") {averageCommunicationRating = "-"};
        let averageAccuracyRating = parseFloat(parseInt(listing.average_accuracy_rating)).toFixed(2);
        if (averageAccuracyRating === "NaN") {averageAccuracyRating = "-"};
        let averageValueRating = parseFloat(parseInt(listing.average_value_rating)).toFixed(2);
        if (averageValueRating === "NaN") {averageValueRating = "-"};
        let subTotal = listing.price_per_night * numNights;
        if (subTotal === "NaN") {subTotal = "-"};
        let cleaningFee = parseFloat(listing.price_per_night * 0.08);
        if (numNights < 1) {
            cleaningFee = 0;
        }
        let serviceFee = parseFloat(subTotal * 0.035);
        let totalFee = (subTotal + cleaningFee + serviceFee).toFixed(2)
        
        console.log(averageAccuracyRating)

        return (
            <div className="listing-show-container content">
                <ReviewModal listingId={listing.id}/>
                <div className="listing-show-title">
                    <h1>{listing.title}</h1>
                    <h4 className="reserve-block-price">
                        ${listing.price_per_night} night · <i className="fa-solid fa-star"></i> {averageRating} · {listing.num_reviews} reviews
                    </h4>
                </div>
                
                <div id="listing-show-photos">
                    {Object.values(listing.photoUrls).map((photoUrl, i) => (
                        <img 
                            src={photoUrl}
                            key={`photo${i}`}
                        />
                    ))}
                </div>

                <div className="listing-show-info">
                    <div className="listing-show-offerings-block">
                        <div className="show-block-title">
                            <div>
                                <h1>{`${listing.title.split(" ").slice(0, 2).join(" ")} by ${listing.owner.fname} ${listing.owner.lname}`}</h1>
                                <h4>{`${listing.max_guests} guests`} · {`${listing.num_rooms} bedrooms`} · {`${listing.num_beds} beds`} · {`${listing.num_baths} baths`}</h4>
                            </div>
                            <div className="owner-pro-pic"><img src={listing.owner.proPicUrl} /></div>
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
                                    value={this.state.start_date}
                                    onChange={this.update("start_date")}
                                    placeholder="Add dates" 
                                />
                            </label>
                            <label className="reserve-block-input">
                                <h2>CHECKOUT</h2>
                                <input 
                                    type="date"
                                    value={this.state.end_date}
                                    onChange={this.update("end_date")}
                                    placeholder="Add dates" 
                                />
                            </label>
                            <label className="reserve-block-input">
                                <h2>GUESTS</h2>
                                <input 
                                    type="text"
                                    value={this.state.num_guests}
                                    onChange={this.update("num_guests")}
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
                                <p>${subTotal}</p>
                            </div>
                            <div className="fee">
                                {/* replace this with the actual number of nights later */}
                                <p>Cleaning fee</p>
                                <p>${cleaningFee.toFixed(2)}</p>
                            </div>
                            <div className="fee">
                                {/* replace this with the actual number of nights later */}
                                <p>Service fee</p>
                                <p>${serviceFee.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="fee reserve-block-total">
                            <p>Total before taxes</p>
                            <p>${totalFee}</p>
                        </div>
                    </div>
                </div>

                {/* REVIEWS */}
                <div className="reviews-overview">
                    <div className="reviews-header">
                        <h2>Reviews</h2>
                        <h4 id="leave-review" onClick={() => this.props.openModal("review")}>Leave a review</h4>
                    </div>
                    <p id="reviews-scores">
                        <i className="fa-solid fa-star"></i> {averageRating} · {listing.num_reviews} reviews
                    </p>
                    <ul id="reviews-metrics">
                        <li className="metric">
                            <p>Cleanliness</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress={averageCleanlinessRating}
                            />
                        </li>
                        <li className="metric">
                            <p>Communication</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress={averageCommunicationRating}
                            />
                        </li>
                        <li className="metric">
                            <p>Check-in</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress={averageCheckInRating}
                            />
                        </li>
                        <li className="metric">
                            <p>Accuracy</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress={averageAccuracyRating}
                            />
                        </li>
                        <li className="metric">
                            <p>Location</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress={averageLocationRating}
                            />
                        </li>
                        <li className="metric">
                            <p>Value</p>
                            <ProgressBar 
                                bgcolor="black"
                                progress={averageValueRating}
                            />
                        </li>
                    </ul>
                </div>
                <ul className="listing-reviews">
                    {Object.values(this.props.reviews).map(review => (
                        <ListingReviewsItem
                            key={review.id}
                            reviewId={review.id}
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
                {this.renderDeleteButton()}
            </div>
        )
    }
}

export default ListingShow