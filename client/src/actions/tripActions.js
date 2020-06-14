import { baseUrl } from "../config";

export const MAKE_RESERVATION = "justcamp/trips/MAKE_RESERVATION";
export const GET_RESERVATION = "justcamp/trips/GET_RESERVATION";

const bookReservation = () => ({ type: MAKE_RESERVATION });
const getReservation = (reservations) => ({ type: GET_RESERVATION, reservations });

export const makeReservation = (user_id, campsite_id, start_date, end_date, totalCost) => async (dispatch) => {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, campsite_id, start_date, end_date, totalCost })
    };

    const response = await fetch(`${baseUrl}/reservations`, options);

    if (response.ok) {
        dispatch(bookReservation());
    }
}

export const fetchReservation = (user_id) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/reservations/${user_id}`);

    if (response.ok) {
        const reservations = await response.json();
        dispatch(getReservation(reservations));
    }
}
