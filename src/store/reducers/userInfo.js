import * as actionTypes from '../constants';
const initState = {
  email: '',
  token: ''
}

export default function userInfo (state = initState, action) {
  switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}
