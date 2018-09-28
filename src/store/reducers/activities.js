import * as actionTypes from '../constants';

const initState = {
  skip: 0,
  events: []
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

export default function activities (state = initState, action) {
  switch (action.type) {
    case actionTypes.LOADMORE:
      return {
        skip: action.data.skip,
        events: events(state.events, action)
      }
    default:
      return state
  }
   
}