import * as actionTypes from '../constants'

const initState = {
  queryRes_movie: [],
  queryRes_book: [],
  queryRes_music: []
}

const search = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.UPDATESEARCHMOVIE:
      return {
        ...state,
        queryRes_movie: [...action.data],
      }
    case actionTypes.UPDATESEARCHBOOK:
      return {
        ...state,
        queryRes_book: [...action.data],
      }
    case actionTypes.UPDATESEARCHMUSIC:
      return {
        ...state,
        queryRes_music: [...action.data],
      }
    default:
      return state
  }
}

export default search


