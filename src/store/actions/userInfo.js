import * as actionTypes from '../constants/index'
const update = (data) => {
  return {
      type: actionTypes.USERINFO_UPDATE,
      data
  }
}
const validateLogin = (data) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    let status = true
    status  
      ? setTimeout(() => {
        dispatch(update(data))
        resolve('update')
      }, 500)
      : reject('login fail')
  })
}
export { update, validateLogin }