import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/sessionActions";

import { openModal } from "../actions/modalActions";

const Navigation = props => {
    const token = props.token;

    if (!token) {
        return (
            <>
                <nav className="nav-container">
                    <Link to="/" className="nav__logo">JUSTC<img src={require("../assets/app_logos/logoblack.svg")} alt="logo" className="nav__icon" />MP</Link>
                    <a href="https://github.com/douglasryu" className="nav__item">Github</a>
                    <a href="https://www.linkedin.com/in/douglasryu" className="nav__item">Linkedin</a>
                    <a href="https://angel.co/u/douglasryu" className="nav__item">AngelList</a>
                    <button onClick={() => props.openModal("login")} className="nav__item">Log in</button>
                    <button onClick={() => props.openModal("signup")} className="nav__item nav__host">Sign up</button>
                </nav>
            </>
        );
    } else {
        return (
            <>
                <nav className="nav-container">
                    <Link to="/" className="nav__logo">JUSTC<img src={require("../assets/app_logos/logoblack.svg")} alt="logo" className="nav__icon" />MP</Link>
                    <a href="https://github.com/douglasryu" className="nav__item">Github</a>
                    <a href="https://www.linkedin.com/in/douglasryu" className="nav__item">Linkedin</a>
                    <a href="https://angel.co/u/douglasryu" className="nav__item">AngelList</a>
                    <Link to="/profile" className="nav__item">Trips</Link>
                    <button onClick={() => props.logout()} className="nav__item nav__host">Sign out</button>
                </nav>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.session.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    Navigation
);
