import * as actionTypes from '../constants'
import axios from '@/utils/axios'

const updateSingleSubject = (data, classify) => {
  let subjectData = {subject: data, classify}
  return {
    type: actionTypes.UPDATESINGLESUBJECT,
    data: subjectData
  }
}

const getSingleSubject = ({classify, id}) => (dispatch) => {
  let url = classify === 'movie' ? `${classify}/subject/${id}` : `${classify}/${id}` 
  return axios.get(url)
    .then(res => {
      dispatch(updateSingleSubject(res.data, classify))
    })
    .catch(err => {
      console.warn('getSingleSubject', err)
    })
}

export { getSingleSubject }
