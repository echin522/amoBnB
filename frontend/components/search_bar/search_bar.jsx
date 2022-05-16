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
        <form onSubmit={this.handleSubmit} className="search-bar">
            <div className="location">
                <h1>Location</h1>
                <input
                    type="text"
                    placeholder="Where are you going?"
                />
            </div>
            <div className="check-in">
                <h1>Check in</h1>
                <input 
                    type="date"
                    placeholder="Add dates" 
                />
            </div>
            <div className="check-out">
                <h1>Check out</h1>
                <input 
                    type="date"
                    placeholder="Add dates" 
                />
            </div>
            <div className="add-guests">
                <h1>Who</h1>
                <input 
                    type="text"
                    placeholder="Add guests" 
                />
            </div>
            <button onClick={this.handleSubmit} className="search-button">
                <i className="fas fa-search"/>
            </button>
        </form>
    }
}

export default SearchBar;