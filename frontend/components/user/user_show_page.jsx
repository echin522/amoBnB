import React from "react";

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (parseInt(this.props.match.params.userId) !== this.props.currentUser.id) {
            this.props.fetchReviews(this.props.currentUser.id)
                .then(reviews => console.log(reviews))
            
        }
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    render() {
        let currentUser = this.props.currentUser;
        if (parseInt(this.props.match.params.userId) !== currentUser.id) return <div id="user-show-content">You must be logged in, idiot</div>
        let tripsContainer;
        // if () {

        // }
        console.log(this.state)
        return (
            <div id="user-show-content">
                <div className="trips">
                    <h2>Upcoming Trips</h2>
                    
                </div>
                <div className="about-user">
                    <h2>Hello, {this.capitalize(currentUser.fname)} {this.capitalize(currentUser.lname)}!</h2>
                </div>
                <div className="">
                    Unfortunately, I ran out of time :(
                </div>
            </div>
        )
    }
}

export default UserShow;