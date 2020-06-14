import React, { useEffect } from "react";
import { connect } from "react-redux";

import ProfileHeader from "./ProfileHeader";
import Footer from "./Footer";
import { fetchReservation } from "../actions/tripActions";
import { fetchReview } from "../actions/reviewActions";

const ProfilePage = props => {
    const userId = props.userId || window.localStorage.getItem("USER_ID");

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        (async () => {
            await props.fetchReservation(userId);
        })();
    }, [userId]);

    useEffect(() => {
        (async () => {
            await props.fetchReview(userId);
        })();
    }, [userId]);

    return (
        <>
            <ProfileHeader {...props} />
            <Footer />
        </>
    );
}

const mapStateToProps = state => {
    return {
        userId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchReservation: (userId) => dispatch(fetchReservation(userId)),
        fetchReview: (userId) => dispatch(fetchReview(userId)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    ProfilePage
);
