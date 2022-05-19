import React from "react";
import { withRouter } from "react-router-dom";

class ListingForm extends React.Component {
    constructor(props) {
        super(props);
        // this.coords = { lat: props.lat, lng: props.lng };
        this.state = {
            title: "",
            max_guests: 5,
            price_per_night: 100,
            address: "",
            description: "",
            lat: 37.798635,
            lng: -122.402313,
            // photoFile: window.defaultListingImg,
            // photoUrl: null,
        };
        this.inputNames = {
            title: "Name of Home",
            description: "Brief Description",
            max_guests: "Max Occupancy",
            price_per_night: "Price per Night",
            address: "Address",
            lat: "Latitude",
            lng: "Longitude",
        }
        this.navigateToListing = this.navigateToListing.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    navigateToListing() {
        // Change this to render the listing show page
        this.props.history.push(`/`);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        // fileReader.onloadend = () => {
        //     this.setState({ photoFile: file, photoUrl: fileReader.result });
        // }
        // if (file) {
        //     fileReader.readAsDataURL(file);
        // }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        
        // Object.keys(this.state).map(key => {
        //     formData.append(`listing[${key}]`, this.state[key])
        // });

        formData.append("listing[title]", this.state.title);
        formData.append("listing[description]", this.state.description);
        formData.append("listing[max_guests]", this.state.max_guests);
        formData.append("listing[price_per_night]", this.state.price_per_night);
        formData.append("listing[address]", this.state.address)
        formData.append("listing[lat]", this.state.lat);
        formData.append("listing[lng]", this.state.lng);

        if (this.state.photoFile) {
            formData.append("bench[photo]", this.state.photoFile)
        }

        this.props.createListing(formData);
        // this.navigateToListing();
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
        const preview = this.state.photoUrl 
            ? <img src={this.state.photoUrl} height="200px" width="200px" />
            : null;

        return (
            <div className="listing-form-container">
                <div className="listing-form">
                    <div className="home-button">
                        <i onClick={() => this.props.history.push("/")} className="fa-solid fa-chevron-left"></i>
                        <p>{/* Tell us about your home!</p> */}</p>
                        <p></p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            {Object.keys(this.state).map( field => (
                                this.formInput("text", field)
                            ))}
                        </div>
                        <div className="form-button-holder">
                            <h3>Image preview </h3>
                            {preview}
                            <h3 className="button-holder">Add a Picture</h3>
                            <input type="file" className="new-photo-button"
                                onChange={this.handleFile.bind(this)}/>
                        </div>
                        <div className="form-button-holder" id="new-listing-button-container">
                            <input type="submit" value="Looks Good" className="new-listing-button"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default ListingForm;