import React from "react";
import { connect } from "react-redux";
import { createReview } from "../../../actions/listing_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";

class ReviewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            body: "",
            listing_id: this.props.match.params.listingId,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.processForm(review);

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
                        <p>Leave a review!</p>
                    </div>
                    <form onClick={e => e.stopPropagation()} onSubmit={this.handleSubmit}>
                        <div className="star-wrapper">
                            <input onChange={this.update("rating")} type="checkbox" className="star" id="one" value={5}/>
                            <label htmlFor="one" className="fas fa-star s1"></label>
                            <input onChange={this.update("rating")} type="checkbox" className="star" id="two" value={4}/>
                            <label htmlFor="two" className="fas fa-star s2"></label>
                            <input onChange={this.update("rating")} type="checkbox" className="star" id="three" value={3}/>
                            <label htmlFor="three" className="fas fa-star s3"></label>
                            <input onChange={this.update("rating")} type="checkbox" className="star" id="four" value={2}/>
                            <label htmlFor="four" className="fas fa-star s4"></label>
                            <input onChange={this.update("rating")} type="checkbox" className="star" id="five" value={1}/>
                            <label htmlFor="five" className="fas fa-star s5"></label>
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
    errors: state.errors.session,
});
  
const mDTP = dispatch => ({
    processForm: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal()),
})
  
export default connect(mSTP, mDTP)(ReviewModal);