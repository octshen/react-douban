import * as actionTypes from '../constants'
import axios from '@/utils/axios'

const updateBook = (data, btype) => {
  let type = null
  switch (btype) {
    case 'novel':
      type = actionTypes.B_UPDATENOVEL
      break
    case 'reality':
      type = actionTypes.B_UPDATEREALITY
      break
    case 'travel': 
      type = actionTypes.B_UPDATETRAVEL
      break
    default:
      type = actionTypes.B_UPDATENOVEL 
  }
  return {
    type,
    data
  }
}

const getBook = () => (dispatch) => {
  const getNovel = () => axios.get('book/search?q=虚构类&count=8')
  const getReality = () => axios.get('book/search?q=非虚构类&count=8')
  const getTravel = () => axios.get('book/search?q=旅行&count=8')
  return axios.all([getNovel(), getReality(), getTravel()]).then(
    axios.spread((novelData, realityData, travelData) => {
      dispatch(updateBook(novelData.data.books, 'novel'))
      dispatch(updateBook(realityData.data.books, 'reality'))
      dispatch(updateBook(travelData.data.books, 'travel'))
    })
  )
}

export { getBook }