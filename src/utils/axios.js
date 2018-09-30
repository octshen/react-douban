import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://api.douban.com/v2' :'/api'

export default axios