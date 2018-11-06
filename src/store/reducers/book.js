import * as actionTypes from '../constants'
import { combineReducers } from 'redux'

const bookTagsData = [
  {
    title: '不可饶恕的女人们',
    href: 'https://m.douban.com/doulist/35573',
    color: '#42BD56'
  },
  {
    title: '爱欲书',
    href: 'https://m.douban.com/doulist/38088147',
    color: '#FF4055'
  },
  {
    title: '他们还写侦探小说',
    href: 'https://m.douban.com/doulist/645579',
    color: '#4F9DED'
  },
  {
    line: true
  },
  {
    title: '人生识字始忧患',
    href: 'https://m.douban.com/doulist/192653',
    color: '#CC3344'
  },
  {
    title: '詩歌書店',
    href: 'https://m.douban.com/doulist/89925',
    color: '#FFAC2D'
  },
  {
    title: '尝试理解人类变化无常不可测心理相关小荐',
    href: 'https://m.douban.com/doulist/45361809',
    color: '#3BA94D'
  }
]

const novel = (state = [], action) => {
  switch (action.type) {
    case actionTypes.B_UPDATENOVEL:
      return [
        // ...state,
        ...action.data
      ]
    default:
      return state
  }
}
const reality = (state = [], action) => {
  switch (action.type) {
    case actionTypes.B_UPDATEREALITY:
      return [
        // ...state,
        ...action.data
      ]
    default:
      return state
  }
}
const travel = (state = [], action) => {
  switch (action.type) {
    case actionTypes.B_UPDATETRAVEL:
      return [
        // ...state,
        ...action.data
      ]
    default:
      return state
  }
}
const bookTags = () => ([...bookTagsData])

const book = combineReducers({
  novel, 
  reality, 
  travel, 
  bookTags
})

export default book