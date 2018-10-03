import * as actionTypes from '../constants';

const initState = {
  skip: 0,
  events: [],
  eventItem: {}
}

export default function activities (state = initState, action) {
  switch (action.type) {
    case actionTypes.UPDATESKIP:
      return {
        ...state,
        skip: action.data
      }
    case actionTypes.LOADMORE:
      return {
        ...state,
        events: [...state.events, ...action.data]
      }
    case actionTypes.GETSINGLEEVENT:
      return {
        ...state,
        eventItem: {...state.eventItem, ...action.data}
      }
    default:
      return state
  }
   
}
