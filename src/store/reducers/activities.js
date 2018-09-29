import * as actionTypes from '../constants';

const initState = {
  skip: 0,
  events: [],
  eventItem: {}
}

const events = (state = initState.events, action) => {
  switch (action.type) {
    case actionTypes.LOADMORE:
      return [
        ...state,
        ...action.data.events
      ]
    default:
      return state
  }
}
const eventItem = (state = initState.eventItem, action) => {
  switch (action.type) {
    case actionTypes.GETSINGLEEVENT:
      return {
        ...state, ...action.data
      }
    default:
      return state
  }
}

export default function activities (state = initState, action) {
  switch (action.type) {
    case actionTypes.LOADMORE:
      return {
        skip: action.data.skip,
        events: events(state.events, action),
        eventItem: eventItem(state.eventItem, action)
      }
    case actionTypes.GETSINGLEEVENT:
      return {
        skip: action.data.skip,
        events: events(state.events, action),
        eventItem: eventItem(state.eventItem, action)
      }
    default:
      return state
  }
   
}