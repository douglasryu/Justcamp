import React, { useEffect } from "react";
import { NavLink, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProfileTrips from "./ProfileTrips";
import ProfileReviews from "./ProfileReviews";

const ProfileHeader = props => {
    const tripsArray = (Object.values(props.trips));
    const reviewsArray = (Object.values(props.reviews));
    const firstName = String(props.firstName);
    const lastName = String(props.lastName);
    const displayName = firstName === "demo" ? "Guest" : firstName === "null" ? "" : `${firstName} ${lastName[0]}.`;

    return (
        <div className="profile__page">
            <div className="profile__left">
                <div className="profile__userinfo-container">
                    <div className="profile__userinfo-picname">
                        <img className="profile__pic" src={require("../assets/app_logos/logoblack.svg")} alt="profile-logo" />
                        <div className="profile__name">{displayName}</div>
                    </div>
                    <div className="profile__userinfo-since"><span role="img" aria-label="love">❤️</span> Justcamper since 2020</div>
                    <div className="profile__userinfo-from"><img className="profile__userinfo-from-icon" src={require("../assets/camp_icons/from.png")} alt="profile-from" /> Where are you from?</div>
                    <div className="profile__userinfo-bio"><span className="profile__userinfo-intro">Intro:</span> Introduce yourself to the community! Add a short bio...</div>
                </div>
                <div className="profile__trusted">
                    <div className="profile__trusted-header">Trusted Justcamper</div>
                    <div className="profile__trusted-email"><img className="profile__trusted-icon" src={require("../assets/camp_icons/check.png")} alt="profile-trusted" /> Email address</div>
                    <div className="profile__trusted-fbconnect">
                        <div className="profile__trusted-fb">facebook</div>
                        <div className="profile__trusted-connect">+Connect</div>
                    </div>
                </div>
            </div>
            <div className="profile__right">
                <div className="profile__tripreview-container">
                    <div className="profile__trip">
                        <div className="profile__trip-num">{tripsArray.length}</div>
                        <NavLink to="/profile/trips" className="profile__trip-text">Trips</NavLink>
                    </div>
                    <div className="profile__review">
                        <div className="profile__review-num">{reviewsArray.length}</div>
                        <NavLink to="/profile/reviews" className="profile__review-text">Reviews</NavLink>
                    </div>
                </div>
                <div className="profile__tripreview-item-container">
                    <Switch>
                        <ProfileReviews exact path="/profile/reviews" />
                        <ProfileTrips path="/profile/" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        trips: state.trips,
        reviews: state.reviews,
        firstName: state.session.firstName,
        lastName: state.session.lastName
    };
};

export default connect(
    mapStateToProps,
    null
)(
    ProfileHeader
);
