import * as actionTypes from '../constants'

const initState = {
  subject: {},
  classify: '',
  adImgUrl: 'http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658',
  questions: [
    {
      title: '大家为什么对国产片这么苛刻？',
      comments: '35回答'
    },
    {
      title: '有没有人喜欢凯凯王版的汤川学？',
      comments: '19回答'
    },
    {
      title: '真的有饭店的打包袋长的和优衣库一样吗？',
      comments: '11回答'
    },
    {
      title: '最后结尾 石鸿问“这道题难吗？”，唐川说“很难”，什么意思？  ?',
      comments: '7回答'
    }
  ]
}

const subject = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.UPDATESINGLESUBJECT:
      return {
        ...state,
        subject: {...state.subject, ...action.data.subject},
        classify: action.data.classify
      }
    default:
      return state
  }
}

export default subject


export const subjectMeta = (state) => {
  if (state.classify === 'movie') {
    return state.subject.year + '/' +
           state.subject.genres.join(' / ') + ' / ' +
           state.subject.casts.map(item => item.name).join(' / ') + ' / ' +
           state.subject.directors.map(item => item.name).join(' / ') + ' / ' +
           state.subject.countries.join(' / ')
  } else if (state.classify === 'book') {
    return state.subject.author.join(' / ') +
           state.subject.translator.join(' / ') + ' / ' +
           state.subject.publisher + ' / ' +
           state.subject.binding + ' / ' + state.subject.pages + ' / ' +
           state.subject.price + ' / ' + state.subject.pubdate
  }
}

export const summary = (state) => {
  if (state.subject.summary) {
    return state.subject.summary.slice(0, 120)
  }
}

export const genres = (state) => {
  if (state.classify === 'book') {
    return state.subject.tags
  } else if (state.classify === 'movie') {
    return state.subject.genres
  }
}
