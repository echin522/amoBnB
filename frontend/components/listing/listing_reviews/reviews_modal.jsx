import React from "react";
import { connect } from "react-redux";
import { createReview } from "../../../actions/listing_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";

class ReviewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            cleanliness_rating: 0,
            check_in_rating: 0,
            location_rating: 0,
            communication_rating: 0,
            accuracy_rating: 0,
            value_rating: 0,
            listing_id: this.props.listingId,
        }
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

    render() {
        if (!this.props.modal) {
            return null;
        }
        return (
            <div id="reviews-modal-bg" onClick={this.props.closeModal}>
                <div className="new-review-container" >
                    <div className="modal-header">
                        <div onClick={this.props.closeModal} className="x">X</div>
                        <h3>Leave a review!</h3>
                    </div>
                    <form onClick={e => e.stopPropagation()} onSubmit={this.handleSubmit}>
                        {/* Make this more DRY one day :) */}
                        <div className="rating-container">
                            <h4>Cleanliness</h4>
                            <div className="star-wrapper">
                                <input onChange={this.update("cleanliness_rating")} type="checkbox" className="star" id="oneClean" value={5}/>
                                <label htmlFor="oneClean" className="fas fa-star s1"></label>
                                <input onChange={this.update("cleanliness_rating")} type="checkbox" className="star" id="twoClean" value={4}/>
                                <label htmlFor="twoClean" className="fas fa-star s2"></label>
                                <input onChange={this.update("cleanliness_rating")} type="checkbox" className="star" id="threeClean" value={3}/>
                                <label htmlFor="threeClean" className="fas fa-star s3"></label>
                                <input onChange={this.update("cleanliness_rating")} type="checkbox" className="star" id="fourClean" value={2}/>
                                <label htmlFor="fourClean" className="fas fa-star s4"></label>
                                <input onChange={this.update("cleanliness_rating")} type="checkbox" className="star" id="fiveClean" value={1}/>
                                <label htmlFor="fiveClean" className="fas fa-star s5"></label>
                            </div>
                        </div>
                        <div className="rating-container">
                            <h4>Check-in</h4>
                            <div className="star-wrapper">
                                <input onChange={this.update("check_in_rating")} type="checkbox" className="star" id="oneCheck" value={5}/>
                                <label htmlFor="oneCheck" className="fas fa-star s1"></label>
                                <input onChange={this.update("check_in_rating")} type="checkbox" className="star" id="twoCheck" value={4}/>
                                <label htmlFor="twoCheck" className="fas fa-star s2"></label>
                                <input onChange={this.update("check_in_rating")} type="checkbox" className="star" id="threeCheck" value={3}/>
                                <label htmlFor="threeCheck" className="fas fa-star s3"></label>
                                <input onChange={this.update("check_in_rating")} type="checkbox" className="star" id="fourCheck" value={2}/>
                                <label htmlFor="fourCheck" className="fas fa-star s4"></label>
                                <input onChange={this.update("check_in_rating")} type="checkbox" className="star" id="fiveCheck" value={1}/>
                                <label htmlFor="fiveCheck" className="fas fa-star s5"></label>
                            </div>
                        </div>
                        <div className="rating-container">
                            <h4>Location</h4>
                            <div className="star-wrapper">
                                <input onChange={this.update("location_rating")} type="checkbox" className="star" id="oneLocation" value={5}/>
                                <label htmlFor="oneLocation" className="fas fa-star s1"></label>
                                <input onChange={this.update("location_rating")} type="checkbox" className="star" id="twoLocation" value={4}/>
                                <label htmlFor="twoLocation" className="fas fa-star s2"></label>
                                <input onChange={this.update("location_rating")} type="checkbox" className="star" id="threeLocation" value={3}/>
                                <label htmlFor="threeLocation" className="fas fa-star s3"></label>
                                <input onChange={this.update("location_rating")} type="checkbox" className="star" id="fourLocation" value={2}/>
                                <label htmlFor="fourLocation" className="fas fa-star s4"></label>
                                <input onChange={this.update("location_rating")} type="checkbox" className="star" id="fiveLocation" value={1}/>
                                <label htmlFor="fiveLocation" className="fas fa-star s5"></label>
                            </div>
                        </div>
                        <div className="rating-container">
                            <h4>Communication</h4>
                            <div className="star-wrapper">
                                <input onChange={this.update("communication_rating")} type="checkbox" className="star" id="oneCommunication" value={5}/>
                                <label htmlFor="oneCommunication" className="fas fa-star s1"></label>
                                <input onChange={this.update("communication_rating")} type="checkbox" className="star" id="twoCommunication" value={4}/>
                                <label htmlFor="twoCommunication" className="fas fa-star s2"></label>
                                <input onChange={this.update("communication_rating")} type="checkbox" className="star" id="threeCommunication" value={3}/>
                                <label htmlFor="threeCommunication" className="fas fa-star s3"></label>
                                <input onChange={this.update("communication_rating")} type="checkbox" className="star" id="fourCommunication" value={2}/>
                                <label htmlFor="fourCommunication" className="fas fa-star s4"></label>
                                <input onChange={this.update("communication_rating")} type="checkbox" className="star" id="fiveCommunication" value={1}/>
                                <label htmlFor="fiveCommunication" className="fas fa-star s5"></label>
                            </div>
                        </div>
                        <div className="rating-container">
                            <h4>Accuracy</h4>
                            <div className="star-wrapper">
                                <input onChange={this.update("accuracy_rating")} type="checkbox" className="star" id="oneAccuracy" value={5}/>
                                <label htmlFor="oneAccuracy" className="fas fa-star s1"></label>
                                <input onChange={this.update("accuracy_rating")} type="checkbox" className="star" id="twoAccuracy" value={4}/>
                                <label htmlFor="twoAccuracy" className="fas fa-star s2"></label>
                                <input onChange={this.update("accuracy_rating")} type="checkbox" className="star" id="threeAccuracy" value={3}/>
                                <label htmlFor="threeAccuracy" className="fas fa-star s3"></label>
                                <input onChange={this.update("accuracy_rating")} type="checkbox" className="star" id="fourAccuracy" value={2}/>
                                <label htmlFor="fourAccuracy" className="fas fa-star s4"></label>
                                <input onChange={this.update("accuracy_rating")} type="checkbox" className="star" id="fiveAccuracy" value={1}/>
                                <label htmlFor="fiveAccuracy" className="fas fa-star s5"></label>
                            </div>
                        </div>
                        <div className="rating-container">
                            <h4>Value</h4>
                            <div className="star-wrapper">
                                <input onChange={this.update("value_rating")} type="checkbox" className="star" id="oneValue" value={5}/>
                                <label htmlFor="oneValue" className="fas fa-star s1"></label>
                                <input onChange={this.update("value_rating")} type="checkbox" className="star" id="twoValue" value={4}/>
                                <label htmlFor="twoValue" className="fas fa-star s2"></label>
                                <input onChange={this.update("value_rating")} type="checkbox" className="star" id="threeValue" value={3}/>
                                <label htmlFor="threeValue" className="fas fa-star s3"></label>
                                <input onChange={this.update("value_rating")} type="checkbox" className="star" id="fourValue" value={2}/>
                                <label htmlFor="fourValue" className="fas fa-star s4"></label>
                                <input onChange={this.update("value_rating")} type="checkbox" className="star" id="fiveValue" value={1}/>
                                <label htmlFor="fiveValue" className="fas fa-star s5"></label>
                            </div>
                        </div>
                        <label>
                            <textarea id="review-description" onChange={this.update("body")}></textarea>
                        </label>
                        <button id="submit-review-button">
                            Submit Review
                        </button>
                    </form>
                </div>
        </div>
        )
    }
}

const mSTP = ( state, ownProps) => ({
    modal: state.ui.modal,
    listingId: ownProps.listingId,
    errors: state.errors.session,
});

const mDTP = dispatch => ({
    processForm: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(ReviewModal);