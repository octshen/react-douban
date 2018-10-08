const nameSpace = 'main'
export const LOADING_CHANGE = `${nameSpace}/LOADING_CHANGE`
// ------------------------------------
// Actions
// ------------------------------------
export function loadingChange (status = false) {
  return {
    type: LOADING_CHANGE,
    payload: status
  }
}

// ------------------------------------
// Action Creator
// ------------------------------------
export const show = () => {
  window.REDUX_STORE.dispatch(loadingChange(true))
}
export const hide = () => {
  window.REDUX_STORE.dispatch(loadingChange(false))
}
// ------------------------------------
// Reducer
// ------------------------------------

// 数据获取中
const loadingChangeHandler = (state, action) => {
  const loading = action.payload
  return {
    ...state,
    loading
  }
}

const ACTION_HANDLERS = {
  [LOADING_CHANGE]: loadingChangeHandler,
}

const initialState = {
  loading: false
}

export default function mainReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return action.type === LOADING_CHANGE
    ? handler(state, action)
    : state
}