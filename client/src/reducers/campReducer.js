import { LOAD_CAMPS } from "../actions/campActions";

const campReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case LOAD_CAMPS:
            let newState = {};
            action.list.campSites.forEach(camp => newState[camp.id] = camp);
            return Object.assign(nextState, newState);
        default:
            return state;
    }
};

export default campReducer;
