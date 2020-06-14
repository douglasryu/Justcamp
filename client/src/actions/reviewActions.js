import { baseUrl } from "../config";

export const CREATE_REVIEW = "justcamp/trips/CREATE_REVIEW";
export const GET_REVIEW = "justcamp/trips/GET_REVIEW";

const makeReview = () => ({ type: CREATE_REVIEW });
const getReview = (reviews) => ({ type: GET_REVIEW, reviews });

export const createReview = (user_id, campsite_id, title, body) => async (dispatch) => {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, campsite_id, title, body })
    };

    const response = await fetch(`${baseUrl}/reviews`, options);

    if (response.ok) {
        dispatch(makeReview());
    }
}

export const fetchReview = (user_id) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/reviews/${user_id}`);

    if (response.ok) {
        const reviews = await response.json();
        dispatch(getReview(reviews));
    }
}
