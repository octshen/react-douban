import * as actionTypes from '../constants/index'
const update = (data) => {
  return {
      type: actionTypes.USERINFO_UPDATE,
      data
  }
}

const addUser = (data) => {
  return {
      type: actionTypes.ADDUSER,
      data
  }
}

const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  let userInfo = {
    email: '',
    token: '',
    name: ''
  }
  dispatch(update(userInfo))
}

const register = (data) => (dispatch, getState) => {
  let users = getState().userInfo.users
  let isRegister = users.find(item => item.email === data.email)
  let status = isRegister ? false : true

  return new Promise((resolve, reject) => {
    status
      ? setTimeout(() => {
         dispatch(addUser(data))
         resolve('register')
      }, 500)
      : reject('already register')
  })
}

const userLogin = (data) => (dispatch, getState) => {
  let status = true
  let { users } = getState().userInfo
  let hasRegister = users.find(item => item.email === data.email)
  if (!hasRegister) status = false
  return new Promise((resolve, reject) => {
    status  
      ? setTimeout(() => {
        let currentUserInfo = users.find(item => item.email === data.email && item.token === data.token)
        !currentUserInfo && reject('login fail')
        currentUserInfo && dispatch(update(currentUserInfo)) && resolve('login')
      }, 800)
      : reject('no register')
  })
}
export { userLogin, logout, register }