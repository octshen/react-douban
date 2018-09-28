import * as actionTypes from '../constants';
const email = localStorage.getItem('email') || ''
const token = localStorage.getItem('token') || ''
const name = localStorage.getItem('name') || ''

const initState = {
  email,
  token,
  name
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
