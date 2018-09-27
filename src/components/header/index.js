import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'

class Header extends React.Component {
  render() {
    let { history } = this.props
    return (
      <div styleName='header-bar'>
        <h1 styleName='title'>
          <span onClick={() => history.push('/home')}>
            豆瓣
          </span>
        </h1>
        <ul>
          <li>
            <span style={{color: '#2384E8'}} onClick={() => history.push('/pages/movie')}>
              电影
            </span>
          </li>
          <li>
            <span style={{color: '#9F7860'}} onClick={() => history.push('/pages/book')}>
              图书
            </span>
          </li>
          <li>
            <span style={{color: '#E4A813'}} onClick={() => history.push('/pages/status')}>
              广播
            </span>
          </li>
          <li>
            <span style={{color: '#2AB8CC'}} onClick={() => history.push('/pages/group')}>
              小组
            </span>
          </li>
        </ul>
        <span styleName='talion'></span>
      </div>
    )
  }
}
export default withRouter(Header)