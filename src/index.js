import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './router/index'

import './assets/common.less'
import './assets/normalize.less'
import 'antd-mobile/dist/antd-mobile.less'
import createStore from './store/createStore'

import { AppContainer } from 'react-hot-loader'

// import registerServiceWorker from './registerServiceWorker';
const store = createStore()
window.REDUX_STORE = store

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

const root = document.getElementById('root')
const render = Component => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
  renderMethod(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  )
}
render(App)

if (module.hot) {
  module.hot.accept('./router/index', () => { // 当我们热更新的代码出现的时候，把App重新加载
    render(App) // 重新渲染到 document 里面
  })
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)