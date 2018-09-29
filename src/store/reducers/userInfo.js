import * as actionTypes from '../constants';
const lsUserInfo = localStorage.getItem('userInfo')

const initState = lsUserInfo || {
  email: '',
  token: '',
  name: ''
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
