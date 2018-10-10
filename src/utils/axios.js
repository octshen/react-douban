import axios from 'axios'
// axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : 'https://api.douban.com/v2'

export default axios