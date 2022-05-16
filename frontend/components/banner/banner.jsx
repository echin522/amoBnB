import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar_container';

class Banner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='banner'>
                <header>
                    <Link to="/" className="header-link">
                        <h1>amobnb</h1>
                    </Link>
                </header>
                <div className='search-bar'>Search Bar
                    <SearchBar/>
                </div>
                
            </div>
        )
    }
}

export default Banner;