import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar_container';

class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    dropDown(e) {
        if (!e.target.closest(".user-options") && !e.target.closest(".dropdown-option")) {
            document.querySelector(".user-drop-down").style.display = 'none'
            document.removeEventListener("click", this.dropDown)
        }
    }

    toggleUserOptions() {
        let userDropDown = document.querySelector(".user-drop-down");
        if (userDropDown.style.display === "none") {
            userDropDown.style.display = "flex"
            document.addEventListener("click", this.dropDown)
        } else {
            userDropDown.style.display = "none"
            document.removeEventListener("click", this.dropDown)
        }
    }

    render() {
        const { currentUser, logout, openModal } = this.props;
        let dropDownOptions = this.props.currentUser ?
            <>
                <button onClick={() => this.props.logout()} className="dropdown-option">Log out</button>
                <button onClick={() => this.props.history.push("/listings/new")} className="dropdown-option">Add your home!</button>
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
                <SearchBar/>
                <div onClick={() => this.toggleUserOptions()} className='user-options'>
                    <i className="fa-solid fa-bars"></i>
                    <i className="fa-solid fa-user-astronaut"></i>
                    <div className="user-drop-down" style={{display: "none"}}>
                        {dropDownOptions}
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;