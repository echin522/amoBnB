import React from "react";

class ReservationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.reservation;
        this.state.edit = false;
        this.renderReservationButtons = this.renderReservationButtons.bind(this);
        this.openReservationForm = this.openReservationForm.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
        this.redirectToListing = this.redirectToListing(this);
    }

    toMonth(monthNum) {
        const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        return months[monthNum - 1];
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    
    renderDatesOrDateInputs() {
        if (!this.state.edit) {
            let reservation = this.props.reservation;
            let startRes = reservation.start_date.split("-");
            let endRes = reservation.end_date.split("-");
            let startDate = `${this.toMonth(parseInt(startRes[1]))} ${startRes[2]}`;
            let endDate = `${this.toMonth(parseInt(endRes[1]))} ${endRes[2]}`;
            return(
                <>
                    <p className="dates">{ `${startDate} -`}</p>
                    <p>{endDate}</p>
                </>
            )
        } else {
            return (
                <>
                    <input 
                        type="date"
                        value={this.state.start_date}
                        onChange={this.update("start_date")}
                    />
                    <input 
                        type="date"
                        value={this.state.end_date}
                        onChange={this.update("end_date")}
                    />
                </>
            )
        }
    }

    renderReservationButtons() {
        if (!this.state.edit) {
            return (
                <div className="reservation-buttons">
                    <p onClick={() => this.props.deleteReservation(this.state.id)}>Delete this reservation</p>
                    <p onClick={this.openReservationForm}>Edit this reservation</p>
                </div>
            )
        } else {
            return (
                <div className="reservation-buttons">
                    <p></p>
                    <p onClick={this.submitEdit}>Confirm Edit</p>
                </div>
            )
        }
    }

    openReservationForm() {
        this.setState({ edit: !this.state.edit });
    }

    submitEdit(e) {
        e.preventDefault();
        const reservation = Object.assign({}, this.state);
        this.props.updateReservation(reservation)
            .then(this.openReservationForm());
    }

    redirectToListing() {
        // this.props.history.push(`/listings/${reservation.isting_id}`);
    }
    
    render() {
        const { reservation } = this.props;
        const listing = reservation.listing;
        let endRes = reservation.end_date.split("-");
        
        return (
            <li className="reservation-item">
                <div className="reservation-item-header">
                    <h1>{listing.location}</h1>
                    <h3>Listing hosted by {listing.owner_name}</h3>
                </div>
                <div className="reservation-body">
                    <div className="reservation-dates">
                        {this.renderDatesOrDateInputs()}
                        <p className="year">{endRes[0]}</p>
                    </div>
                    <div className="reservation-address">
                        <p className="address">
                            {listing.address}
                        </p>
                        <p className="country">
                            United States
                        </p>
                    </div>
                </div>
                {this.renderReservationButtons()}
                <img
                    className="reservation-image"
                    src={listing.photoUrls[0]}
                    onClick={this.redirectToListing}
                />
            </li>
        )
    }
}

export default ReservationItem;