import React from "react";
import ListingItem from "../listing_item/listing_item";

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (parseInt(this.props.match.params.userId) === this.props.currentUser.id) {
            this.props.fetchReservations(this.props.currentUser.id)
                .then(reservations => console.log(reservations))
            // this.props.fetchListings({owner_id: this.props.currentUser.id})
            //     .then(listings => console.log(listings))
            // this.props.fetchReviews(this.props.currentUser.id)
            //     .then(reviews => console.log(reviews))
        }
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    render() {
        const { currentUser, reviews, reservations } = this.props;
        if (parseInt(this.props.match.params.userId) !== currentUser.id) return <div id="user-show-content">You must be logged in, idiot</div>
        let tripsContainer;
        // if () {

        // }
        return (
            <div id="user-show-content">
                <section className="about-user">
                    <h2>Hello, {this.capitalize(currentUser.fname)} {this.capitalize(currentUser.lname)}!</h2>
                </section>
                <section className="trips">
                    <h2>Upcoming Trips</h2>
                    <ul className="user-trips">
                        {/* {
                            reservations.map(reservation => {
                                <ListingItem
                                    reservation={reservation}

                                />
                            })
                        } */}
                    </ul>
                </section>
                <section>
                    Unfortunately, I ran out of time :(
                </section>
            </div>
        )
    }
}

export default UserShow;