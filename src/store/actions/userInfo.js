import * as actionTypes from '../constants/index'
const update = (data) => {
  return {
      type: actionTypes.USERINFO_UPDATE,
      data
  }
}

const logout = () => (dispatch) => {
  localStorage.removeItem('email')
  localStorage.removeItem('token')
  localStorage.removeItem('name')
  let userInfo = {
    email: '',
    token: '',
    name: ''
  }
  dispatch(update(userInfo))
}

const validateLogin = (data) => (dispatch, getState) => {
  localStorage.setItem('email', data.email)
  localStorage.setItem('token', data.token)
  localStorage.setItem('name', 'shen')
  return new Promise((resolve, reject) => {
    let status = true
    status  
      ? setTimeout(() => {
        dispatch(update({...data, name: 'shen'}))
        resolve('update')
      }, 1000)
      : reject('login fail')
  })
}
export { update, validateLogin, logout }