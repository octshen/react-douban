import * as actionTypes from '../constants'
import axios from '@/utils/axios'

const updateSearchResult = (data, stype) => {
  let type = null
  switch (stype) {
    case 'movie':
      type = actionTypes.UPDATESEARCHMOVIE
      break
    case 'book':
      type = actionTypes.UPDATESEARCHBOOK
      break
    case 'music': 
      type = actionTypes.UPDATESEARCHMUSIC
      break
    default:
      type = null
  }
  return {
    type,
    data
  }
}

const getSearchResult = ({queryStr}) => (dispatch) => {
  const getMovie = () => axios.get(`movie/search?q=${queryStr}&count=3`)
  const getBook = () => axios.get(`book/search?q=${queryStr}&count=3`)
  const getMusic = () => axios.get(`music/search?q=${queryStr}&count=3`)
  return axios.all([getMovie(), getBook(), getMusic()]).then(
    axios.spread((movieData, bookData, musicData) => {
      dispatch(updateSearchResult(movieData.data.subjects, 'movie'))
      dispatch(updateSearchResult(bookData.data.books, 'book'))
      dispatch(updateSearchResult(musicData.data.musics, 'music'))
    })
  )
}

export { getSearchResult }
