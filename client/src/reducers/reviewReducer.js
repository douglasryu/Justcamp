import { CREATE_REVIEW, GET_REVIEW } from "../actions/reviewActions";

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case CREATE_REVIEW:
            return state;
        case GET_REVIEW:
            let newState = {};
            action.reviews.reviews.forEach(review => newState[review.id] = review);
            return Object.assign(nextState, newState);
        default:
            return state;
    }
};

export default reviewReducer;
