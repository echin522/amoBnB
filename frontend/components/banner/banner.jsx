import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    dropDown(e) {
        // if (!e.target.closest(".search-bar") && !e.target.closest("#mini-search-bar")) {
            // document.getElementById("mini-search-bar").classList.remove("hidden");
            document.querySelector(".user-drop-down").classList.remove("hidden");
            document.removeEventListener("click", this.dropDown);
        // }
    }

    dropSearch(e) {
        if (!e.target.closest(".search-bar") && !e.target.closest("#mini-search-bar")) {
            document.getElementById("mini-search-bar").classList.remove("hidden");
            document.querySelector(".search-bar").classList.add("hidden");
            document.removeEventListener("click", this.dropSearch);
        }
    }
    
    toggleUserOptions() {
        document.querySelector(".user-drop-down").classList.toggle("hidden");
        // document.querySelector(".user-drop-down").classList.add("hidden");
        // document.addEventListener("click", this.dropDown);
    }
    
    toggleSearchBar() {
        document.getElementById("mini-search-bar").classList.add("hidden")
        document.querySelector(".search-bar").classList.remove("hidden");
        document.querySelector(".content").addEventListener("click", this.dropSearch);
    }

    render() {
        const { currentUser, logout, openModal } = this.props;
        let dropDownOptions = this.props.currentUser ?
            <>
                <button onClick={() => this.props.history.push("/listings/new")} className="dropdown-option">Become a host!</button>
                <button onClick={() => this.props.history.push(`/users/${this.props.currentUser}`)} className="dropdown-option">Profile</button>
                <button onClick={() => this.props.logout()} className="dropdown-option">Log out</button>
            </> :
            <>
                <button onClick={() => openModal("login")} className="dropdown-option">Log In</button>
                <button onClick={() => openModal("signup")} className="dropdown-option">Sign Up</button>
            </>
        return (
            <div className='banner'>
                <Link to="/" className="header-link">
                    <img className='banner-icon' src={window.icon}/>
                    <h1>amobnb</h1>
                </Link>
                <div id='mini-search-bar' onClick={() => this.toggleSearchBar()}>
                    <p>Find your perfect getaway</p>
                    <span>
                        <i className="fas fa-search"></i>
                    </span>
                </div>
                <div onClick={() => this.toggleUserOptions()} className='user-options'>
                    <i className="fa-solid fa-bars"></i>
                    <i className="fa-solid fa-user-astronaut"></i>

                    <div className="user-drop-down hidden">
                        {dropDownOptions}
                    </div>

                </div>
            </div>
        )
    }
}

export default Banner;