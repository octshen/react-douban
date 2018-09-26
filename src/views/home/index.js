import React from 'react'
import './style.css'
import { Route } from 'react-router-dom'
import { RouteWithSubRoutes } from '@router/index'
import { connect } from 'react-redux'
import Header from '@components/header'


const Home = ({ routes, username, password, history }) => {
  return (
    <div>
      <Header />
      {
        history.location.pathname === '/home'
        ? (<div styleName='user-info' >
            <div>用户信息</div>
            <div>昵称: {username}</div>
            <div>密码: {password}</div>
            <div onClick={() => history.push('home/detail')}>显示更多</div>
          </div>)
          : ''
      }
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  )
}
  
const mapStateToProps = state => ({
  username: state.userInfo.name,
  password: state.userInfo.password
})
export default connect(mapStateToProps)(Home)
