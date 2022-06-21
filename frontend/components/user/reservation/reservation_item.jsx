import React from "react";

class ReservationItem extends React.Component {
    constructor(props) {
        super(props);
    }

    toMonth(monthNum) {
        const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        return months[monthNum];
    }
    
    render() {
        const { reservation } = this.props;
        const listing = reservation.listing;
        let startRes = reservation.start_date.split("-");
        let endRes = reservation.end_date.split("-");
        let startDate = `${this.toMonth(parseInt(startRes[1]))} ${startRes[2]}`
        let endDate = `${this.toMonth(parseInt(endRes[1]))} ${endRes[2]}`

        return (
            <li className="reservation-item">
                <div className="reservation-item-header">
                    <h1>{listing.location}</h1>
                    <h3>Listing hosted by {listing.owner_name}</h3>
                </div>
                <div className="reservation-body">
                    <div className="reservation-dates">
                        <p className="dates">
                            { `${startDate} - ${endDate}` }
                        </p>
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
                <img className="reservation-image" src={listing.photoUrls[0]}/>
            </li>
        )
    }
}

export default ReservationItem;