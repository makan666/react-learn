import {CHANGE_SELECTED} from "../actions/tabs";

export default function loginPageData(state = {}, action) {
    switch (action.type) {
        case CHANGE_SELECTED:
            return Object.assign({}, state, {id: action.payload});
        default:
            return state;
    }
}