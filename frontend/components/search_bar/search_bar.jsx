import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="search-bar">
                <label className="location">
                    <h3>Where</h3>
                    <input
                        type="text"
                        placeholder="Where are you going?"
                    />
                </label>
                <label className="check-in">
                    <h3>Check in</h3>
                    <input 
                        type="date"
                        placeholder="Add dates" 
                    />
                </label>
                <label className="check-out">
                    <h3>Check out</h3>
                    <input 
                        type="date"
                        placeholder="Add dates" 
                    />
                </label>
                <label>
                    <div className="add-guests">
                        <div>
                            <h3>Who</h3>
                            <input 
                                type="text"
                                placeholder="Add guests" 
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