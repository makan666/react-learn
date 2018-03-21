import {CRUD_GET_SALES_SUCCESS} from "../actions/sales";

let initialState = {pageNum: 1, hasMore: false};

export default function sales(state = initialState, action) {
  switch (action.type) {
    case CRUD_GET_SALES_SUCCESS:
        let sales = {}
        sales.count = action.payload.count
        sales.links = action.payload.links
        sales.data = (state.data || []).concat(action.payload.data)
        if (action.payload.links.next) {
            state.pageNum++
            state.hasMore = true
        } else {
            state.hasMore = false
        }
      return Object.assign({}, state, sales);
    default:
      return state;
  }
}
