import React from "react";
import { withRouter } from "react-router-dom";
import MarkerManager from "../../../util/marker_manager";

class ListingMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let lat =  37.773972;
        let lng = -122.431297;
        if (this.props.match.params.listingId) {
            lat = this.props.listings.listings.lat;
            lng = this.props.listings.listings.lng;
        }
        let mapOptions = {
            center: {
                lat: lat,
                lng: lng,
            },
            zoom: 13,
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    }

    componentDidUpdate() {
        if (this.props.singleListing) {
            const targetListingKey = Object.keys(this.props.listings)[0];
            const targetListing = this.props.listings[targetListingKey];
            this.MarkerManager.updateMarkers([targetListing]);
        } else {
            this.MarkerManager.updateMarkers(this.props.listings);
        }
      }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west } };
            this.props.updateFilter('bounds', bounds);
        });
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
    }

    handleMarkerClick(listing) {
        this.props.history.push(`listings/${listing.id}`);
    }

    handleClick(coords) {
        this.props.history.push({
            pathname: "listings/new",
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    render() {
        return (
            <div className="map" ref={map => this.mapNode = map}>
                Map
            </div>
        )
    }
}

export default withRouter(ListingMap);