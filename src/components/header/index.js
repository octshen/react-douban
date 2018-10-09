import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'

class Header extends React.Component {
  openTalion = () => {
    this.props.openTalion()
  }
  render() {
    let { history, location } = this.props
    return (
      <div styleName='header-bar'>
        <h1 styleName='title' onClick={() => location.pathname !== '/pages/home' && history.push('/pages/home')}>
          豆瓣
        </h1>
        <ul>
          <li>
            <span style={{color: '#2384E8'}} onClick={() => location.pathname !== '/pages/movie' && history.push('/pages/movie')}>
              电影
            </span>
          </li>
          <li>
            <span style={{color: '#9F7860'}} onClick={() => location.pathname !== '/pages/book' && history.push('/pages/book')}>
              图书
            </span>
          </li>
          <li>
            <span style={{color: '#E4A813'}} onClick={() => location.pathname !== '/pages/status' && history.push('/pages/status')}>
              广播
            </span>
          </li>
          <li>
            <span style={{color: '#2AB8CC'}} onClick={() => location.pathname !== '/pages/group' && history.push('/pages/group')}>
              小组
            </span>
          </li>
        </ul>
        <span styleName='talion' onClick={this.openTalion}></span>
      </div>
    )
  }
}
export default withRouter(Header)