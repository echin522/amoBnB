import React from "react";
import FormBackground from "./form_background";
import MarkerManager from "../../../util/marker_manager";
import { withRouter } from "react-router-dom";

class ListingForm extends React.Component {
    constructor(props) {
        super(props);
        // this.coords = { lat: props.lat, lng: props.lng };
        this.state = props.listing;

        this.inputNames = {
            title: "Name of home",
            description: "Brief description",
            address: "Address",
            location: "Location",
            max_guests: "Max Occupancy",
            num_rooms: "Number of rooms",
            num_beds: "Number of beds",
            num_baths:"Number of baths",
            price_per_night: "Price per night",
        }

        this.navigateToListing = this.navigateToListing.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let mapOptions;
        (this.props.formType === 'update')
            ? (mapOptions = {
                center: { 
                    lat: this.state.lat, 
                    lng: this.state.lng, 
                },    
                zoom: 15
            }, this.setState({ photoFiles: [] }))
            : mapOptions = {
                center: {
                    lat: 37.773972, 
                    lng: -122.431297,
                },
                zoom: 12,
            };
        document.querySelector(".banner").classList.add("hidden");
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.map.addListener("click", (e) => {
            this.setState({lat: e.latLng.lat(), lng: e.latLng.lng()})
        })
        this.MarkerManager = new MarkerManager(this.map, "", 'pin');
        // add conditional to have the click listener only when creating new form
        
        
        if (this.props.formType === 'update' ){
            this.MarkerManager.createMarkerFromForm(this.state.lat, this.state.lng);
        } else {
            this.mapHeader = 'Place pin on map to get coordinates';
            this.map.addListener("click", (e) => {
                this.MarkerManager.createMarkerFromForm(this.state.lat, this.state.lng);
            });
        }
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

        if (this.props.formType === "update") formData.append(`listing[id]`, this.state.id);
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

        if (this.props.formType === "update") {
            this.props.action(formData, this.state.id)
                .then(listing => this.props.history.push(`/listings/${listing.listing.id}`));
        } else {
            this.props.action(formData)
                .then(listing => this.props.history.push(`/listings/${listing.listing.id}`));
        }
    }

    formInput = ( type, field ) => (
        <label key={field} className="listing-field">
            <label htmlFor={field}>{this.inputNames[field]}</label>
            <input 
                id={field}
                type={type}
                value={this.state[field]}
                onChange={this.update(field)}
                min="0"
            />
        </label>
    )

    formComponent() {
        return(
            <div id="form-content">
                {/* <div id="form-first-half"> */}
                    {this.formInput("text", "title")}
                    {this.formInput("text", "address")}
                    {this.formInput("text", "location")}
                    <label key="description" className="listing-field">
                        <label htmlFor={"description"}>{this.inputNames["description"]}</label>
                        <textarea 
                            id="description"
                            type="textarea"
                            value={this.state["description"]}
                            onChange={this.update("description")}
                        />
                    </label>
                        {/* {preview} */}
                {/* </div> */}
                {/* <div id="form-second-half"> */}
                    {this.formInput("number", "max_guests")}
                    {this.formInput("number", "num_rooms")}
                    {this.formInput("number", "num_beds")}
                    {this.formInput("number", "num_baths")}
                    {this.formInput("number", "price_per_night")}
                {/* </div> */}
            </div>               
        )
    }

    renderErrors() {

    }

    render() {
        // Eventually this will be a carousel of preview images or something
        // const preview = this.state.photoUrls
        //     ? <img src={this.state.photoUrls} height="200px" width="200px" />
        //     : null;

        // if ()

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
                            {this.formComponent()}
                            <div className="form-button-holder">
                                {/* <h3>Image preview </h3> */}
                            <h3 className="button-holder">Please add at least five pictures</h3>
                            <label id="photo-drop-area">
                                <input 
                                    type="file" 
                                    className="new-photo-button" 
                                    multiple
                                    onChange={this.handleFile.bind(this)}
                                />
                            </label>
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