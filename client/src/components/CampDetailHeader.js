import React, { useEffect, useState } from "react";

import { fetchCamps } from "../actions/campActions";
import { openModal } from "../actions/modalActions";
import { connect } from "react-redux";
import GoogleApiWrapper from "./MapContainer";
import { makeReservation } from "../actions/tripActions";

const CampDetailHeader = props => {
    useEffect(() => {
        (async () => {
            await props.fetchCamps();
        })();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const campId = parseInt(props.match.params.campId, 10);
    const campDetailObj = props.campsList[campId];

    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [guestNumber, setGuestNumber] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (props.loginStatus) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [props.loginStatus])

    const handleCheckinDate = event => {
        setCheckInDate(event.target.value);
    }

    const handleCheckoutDate = event => {
        setCheckOutDate(event.target.value);
    }

    const handleGuestInput = event => {
        setGuestNumber(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const totalCost = daysBetween(new Date(checkInDate), new Date(checkOutDate)) * campDetailObj.price;
        props.makeReservation(props.loginStatus, campId, new Date(checkInDate), new Date(checkOutDate), totalCost);
        props.history.push("/profile");
    }

    const handleSignIn = event => {
        event.preventDefault();
        props.openModal("login");
    }

    const handleReviewButton = event => {
        event.preventDefault();
        props.history.push(`/reviews/${campId}`);
    }

    const daysBetween = (startDate, endDate) => {
        const oneDay = 1000 * 60 * 60 * 24;
        const start = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const end = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        return (start - end) / oneDay;
    }

    const imageId = campId;

    const secondImage = (imageId) => {
        if (imageId + 4 <= 15) {
            return (imageId + 4);
        } else {
            return (imageId - 4);
        }
    }

    const thirdImage = (imageId) => {
        if (imageId + 5 <= 15) {
            return (imageId + 5);
        } else {
            return (imageId - 5);
        }
    }

    if (Object.keys(props.campsList).length < 1) {
        return null;
    }

    const campfireText = props.campsList[campId].campfire ? "Campfires allowed" : "No campfire";
    const toiletText = props.campsList[campId].toilet ? "Toilet availabe" : "No toilet";
    const petText = props.campsList[campId].pet ? "Pets allowed" : "No pets";
    const waterText = props.campsList[campId].water ? "Portable water available" : "No portable water";
    const kitchentext = props.campsList[campId].kitchen ? "Kitchen available" : "No kitchen";
    const picnicText = props.campsList[campId].picnic ? "Picnic table availabe" : "No picnic table";
    const showerText = props.campsList[campId].shower ? "Showers available" : "No showers";
    const binText = props.campsList[campId].trash ? "Bins available" : "No bins";
    const wifiText = props.campsList[campId].wifi ? "Wifi available" : "No wifi";

    const checkBiking = props.campsList[campId].biking ? <div className="camp-activities__icon"><img src={require("../assets/camp_icons/biking.png")} alt="activities-icon" /><div className="camp-activities__icon-text">Biking</div></div> : null;
    const checkClimbing = props.campsList[campId].climbing ? <div className="camp-activities__icon"><img src={require("../assets/camp_icons/climbing.png")} alt="activities-icon" /><div className="camp-activities__icon-text">Climbing</div></div> : null;
    const checkFishing = props.campsList[campId].fishing ? <div className="camp-activities__icon"><img src={require("../assets/camp_icons/fishing.png")} alt="activities-icon" /><div className="camp-activities__icon-text">Fishing</div></div> : null;
    const checkHiking = props.campsList[campId].hiking ? <div className="camp-activities__icon"><img src={require("../assets/camp_icons/hiking.png")} alt="activities-icon" /><div className="camp-activities__icon-text">Hiking</div></div> : null;
    const checkOffRoading = props.campsList[campId].offRoading ? <div className="camp-activities__icon"><img src={require("../assets/camp_icons/offroading.png")} alt="activities-icon" /><div className="camp-activities__icon-text">Off-roading</div></div> : null;
    const checkSwimming = props.campsList[campId].swimming ? <div className="camp-activities__icon"><img src={require("../assets/camp_icons/swimming.png")} alt="activities-icon" /><div className="camp-activities__icon-text">Swimming</div></div> : null;
    const checkWildlife = props.campsList[campId].wildlife ? <div className="camp-activities__icon"><img src={require("../assets/camp_icons/wildlife.png")} alt="activities-icon" /><div className="camp-activities__icon-text">Wildlife watching</div></div> : null;

    return (
        <>
            <div className="invisible"></div>
            <div className="form-invisible">
                <div className="booking__form-container">
                    <form className="booking__form">
                        <div className="booking__form-price">${campDetailObj.price}</div>
                        <div className="booking__pernight">per night</div>
                        <div className="booking__logistics">
                            <div className="booking__form-checkin">Check in
                                <input className="booking__form-checkin-input" type="date" onChange={handleCheckinDate} placeholder="Select date" />
                            </div>
                            <div className="booking__form-checkout">Check out
                                <input className="booking__form-checkout-input" type="date" onChange={handleCheckoutDate} placeholder="Select date" />
                            </div>
                            <div className="booking__form-guest">Guests
                                <input className="booking__form-guest-input" type="number" onChange={handleGuestInput} placeholder="0" />
                            </div>
                        </div>
                        <div className="booking__form-subtotal-container">
                            <div className="booking__form-subtotal">Subtotal</div>
                            <div className="booking__form-subtotal-value">${daysBetween(new Date(checkInDate), new Date(checkOutDate)) * campDetailObj.price >= 0 ? daysBetween(new Date(checkInDate), new Date(checkOutDate)) * campDetailObj.price : 0}</div>
                        </div>
                        {isLoggedIn ? <button type="submit" onClick={handleSubmit} className="booking__form-button">Instant book</button> : <button onClick={handleSignIn} className="booking__form-button-signin">Sign in</button>}
                        {isLoggedIn ? <button onClick={handleReviewButton} className="booking__form-button-review">Write a Review</button> : null}
                    </form>
                </div>
            </div>
            <div className="camp-header__container">
                <button className="previous">❮</button>
                <div className="camp-header__image-container">
                    <img className="camp-header__image1" src={require(`../assets/${imageId}.jpg`)} alt="camp-pic" />
                    <img className="camp-header__image2" src={require(`../assets/${secondImage(imageId)}.jpg`)} alt="camp-pic" />
                    <img className="camp-header__image3" src={require(`../assets/${thirdImage(imageId)}.jpg`)} alt="camp-pic" />
                </div>
                <button className="next">❯</button>
                <div className="camp-header__header">{campDetailObj.campName}</div>
                <div className="camp-header__host-details">
                    <img className="camp-header__host-image" src={require("../assets/app_logos/logoblack.svg")} alt="host-pic" />
                    <div className="camp-header__hostedby">Hosted by</div>
                    <div className="camp-header__host-name">{campDetailObj.host}</div>
                    <p className="camp-header__details-summary">{campDetailObj.campDescription}</p>
                </div>
            </div>
            <div className="camp-information__container">
                <div className="camparea__container">
                    <div className="camparea__header">Campsite area
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/tent.png")} alt="camparea-icon" />
                            <div className="camparea__type">{campDetailObj.campType}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/numsites.png")} alt="camparea-icon" />
                            <div className="camparea__type">{campDetailObj.numSites}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/maxcapacity.png")} alt="camparea-icon" />
                            <div className="camparea__type">Up to {campDetailObj.maxCapacity} guests per site</div>
                        </div>
                    </div>
                    <div className="camparea__header essentials">Essentials
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/campfire.png")} alt="camparea-icon" />
                            <div className="camparea__type">{campfireText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/toilet.png")} alt="camparea-icon" />
                            <div className="camparea__type">{toiletText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/pet.png")} alt="camparea-icon" />
                            <div className="camparea__type">{petText}</div>
                        </div>
                    </div>
                    <div className="camparea__header amenities">Amenities
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/water.png")} alt="camparea-icon" />
                            <div className="camparea__type">{waterText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/kitchen.png")} alt="camparea-icon" />
                            <div className="camparea__type">{kitchentext}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/picnic.png")} alt="camparea-icon" />
                            <div className="camparea__type">{picnicText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/shower.png")} alt="camparea-icon" />
                            <div className="camparea__type">{showerText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/bin.png")} alt="camparea-icon" />
                            <div className="camparea__type">{binText}</div>
                        </div>
                        <div className="camparea__type-container">
                            <img className="camparea__icon" src={require("../assets/camp_icons/wifi.png")} alt="camparea-icon" />
                            <div className="camparea__type">{wifiText}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="camp-activities__container">
                <div className="camp-activities__header">Activities</div>
                <div className="camp-activities__text">Offered on the Host's property or nearby.</div>
                <div className="camp-activities__icon-container">
                    {checkBiking}
                    {checkClimbing}
                    {checkFishing}
                    {checkHiking}
                    {checkOffRoading}
                    {checkSwimming}
                    {checkWildlife}
                </div>
            </div>
            <div className="map-container">
                <GoogleApiWrapper lat={campDetailObj.latitude} lng={campDetailObj.longitude} />
            </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        campsList: state.camps,
        loginStatus: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCamps: () => dispatch(fetchCamps()),
        openModal: (modal) => dispatch(openModal(modal)),
        makeReservation: (user_id, campsite_id, start_date, end_date, totalCost) => dispatch(makeReservation(user_id, campsite_id, start_date, end_date, totalCost))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    CampDetailHeader
);
