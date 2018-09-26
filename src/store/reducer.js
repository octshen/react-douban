import { combineReducers } from 'redux'
import mainReducer from './mainReducer'
import * as reducers from './reducers'

export const makeRootReducer = () => {
  return combineReducers({
    main: mainReducer,
    ...reducers.default
  })
}

export default makeRootReducer
