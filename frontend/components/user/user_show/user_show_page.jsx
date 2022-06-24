import React from "react";
import ReservationItem from "../reservation/reservation_item_container";

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (parseInt(this.props.match.params.userId) === this.props.currentUser.id) {
            this.props.fetchReservations(this.props.currentUser.id)
        }
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    render() {
        const { currentUser, fetchListing, deleteReservation, updateReservation, reservations } = this.props;
        if (parseInt(this.props.match.params.userId) !== currentUser.id) return <div id="user-show-content">You must be logged in, idiot</div>
        return (
            <div id="user-show-content">
                <section className="about-user">
                    <h2>Hello, {this.capitalize(currentUser.fname)} {this.capitalize(currentUser.lname)}!</h2>
                </section>
                <section className="trips">
                    <h2>Upcoming Trips</h2>
                    <div>
                        <ul className="user-trips">
                            {reservations.map(reservation => (
                                    <ReservationItem
                                        key={reservation.id}
                                        reservation={reservation}
                                        deleteReservation={deleteReservation}
                                        updateReservation={updateReservation}
                                    />
                            ))}
                        </ul>
                    </div>
                </section>
                <section>
                    <h2>Past Trips</h2>
                </section>
            </div>
        )
    }
}

export default UserShow;