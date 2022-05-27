/* global google:false */
import Marker from "../components/map/map_marker";
class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = [];
        this.icon = icon;
        this.hoverIcon = icon;
    }
  
    clearMarkers() {
        this.markers.forEach(marker => {
            marker.setMap(null);
        })
    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId]
    }

    updateMarkers(listings) {
        const listingsObj = {};
        listings.forEach(listing => listingsObj[listing.id] = listing);
    
        listings
            .filter(listing => !this.markers[listing.id])
            .forEach(newListing => this.createMarkerFromListing(newListing, this.handleClick))
    
        Object.keys(this.markers)
            .filter(listingId => !listingsObj[listingId])
            .forEach((listingId) => this.removeMarker(this.markers[listingId]))
    }
  
    createMarkerFromListing(listing) {
        const position = new google.maps.LatLng(listing.lat, listing.lng);
        this.icon = {
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        };

        const marker = new google.maps.Marker({
            position,
            map: this.map,
            listingId: listing.id,
            // icon: this.icon,
        });

        marker.addListener('click', () => this.handleClick(listing));
        this.markers[marker.listingId] = marker;
    }

    createMarkerFromForm(lat, lng) {
        this.clearMarkers();
        const position = new google.maps.LatLng(lat, lng);
        
        this.icon = {
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        };
        
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            icon: this.icon
        });

        this.markers.push(marker);
    };
  
    removeMarker(marker) {
            this.markers[marker.listingId].setMap(null);
            delete this.markers[marker.listingId];
        }
  }
  
  export default MarkerManager;
  