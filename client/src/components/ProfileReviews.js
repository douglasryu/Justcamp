import React from "react";
import { connect } from "react-redux";

const ProfileReviews = props => {
    const campsListObj = props.campsList;
    const reviewsArray = (Object.values(props.reviews));

    return (
        <div className="profilereview__page">
            {reviewsArray.reverse().map(review => {
                return (
                    <div key={review.id} className="profilereview__container">
                        <div className="profilereview__header-container">
                            <div className="profilereview__header">{campsListObj[review.campsite_id].campName}</div>
                            <div className="profilereview__header-date">{review.createdAt.slice(0, 10)}</div>
                        </div>
                        <div className="profilereview__title">{review.title}</div>
                        <div className="profilereview__body">{review.body}</div>
                    </div>

                )
            })}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        campsList: state.camps,
        reviews: state.reviews
    };
};

export default connect(
    mapStateToProps,
    null
)(
    ProfileReviews
);
