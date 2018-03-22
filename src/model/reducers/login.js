import {LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS} from "../actions/login";

let initialState = {
    loading: false,
    error: null,
    isLogin: false,
    data: {}
};

export default function loginPageData(state = initialState, action) {
    switch (action.type) {
        case LOGIN_LOADING:
            return {...state, loading: action.payload};
        case LOGIN_FAILURE:
            return {...state, error: null};
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {isLogin: true, data: action.payload});
        default:
            return state;
    }
}