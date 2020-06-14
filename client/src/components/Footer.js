import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => (
    <div className="footer__border">
        <div className="footer__container">
            <div className="footer__logo">JUSTC<img src={require("../assets/app_logos/logoblack.svg")} alt="logo" className="footer__icon" />MP</div>
            <div className="footer__sections">
                <div className="footer__section1">
                    <div className="footer__section-header">About us</div>
                    <div className="footer__section-item">Careers</div>
                    <div className="footer__section-item">Journal</div>
                    <div className="footer__section-item">Gift Cards</div>
                    <div className="footer__section-item">Contact</div>
                    <div className="footer__section-item">Camper FAQ</div>
                </div>
                <div className="footer__section2">
                    <div className="footer__section-header">Hosting</div>
                    <div className="footer__section-item">Becoming a Host</div>
                    <div className="footer__section-item">Is my land a fit?</div>
                    <div className="footer__section-item">Insurance</div>
                    <div className="footer__section-item">Standards</div>
                    <div className="footer__section-item">Hosting FAQ</div>
                </div>
                <div className="footer__section3">
                    <div className="footer__section-header">Justcamp is everywhere you want to camp.</div>
                    <div className="footer__section-text">Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more.</div>
                </div>
            </div>
            <div className="createdby">Created by</div>
            <a className="createdby__name" href="https://github.com/douglasryu">Douglas Ryu <GitHubIcon className="createdby__github" /></a>
        </div>
        <div className="footer__end">
            <div className="footer__end-left">© 2020 Justcamp, Inc. All rights reserved.</div>
            <div className="footer__end-right">Justcamp is created with <span role="img" aria-label="love">❤️</span> and hope for our future</div>
        </div>

    </div>
);

export default Footer;
