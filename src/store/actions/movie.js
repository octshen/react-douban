import * as actionTypes from '../constants'
import axios from '@/utils/axios'

const updateMovie = (data, mtype) => {
  let type = null
  switch (mtype) {
    case 'hot':
      type = actionTypes.M_UPDATEHOT
      break
    case 'new':
      type = actionTypes.M_UPDATENEW
      break
    case 'top': 
      type = actionTypes.M_UPDATETOP
      break
    default:
      type = actionTypes.M_UPDATEHOT 
  }
  return {
    type,
    data
  }
}

const getMovie = () => (dispatch) => {
  const getHot = () => axios.get('movie/in_theaters?count=8')
  const getNew = () => axios.get('movie/coming_soon?count=8')
  const getTop = () => axios.get('movie/top250?count=8')
  return axios.all([getHot(), getNew(), getTop()]).then(
    axios.spread((hotData, newData, topData) => {
      dispatch(updateMovie(hotData.data.subjects, 'hot'))
      dispatch(updateMovie(newData.data.subjects, 'new'))
      dispatch(updateMovie(topData.data.subjects, 'top'))
    })
  )
}

export { getMovie }