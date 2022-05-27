import React from "react";
import FormBackground from "./form_background";
import { withRouter } from "react-router-dom";

class ListingForm extends React.Component {
    constructor(props) {
        super(props);
        // this.coords = { lat: props.lat, lng: props.lng };
        this.state = {
            title: "",
            description: "",
            address: "",
            location: "San Francisco",
            lat: 37.798635,
            lng: -122.402313,
            max_guests: 0,
            num_rooms: 0,
            num_beds: 0,
            num_baths: 0,
            price_per_night: 0,
            photoFiles: [],
            // photoFile: window.defaultListingImg,
            // photoUrl: null,
        };

        this.inputNames = {
            title: "Name of home",
            address: "Address",
            description: "Brief description",
            max_guests: "Max Occupancy",
            num_rooms: "Number of rooms",
            num_beds: "Number of beds",
            num_baths:"Number of baths",
            price_per_night: "Price per night",
            lat: "Latitude",
            lng: "Longitude",
        }
        this.navigateToListing = this.navigateToListing.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.querySelector(".banner").classList.add("hidden");
        let mapOptions = {
            center: {
                lat: 37.773972,
                lng: -122.431297,
            },
            zoom: 12,
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.map.addListener("click", (e) => {
            this.setState({lat: e.latLng.lat(), lng: e.latLng.lng()})
        })
    }
    
    componentWillUnmount() {
        document.querySelector(".banner").classList.remove("hidden");
    }

    navigateToListing() {
        // Change this to render the listing show page
        this.props.history.push(`/listings`);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleFile(e) {
        this.state.photoFiles.push(...e.currentTarget.files);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append(`listing[title]`, this.state.title);
        formData.append(`listing[description]`, this.state.description);
        formData.append(`listing[address]`, this.state.address);
        formData.append(`listing[location]`, this.state.location);
        formData.append(`listing[lat]`, this.state.lat);
        formData.append(`listing[lng]`, this.state.lng);
        formData.append(`listing[max_guests]`, this.state.max_guests);
        formData.append(`listing[num_rooms]`, this.state.num_rooms);
        formData.append(`listing[num_beds]`, this.state.num_beds);
        formData.append(`listing[num_baths]`, this.state.num_baths);
        formData.append(`listing[price_per_night]`, this.state.price_per_night);

        this.state.photoFiles.forEach(photo => {
            formData.append(`listing[photos][]`, photo);
        });

        this.props.createListing(formData)
            .then(listing => this.props.history.push(`/listings/${listing.listing.id}`))
    }

    formInput = ( type, field ) => (
        <div key={field} className="listing-field">
            <label>{this.inputNames[field]}</label>
            <input 
                type={type}
                value={this.state[field]}
                onChange={this.update(field)}
            />
        </div>
    )

    render() {
        const preview = this.state.photoUrls
            ? <img src={this.state.photoUrls} height="200px" width="200px" />
            : null;

        return (
            <>
                <FormBackground/>
                <div className="listing-form-container">
                    <div id="map-container">
                        <h1>Tell us about your home!</h1>
                        <div className="map" ref={map => this.mapNode = map}>
                            Map
                        </div>
                    </div>
                    <div className="listing-form">
                        <div className="home-button" onClick={() => this.props.history.push("/")}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                {Object.keys(this.state).map( field => {
                                    let type;
                                    typeof (this.state[field]) === "string" ? type = "text" : type = "number"
                                    return this.formInput(type, field)
                                })}
                            </div>
                            <div className="form-button-holder">
                                <h3>Image preview </h3>
                                {preview}
                                <h3 className="button-holder">Please add at least five pictures</h3>
                                <input type="file" className="new-photo-button" multiple
                                    onChange={this.handleFile.bind(this)}/>
                            </div>
                            <div className="form-button-holder" id="new-listing-button-container">
                                <input type="submit" value="Looks Good" className="new-listing-button"/>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}


export default ListingForm;