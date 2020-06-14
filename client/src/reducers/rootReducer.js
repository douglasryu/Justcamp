import { combineReducers } from "redux";
import sessionReducer from "../reducers/sessionReducer";
import modalReducer from "../reducers/modalReducer";
import campReducer from "../reducers/campReducer";
import tripReducer from "../reducers/tripReducer";
import reviewReducer from "../reducers/reviewReducer";


const rootReducer = combineReducers({
    session: sessionReducer,
    modal: modalReducer,
    camps: campReducer,
    trips: tripReducer,
    reviews: reviewReducer
});

export default rootReducer;
