import React from "react";

import CampDetailHeader from "./CampDetailHeader";
import Footer from "./Footer";

const CampDetailPage = props => {
    return (
        <>
            <CampDetailHeader {...props} />
            <Footer />
        </>
    );
}

export default CampDetailPage;
