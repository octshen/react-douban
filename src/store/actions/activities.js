import * as actionTypes from '../constants'
import axios from '@/utils/axios'
const updateEvents = (data) => {
  return {
      type: actionTypes.LOADMORE,
      data
  }
}
const updateSingleEvents = (data) => {
  return {
    type: actionTypes.GETSINGLEEVENT,
    data
  }
}
const getSingleEvent = (id) => (dispatch) => {
  let url = `/event/${id}`
  return axios.get(url)
    .then(res => {
      dispatch(updateSingleEvents(res.data))
      return res.data
    })
    .catch(err => {
      console.warn('getSingleEvent', err)
    })
}

const loadMore = () => (dispatch, getState) => {
  let skip = getState().activities.skip
  let url = `/event/list?loc=108288&start=${skip}&count=5`
  return axios.get(url)
    .then(res => {
      let { events } = res.data
      skip += 5
      dispatch(updateEvents({events, skip}))
      return events
    })
    .catch(err => {
      console.error('loadMore', err)
    })
}

export { loadMore, getSingleEvent }