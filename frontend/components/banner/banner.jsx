import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar_container';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.userOptionsClicked = false;
        this.toggleUserOptions = this.toggleUserOptions.bind(this);
    }

    toggleUserOptions() {
        this.setState({ userOptionsClicked: !this.userOptionsClicked })
    }

    render() {
        console.log(this.props);
        const { currentUser, logout, openModal } = this.props
        const userOptionsToggle = this.userOptionsClicked ? 
            "user-drop-down show" :
            "user-drop-down"
        const dropDownOptions = this.props.currentUser ?
            <>
                <button onClick={() => this.props.logout()}>logout</button>
            </> :
            <>
                <button onClick={() => openModal("login")}>Login</button>
                <button onClick={() => openModal("signup")}>Sign Up</button>
            </>
        return (
            <div className='banner'>
                <Link to="/" className="header-link">
                    <h1><i className="fa-brands fa-airbnb"></i>     amobnb</h1>
                </Link>
                <SearchBar/>
                <div className='user-options'>
                    <i className="fa-solid fa-bars"></i>
                    <i className="fa-solid fa-user-astronaut"></i>
                    <div onClick={() => this.toggleUserOptions()} className={userOptionsToggle}>
                        {dropDownOptions}
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;