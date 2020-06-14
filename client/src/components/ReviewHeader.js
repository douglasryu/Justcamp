import React, { useState } from "react";
import { connect } from "react-redux";

import { createReview } from "../actions/reviewActions";


const ReviewHeader = props => {
    const [titleInputValue, setTitleInputValue] = useState("");
    const [bodyInputValue, setBodyInputValue] = useState("");
    const campId = props.match.params.campId;
    const userId = props.userId;

    const handleTitleInput = event => {
        setTitleInputValue(event.target.value);
    }

    const handleBodyInput = event => {
        setBodyInputValue(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.createReview(userId, campId, titleInputValue, bodyInputValue);
        window.location.href = `/profile/reviews`;
    }

    return (
        <div className="reviewpage-container">
            <div className="reviewpage-form-header">Leave a Review</div>
            <form className="reviewpage-form">
                <input type="text" className="reviewpage-form-title" onChange={handleTitleInput} placeholder="Title"></input>
                <textarea type="text" className="reviewpage-form-textarea" onChange={handleBodyInput} placeholder="What do you think about the trip? Leave a review about your experience here..."></textarea>
            </form>
            <button className="reviewpage-button" onClick={handleSubmit}>Submit Review</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        createReview: (user_id, campsite_id, title, body) => dispatch(createReview(user_id, campsite_id, title, body)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    ReviewHeader
);
