import * as actionTypes from '../constants'
import { combineReducers } from 'redux'
const lsCurrentUser = localStorage.getItem('userInfo')

const initUserState = lsCurrentUser || {
  email: '',
  token: '',
  name: ''
}

const users = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDUSER:
      return [...state, action.data]
    default:
      return state
  }
}

const currentUser = (state = initUserState, action) => {
  switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

const userInfo = combineReducers({
  users,
  currentUser
})

export default userInfo

