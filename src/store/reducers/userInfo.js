import * as actionTypes from '../constants'
import { combineReducers } from 'redux'
const lsCurrentUser = localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo'))
const lsUsers = localStorage.getItem('users') && JSON.parse(localStorage.getItem('users'))

const initUser = lsCurrentUser || null
const initUsers = lsUsers || []

const users = (state = initUsers, action) => {
  switch (action.type) {
    case actionTypes.ADDUSER:
      return [...state, action.data]
    default:
      return state
  }
}

const currentUser = (state = initUser, action) => {
  switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
      return {
        // ...state,
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

