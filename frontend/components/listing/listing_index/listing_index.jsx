import React from "react";
import ListingIndexItem from "./listing_index_item";
import ListingMap from "../listing_map/listing_map"

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { listings, filters } = this.props;
        console.log(listings)
        let indexHeader = filters
            ? <h1 className="filtered-listing-index-header">{Object.length(listings)} stays in this area</h1>
            : <h1 className="unfiltered-listing-index-header">Our top stays</h1>
        let areaMap = filters
            ? <ListingMap />
            : null
        
        return (
            <div className="listing-index-container">
                {indexHeader}
                <div className="listing-index-and-map">
                    {listings.map(listing => (
                        <ListingIndexItem 
                            listing={listing}
                            key={`listing-${listing.id}`}
                        />
                    ))}
                    {areaMap}
                </div>
            </div>
        )
    }
}

export default ListingIndex