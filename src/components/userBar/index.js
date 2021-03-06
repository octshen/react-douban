import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import avatar from '../../assets/img/avatar.png'
import userNormal from '../../assets/img/user_normal.jpg'
import './style.less'

class UserBar extends Component {
  state = {
    currentLink: '/login',
    holder: '请先登录'
  }
  componentWillMount() {
    let { currentUser } = this.props
    currentUser && this.setState({
      currentLink: '/pages/home',
      holder: currentUser.name
    })
  }
  render() {
    let { history, currentUser } = this.props
    let { currentLink, holder } = this.state
    return (
      <div styleName='user-bar' onClick={() => history.push(currentLink)}> 
        <div styleName='avatar'>
          {
            currentUser
              ? <img src={avatar} alt='avatar' />
              : <img src={userNormal} alt='未登陆' />
          }
        </div>
        <div styleName='holder'>{holder}</div>
        <div styleName='icon icon-camera'></div>
        <div styleName='icon icon-pen'></div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentUser: state.userInfo.currentUser
})
export default withRouter(connect(mapStateToProps)(UserBar))