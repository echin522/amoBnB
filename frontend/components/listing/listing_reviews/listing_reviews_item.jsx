import React from "react";

class ListingReviewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review.id);
    }

    toMonth(monthNum) {
        const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        return months[parseInt(monthNum) - 1];
    }

    renderReviewButtons() {
        if (this.props.reviewer_id === this.props.currentUserId) {
            return (
                <div className="review-buttons">
                    <div onClick={this.handleDelete} className="review-button delete-button">
                        Delete this review
                    </div>
                    <div className="review-button edit-button">
                        Edit this review
                    </div>
                </div>
            )
        }
    }
    
    render() {
        const { body } = this.props;
        const reviewer = this.props.review.reviewer;
        let date = this.props.review.created_at.split("-");
        console.log("date", date)
        return(
            <li className="review" key={this.props.key}>
                <div className="reviewer-header">
                    <img
                        className="reviewer-propic"
                        // src={reviewer.proPicUrl}
                    />
                    <div>
                        <h3 className="reviewer-name">{`${reviewer.fname}`}</h3>
                        <p className="review-create-date">
                            {
                                `${this.toMonth(date[1])} ${date[0]}`
                            }
                        </p>
                        {/* <p className="review-create-date">{listing.date_created}</p> */}
                    </div>
                    {this.renderReviewButtons()}
                </div>
                <p className="review-body">{body}</p>
            </li>
        )
    }
}

export default ListingReviewsItem