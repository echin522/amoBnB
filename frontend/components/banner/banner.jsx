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
                <Link to="/" className="header-link"><h1>amobnb</h1></Link>
                <SearchBar/>
                <div className='user-options'>
                    <p>User options</p>
                </div>
            </div>
        )
    }
}

export default Banner;