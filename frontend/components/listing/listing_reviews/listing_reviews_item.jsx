import React from "react";

class ListingReviewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewer: "",
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchUser(this.props.reviewer_id)
            .then(reviewer => this.setState({reviewer: reviewer}));
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.reviewId);
    }

    renderDeleteButton() {
        if (this.props.reviewer_id === this.props.currentUserId) {
            return (
                <div onClick={this.handleDelete} id="review-delete-button">
                    Delete this review
                </div>
            )
        }
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
                    {this.renderDeleteButton()}
                </div>
                <p className="review-body">{body}</p>
            </li>
        )
    }
}

export default ListingReviewsItem