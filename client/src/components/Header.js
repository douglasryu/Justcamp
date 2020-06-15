import React, { useState } from "react";
import Mainsearch from "./Mainsearch";

const Header = props => {
    return (
        <div className="header__container">
            <div className="header__maintext">Find yourself outside.</div>
            <div className="header__subtext">Book unique camping experiences on over <strong>300,000</strong> campsites, cabins, RV parks, public parks and more.</div>
            <Mainsearch {...props} />
        </div>
    );
};

export default Header;
