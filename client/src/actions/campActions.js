import { baseUrl } from '../config';

export const LOAD_CAMPS = "justcamp/campData/LOAD_CAMPS";

const loadCamps = list => ({ type: LOAD_CAMPS, list });

export const fetchCamps = () => async (dispatch) => {

    const response = await fetch(`${baseUrl}/camps`);

    if (response.ok) {
        const list = await response.json();
        dispatch(loadCamps(list));
    }
}
