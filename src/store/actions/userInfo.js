import * as actionTypes from '../constants/index'
const updateUserInfo = (data) => {
  return {
      type: actionTypes.USERINFO_UPDATE,
      data
  }
}
export { updateUserInfo }