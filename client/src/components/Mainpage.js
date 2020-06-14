import React, { useEffect } from "react";

import Header from "./Header";
import Camplist from "./Camplist";
import About from "./About";
import Press from "./Press";
import Footer from "./Footer";

const Mainpage = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Header {...props} />
            <Camplist />
            <About />
            <Press />
            <Footer />
        </>
    );
}

export default Mainpage;
