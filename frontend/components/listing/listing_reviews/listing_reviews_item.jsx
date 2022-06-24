import React from "react";

class ListingReviewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.review;
        this.state.edit = false;
        this.handleDelete = this.handleDelete.bind(this);
        this.renderFormOrBody = this.renderFormOrBody.bind(this);
        this.renderReviewButtons = this.renderReviewButtons.bind(this);
        this.editReview = this.editReview.bind(this);
        this.changeEdit = this.changeEdit.bind(this);
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
                    <div className="review-button edit-button" onClick={this.changeEdit}>
                        Edit this review
                    </div>
                </div>
            )
        }
    }

    changeEdit() {
        this.setState({ edit: !this.state.edit })
    }

    renderFormOrBody() {
        if (this.state.edit) {
            return <textarea className="review-body" value={this.state.body} onChange={this.update("body")}/>
        } else {
            return <p className="review-body">{this.state.body}</p>
        }
    }

    editReview(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.updateReview(review)
            .then(this.changeEdit());
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }
    
    render() {
        const reviewer = this.props.review.reviewer;
        let date = this.props.review.created_at.split("-");
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
                            {`${this.toMonth(date[1])} ${date[0]}`}
                        </p>
                    </div>
                    {this.renderReviewButtons()}
                </div>
                <form onSubmit={this.editReview}>
                    {this.renderFormOrBody()}
                </form>
            </li>
        )
    }
}

export default ListingReviewsItem