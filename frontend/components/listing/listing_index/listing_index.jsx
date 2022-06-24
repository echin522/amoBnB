import React from "react";
import ListingIndexItem from "./listing_index_item";
import ListingMap from "../listing_map/listing_map"

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        const { listings, filters, updateFilter } = this.props;
        let indexHeader = filters
            ? <h1 className="filtered-listing-index-header">{Object.length(listings)} stays in this area</h1>
            : <h1 className="unfiltered-listing-index-header">Our top stays</h1>
        // let areaMap = filters
        //     ? <ListingMap 
        //         listings={listings}
        //         updateFilter={updateFilter}
        //         singleListing={false}
        //     />
        //     : null
        
        return (
            <>
                <div className="listing-index-container content">
                    {indexHeader}
                    <div className="listing-index-and-map">
                        {listings.map((listing, idx) => {
                        if (idx > 23) return;
                        return (
                            <ListingIndexItem 
                                listing={listing}
                                updateFilter={updateFilter}
                                key={`listing-${listing.id}`}
                            />
                        )})}
                        {/* {areaMap} */}
                        
                    </div>
                </div>
                <ListingMap 
                    listings={listings}
                    updateFilter={updateFilter}
                    singleListing={false}
                />
            </>
        )
    }
}

export default ListingIndex