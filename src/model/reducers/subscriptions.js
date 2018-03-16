import {CRUD_GET_SUBSCRIPTIONS_SUCCESS} from "../actions/subscriptions";

let initialState = {};

export default function trialCars(state = initialState, action) {
  switch (action.type) {
    case CRUD_GET_SUBSCRIPTIONS_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

// 6080 3201 2200 155279