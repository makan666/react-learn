import {CRUD_GET_LIST_SUCCESS} from "../actions/trialCars";

let initialState = {pageNum: 1, hasMore: false};

export default function trialCars(state = initialState, action) {
  switch (action.type) {
    case CRUD_GET_LIST_SUCCESS:
        let trialCars = {}
        trialCars.count = action.payload.count
        trialCars.links = action.payload.links
        trialCars.data = (state.data || []).concat(action.payload.data)
        if (action.payload.links.next) {
            state.pageNum++
            state.hasMore = true
        } else {
            state.hasMore = false
        }
      return Object.assign({}, state, trialCars);
    default:
      return state;
  }
}
