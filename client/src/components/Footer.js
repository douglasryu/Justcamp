import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => (
    <div className="footer__border">
        <div className="footer__container">
            <div className="footer__logo">JUSTC<img src={require("../assets/app_logos/logoblack.svg")} alt="logo" className="footer__icon" />MP</div>
            <div className="footer__sections">
                <div className="footer__section1">
                    <div className="footer__section-header">Portfolio</div>
                    <a href="https://douglasryu.github.io/" className="footer__section-item">Visit my Website</a>
                </div>
                <div className="footer__mq--wrap">
                    <div className="footer__mq--mobile">
                        <div className="createdby">Created by</div>
                        <a className="createdby__name" href="https://github.com/douglasryu/Justcamp">Douglas Ryu <GitHubIcon className="createdby__github" /> Repository</a>
                        <a href="https://douglasryu.github.io/" className="footer__section-item footer__visit">Visit my Website</a>
                    </div>
                    <div className="footer__section2">
                        <div className="footer__section-header">Projects</div>
                        <a href="https://elbowsapp.herokuapp.com/" className="footer__section-item">Elbows</a>
                        <a href="https://rockinhood.herokuapp.com/" className="footer__section-item">Rockinhood</a>
                        <a href="https://aa-flash-app.herokuapp.com/" className="footer__section-item">Flash</a>
                    </div>
                </div>
                <div className="footer__section3">
                    <div className="footer__section-header">Justcamp is everywhere you want to camp.</div>
                    <div className="footer__section-text">Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more.</div>
                </div>
            </div>
            <div className="footer__mq--desktop">
                <div className="createdby">Created by</div>
                <a className="createdby__name" href="https://github.com/douglasryu/Justcamp">Douglas Ryu <GitHubIcon className="createdby__github" /> Repository</a>
            </div>
        </div>
        <div className="footer__end">
            <div className="footer__end-left">© 2020 Justcamp, Inc. All rights reserved.</div>
            <div className="footer__end-right">Justcamp is created with <span role="img" aria-label="love">❤️</span> and hope for our future</div>
        </div>

    </div>
);

export default Footer;
