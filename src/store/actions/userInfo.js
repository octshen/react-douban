import * as actionTypes from '../constants/index'
const update = (data) => {
  return {
      type: actionTypes.USERINFO_UPDATE,
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

const validateLogin = (data) => (dispatch, getState) => {
  let userInfo = {
    email: data.email,
    token: data.token,
    name: 'shen'
  }
  localStorage.setItem('userInfo', userInfo)
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