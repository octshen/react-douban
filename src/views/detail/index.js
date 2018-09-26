import React from 'react'
import './style.css'
import { connect } from 'react-redux'

class Detail extends React.Component {
  
  render () {
    let { history, username, password } = this.props
    return (
      <div>
        <div>用户信息</div>
        <div>昵称: {username}</div>
        <div>密码: {password}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  username: state.userInfo.name,
  password: state.userInfo.password
})

export default connect(mapStateToProps)(Detail)
