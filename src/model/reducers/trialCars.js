import {CRUD_GET_LIST_SUCCESS} from "../actions/trialCars";

let initialState = {loadMore: {pageNum: 1, loading: true, hasMore: false, noMore: true}};

export default function trialCars(state = initialState, action) {
  switch (action.type) {
    case CRUD_GET_LIST_SUCCESS:
        let trialCars = {}
        trialCars.count = action.payload.count
        trialCars.links = action.payload.links
        trialCars.data = (state.data || []).concat(action.payload.data)
        if (action.payload.links.next) {
            state.loadMore.pageNum++
            state.loadMore.hasMore = true
            state.loadMore.loading = true
        } else {
            state.loadMore.hasMore = false
            state.loadMore.noMore = true
            state.loadMore.loading = false
        }
      return Object.assign({}, state, trialCars);
    default:
      return state;
  }
}

// 6080 3201 2200 155279