import React, { useEffect } from "react";
import { connect } from "react-redux";

import ReviewHeader from "./ReviewHeader";
import Footer from "./Footer";


const ReviewPage = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <ReviewHeader {...props} />
            <Footer />
        </>
    );
}

const mapStateToProps = state => {
    return {
        userId: state.session.id
    };
};

export default connect(
    mapStateToProps,
    null
)(
    ReviewPage
);
