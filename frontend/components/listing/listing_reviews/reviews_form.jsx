import React from "react";
import { withRouter } from "react-router-dom";

class ReviewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.processForm(review);
        this.props.closeModal();
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    renderReviewButton() {
        let button
        if (this.props.formType === "create") {
            button = <button id="submit-review-button">Submit Review</button>
        } else if (this.props.formType === "update") {
            button = <button id="submit-review-button">Edit Review</button>
        }
        return button;
    }

    starWrapperMaker(rating) {
        let title = rating.charAt(0).toUpperCase() + rating.slice(1);
        if (rating === "check_in") title = "Check-in";
        return (
            <div className="rating-container">
                <h4>{title}</h4>
                <div className="star-wrapper">
                    <input onChange={this.update(`${rating}_rating`)} type="checkbox" className="star" id={`one${rating}`} value={5}/>
                    <label htmlFor={`one${rating}`} className="fas fa-star s1"></label>
                    <input onChange={this.update(`${rating}_rating`)} type="checkbox" className="star" id={`two${rating}`} value={4}/>
                    <label htmlFor={`two${rating}`} className="fas fa-star s2"></label>
                    <input onChange={this.update(`${rating}_rating`)} type="checkbox" className="star" id={`three${rating}`} value={3}/>
                    <label htmlFor={`three${rating}`} className="fas fa-star s3"></label>
                    <input onChange={this.update(`${rating}_rating`)} type="checkbox" className="star" id={`four${rating}`} value={2}/>
                    <label htmlFor={`four${rating}`} className="fas fa-star s4"></label>
                    <input onChange={this.update(`${rating}_rating`)} type="checkbox" className="star" id={`five${rating}`} value={1}/>
                    <label htmlFor={`five${rating}`} className="fas fa-star s5"></label>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div id="review-form">
                <div className="modal-header">
                    <div onClick={this.props.closeModal} className="x">X</div>
                    <h3>Leave a review!</h3>
                </div>
                <form onClick={e => e.stopPropagation()} onSubmit={this.handleSubmit}>
                    {/* Make this more DRY one day :) */}
                    {this.starWrapperMaker("cleanliness")}
                    {this.starWrapperMaker("check_in")}
                    {this.starWrapperMaker("location")}
                    {this.starWrapperMaker("communication")}
                    {this.starWrapperMaker("accuracy")}
                    {this.starWrapperMaker("value")}
                    <label>
                        <textarea id="review-description" onChange={this.update("body")}></textarea>
                    </label>
                    {this.renderReviewButton()}
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewModal);