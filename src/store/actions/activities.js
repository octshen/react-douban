import * as actionTypes from '../constants'
import axios from '@/utils/axios'
const updateActivities = (data) => {
  return {
      type: actionTypes.LOADMORE,
      data
  }
}

const loadmore = () => (dispatch, getState) => {
  let skip = getState().activities.skip
  let url = `/event/list?loc=108288&start=${skip}&count=5`
  return axios.get(url)
    .then((res) => {
      let { events } = res.data
      skip += 5
      let data = {
        events,
        skip
      }
      dispatch(updateActivities(data))
      return events
    })
    .catch((err) => {
      console.error('loadmore', err)
    })
}

export { update, loadmore }