import React, { useEffect } from "react";
import { connect } from "react-redux";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import Mainpage from "./components/Mainpage";
import CampDetailPage from "./components/CampDetailPage";
import ProfilePage from "./components/ProfilePage";
import ReviewPage from "./components/ReviewPage";

import { loadToken } from "./actions/sessionActions";
import { fetchCamps } from "./actions/campActions";
import { BrowserRouter, Route } from "react-router-dom";

const App = props => {
    const userId = props.userId || window.localStorage.getItem("USER_ID");

    useEffect(() => {
        props.loadToken();
    });

    useEffect(() => {
        (async () => {
            await props.fetchCamps();
        })();
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <BrowserRouter>
            <Modal />
            <Navigation />
            <Route exact path="/" component={Mainpage} />
            <Route path="/camps/:campId" component={CampDetailPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/reviews/:campId" component={ReviewPage} />
        </BrowserRouter>
    );
};

const mapStateToProps = state => {
    return {
        userId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadToken: () => dispatch(loadToken()),
        fetchCamps: () => dispatch(fetchCamps()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    App
);
