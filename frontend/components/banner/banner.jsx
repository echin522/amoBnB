import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Banner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='banner'>
                <header>
                    <div onClick={() => this.props.history.push("/")} className="logo">
                        {/* put logo here */}
                        amogus
                    </div>
                </header>
                <div className='search-bar'>
                    Search Bar
                </div>
                
            </div>
        )
    }
}