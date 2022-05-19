import React from "react";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            start_date: "",
            end_date: "",
            num_guests: null,
            listing_id: this.props.listing.id,
            // user_id: this.props.currentUser.id,
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

    render() {
        let listing = this.props.listing;
        return(
            <div className="listing-show-container">
                <div className="listing-show-title">
                    <h2>{listing.title}</h2>
                    <h4>{listing.location}</h4>
                </div>
                <div className="listing-show-photos">

                </div>
                <div className="listing-show-info">
                    <div className="listing-show-offerings-block">
                        <div className="listing-title">
                            <h3>{`${listing.title.split(" ").first} by ${listing.owner_id}`}</h3>
                            <h4><i class="fa-solid fa-people-group"></i> {`${listing.num_guests} guests`} {`${listing.num_rooms} bedrooms`} {`${listing.num_beds} beds`} {`${listing.num_baths} baths`}</h4>
                        </div>
                        <div className="listing-description">
                            <h2>About this home</h2>
                            <p>{listing.description}</p>
                        </div>
                        <div className="listing-amenities">
                            <p>I'm empty!</p>
                            {/* {listing.amenities.map(amenity => (
                                <p> {amenity}</p>
                            ))} */}
                        </div>
                    </div>
                    <div className="listing-show-reservation-block">

                    </div>
                    <div className="listing-show-map">
                        <h2></h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingShow