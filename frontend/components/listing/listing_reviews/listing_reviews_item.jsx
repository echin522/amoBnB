import React from "react";

class ListingReviewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewer: "",
        }
    }
    
    componentDidMount() {
        this.props.fetchUser(this.props.reviewer_id)
            .then(reviewer => this.setState({reviewer: reviewer}));
    }
    
    render() {
        const { body } = this.props;
        const reviewer = this.state.reviewer;
        if (!this.state.reviewer) return
        return(
            <li className="review">
                <div className="reviewer-header">
                    <img className="reviewer-propic" src={reviewer.proPicUrl}/>
                    <div>
                        <h3 className="reviewer-name">{`${reviewer.user.fname}`}</h3>
                        <p className="review-create-date">May 2022</p>
                        {/* <p className="review-create-date">{listing.date_created}</p> */}
                    </div>
                </div>
                <p className="review-body">{body}</p>
            </li>
        )
    }
}

export default ListingReviewsItem