import {CRUD_GET_LIST_SUCCESS} from "../actions/trialCars";

let initialState = {trialCars: {}, loadMore: {pageNum: 1, loading: true, hasMore: true, noMore: true}};

export default function trialCars(state = initialState, action) {
  switch (action.type) {
    case CRUD_GET_LIST_SUCCESS:
        let trialCars = {}
        trialCars.count = action.payload.count
        trialCars.links = action.payload.links
        trialCars.data = (state.trialCars.data || []).concat(action.payload.data)
        state.trialCars = trialCars
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