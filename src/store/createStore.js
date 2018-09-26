import {
  applyMiddleware,
  compose,
  createStore as createReduxStore
} from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducer'

const createStore = (initialState = {}) => {
  // 中间件配置
  const middleware = [thunk]

  // Store 扩展
  const enhancers = []
  let composeEnhancers = compose

  // Store 初始化
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware),
        ...enhancers
    )
  )

  return store
}

export default createStore