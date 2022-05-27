import React from "react";

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div id="user-show-content">
                <div className="trips">
                    <h2>Trips</h2>

                </div>
            </div>
        )
    }
}

export default UserShow;