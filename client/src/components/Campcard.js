import React from "react";
import { Link } from "react-router-dom";

const Campcard = props => {
    const mainImageId = props.camp.id;

    return (
        <>
            <Link to={`/camps/${mainImageId}`}>
                <article className="campentry">
                    <div className="campentry__photo-container">
                        <img src={`https://justcamp.s3.us-east-2.amazonaws.com/${parseInt(mainImageId, 10) * 3 - 2}.jpg`} alt={mainImageId} className="campentry__photo" />
                    </div>
                    <div className="campentry__text-contianer">
                        <div className="campentry__text-header">{props.camp.campName}</div>
                        <div className="campentry__text">{props.camp.campSummary}</div>
                        <div className="campentry__price">${props.camp.price}/night</div>
                    </div>
                </article>
            </Link>
            {/* <Route path={`/camps/${mainImageId}`} component={CampDetailPage} /> */}
        </>
    );
};

export default Campcard;
