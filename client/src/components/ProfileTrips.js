import React from "react";
import { connect } from "react-redux";

const ProfileTrips = props => {
    const campsListObj = props.campsList;
    const tripsArray = (Object.values(props.trips));

    return (
        <>
            {tripsArray.reverse().map(trip => {
                return (
                    <div key={trip.id} className="profiletrip__container">
                        <div className="profiletrip__header">{campsListObj[trip.campsite_id].campName}</div>
                        <div className="profiletrip__details">
                            <div className="profiletrip__img-container"><img className="profiletrip__img-img" src={require(`../assets/${trip.campsite_id}.jpg`)} alt="profiletrip-img" /></div>
                            <div className="profiletrip__text">
                                <div className="profiletrip__item">Check In: {trip.start_date.slice(0, 10)}</div>
                                <div className="profiletrip__item">Check Out: {trip.end_date.slice(0, 10)}</div>
                                <div className="profiletrip__item">Total Cost: ${trip.totalCost}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        campsList: state.camps,
        trips: state.trips
    };
};

export default connect(
    mapStateToProps,
    null
)(
    ProfileTrips
);
