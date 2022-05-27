import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            location: "",
            start_date: "",
            end_date: "",
            max_guests: "",
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchListings(this.state);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="search-bar hidden">
                <label className="location">
                    <h3>Where</h3>
                    <input
                        type="text"
                        placeholder="Search destinations"
                        onChange={this.handleChange("location")}
                    />
                </label>
                <label className="check-in">
                    <h3>Check in</h3>
                    <input 
                        type="date"
                        placeholder="Add dates" 
                        onChange={this.handleChange("start_date")}
                    />
                </label>
                <label className="check-out">
                    <h3>Check out</h3>
                    <input 
                        type="date"
                        placeholder="Add dates" 
                        onChange={this.handleChange("end_date")}
                    />
                </label>
                <label>
                    <div className="add-guests">
                        <div>
                            <h3>Who</h3>
                            <input 
                                type="text"
                                placeholder="Add guests" 
                                onChange={this.handleChange("max_guests")}
                            />
                        </div>
                        <button onClick={this.handleSubmit} className="banner-search-button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                </label>
            </form>
        )
    }
}

export default SearchBar;