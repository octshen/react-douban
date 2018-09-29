import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '@/store/actions/userInfo'
import './style.less'

class SubNav extends Component {
  state = {
    currentLink: '/login',
    holder: '请先登录'
  }
  componentWillMount() {
    let { userInfo } = this.props
    userInfo && this.setState({
      currentLink: '/pages/status',
      holder: userInfo.name
    })
  }
  register = () => {
    alert('todo...')
  }
  render() {
    let { history, logout, location, mold, userInfo } = this.props
    return (
      <div className='has-header' styleName='sub-nav'>
        {
          mold === 'navBottom' && <div styleName='nav-bottom'>
            <div styleName='nav-item'>
              <a onClick={this.register}>注册帐号</a>
              {
                userInfo.email 
                  ? <a onClick={logout}>退出登录</a>
                  : <a onClick={() => {history.replace('/login')}}>登录豆瓣</a>
              }
            </div>
            <div styleName='nav-item'>
              <a onClick={() => {location = 'https://movie.douban.com/'}}>使用桌面版</a>
              <a>使用豆瓣App</a>
            </div>
          </div>
        }
        {
          mold === 'quickNav'
            ? <ul styleName='quick-nav'>
                <li>
                  <Link to={'/pages/movie'}>影院热映</Link>
                </li>
                <li>
                  <Link to={'/pages/status'}>欧美新碟榜</Link>
                </li>
                <li>
                  <a onClick={this.register}>注册帐号</a>
                </li>
                <li>
                {
                  userInfo.email 
                    ? <a onClick={logout}>退出登录</a>
                    : <a onClick={() => {history.replace('/login')}}>登录豆瓣</a>
                }
                </li>
              </ul>
            : ''
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  userInfo: state.userInfo
})
const mapDispatchToProps = {
  logout
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubNav))
