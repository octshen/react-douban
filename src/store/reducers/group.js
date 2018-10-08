import * as actionTypes from '../constants'

const group = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATEGROUP:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export default group