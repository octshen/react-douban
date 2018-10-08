import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Routes from './router/index'

import './assets/common.less'
import './assets/normalize.less'
import 'antd-mobile/dist/antd-mobile.less'
import createStore from './store/createStore'

// import registerServiceWorker from './registerServiceWorker';
const store = createStore()
window.REDUX_STORE = store

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)