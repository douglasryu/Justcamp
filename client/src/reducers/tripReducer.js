import { MAKE_RESERVATION, GET_RESERVATION } from "../actions/tripActions";

const tripReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case MAKE_RESERVATION:
            return state;
        case GET_RESERVATION:
            let newState = {};
            action.reservations.reservations.forEach(reservation => newState[reservation.id] = reservation);
            return Object.assign(nextState, newState);
        default:
            return state;
    }
};

export default tripReducer;
