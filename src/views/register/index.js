import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { register as registerApp } from '@/store/actions/userInfo'
// import { Modal } from 'antd-mobile'
import './style.less'

class Register extends React.Component {
  state = {
    isComplete: false,        // Registration completed
    isDisabled: false,        // Disabled submit button
    isShow: 0,                // Show pwd
    registerState: '立即注册',
    passType: 'password',     // Password input type
    error: '',                // Verification results
    email: '',
    pass: '',
    name: '',
    token: ''
  }
  handleRegister = () => {
    this.setState({
      isDisabled: true,
      loginState: '正在提交...'
    })
    let { email, pass, name } = this.state
    let userInfo = {
      email,
      token: pass,
      name
    }
    this.props.handleUserInfo(userInfo).then(() => {
      this.onSuccess()
    }, (err) => {
      this.onError(err)
    })
  }
  onSuccess() {
    this.setState((prevState) => ({
      isComplete: !prevState.isComplete,
      token: prevState.pass
    }))
  }
  onError(err) {
    this.setState({
      error: err,
      registerState: '立即注册',
      isDisabled: false
    })
  }
  showPwd = () => {
    this.setState((state) => {
      return {
        isShow: state.isShow ? 0 : 1,
        passType: state.isShow ? 'password' : 'text'
      }
    })
  }
  renderContent() {
    let { isComplete, isDisabled, isShow, registerState, passType, error, email, pass, name, token } = this.state
    return (
      isComplete
        ? <div>
            <h1>注册成功</h1>
            <form
              onSubmit={e => {
                e.preventDefault()
                this.handleRegister()
              }}
            >
              <p styleName='tip'>请复制以下Token进行登录</p>
              <div>
                <label>
                  <strong>token</strong>
                  <input
                    value={token}
                    readOnly
                    type='text'
                    name='token'
                    placeholder='token' />
                </label>
              </div>
              <div>
                <Link styleName='submit' to={'/login'}>
                  去登录
                </Link>
              </div>
            </form>
          </div>
        : <div>
            <h1>欢迎加入豆瓣</h1>
            <form 
              onSubmit={e => {
                e.preventDefault()
                this.handleRegister()
              }}
            >
              <div styleName='form-alias'>
                <label>
                  <strong>邮箱</strong>
                  <input
                    value={email}
                    type='email'
                    name='email'
                    onChange={(e) => this.setState({email: e.target.value})}
                    placeholder='邮箱' />
                </label>
              </div>
              <div styleName='form-pwd'>
                <label>
                  <strong>请输入密码</strong>
                  {passType === 'password' 
                    ? <input
                        value={pass}
                        type='password'
                        name='pass'
                        onChange={(e) => this.setState({pass: e.target.value})}
                        placeholder='密码' />
                    : <input
                        value={pass}
                        type='text'
                        name='pass'
                        onChange={(e) => this.setState({pass: e.target.value})}
                        placeholder='密码' />
                  }
                  <span styleName={`show-pwd ${isShow ? 'show' : ''}`} onClick={this.showPwd}></span>
                </label>
              </div>
              <div styleName='form-name'>
                <label>
                  <strong>用户名</strong>
                  <input
                    value={name}
                    type='text'
                    name='name'
                    onChange={(e) => this.setState({name: e.target.value.trim()})}
                    placeholder='用户名' />
                </label>
              </div>
              {error && <p styleName='tip error'>{error}</p>}
              <div>
                <button
                  type='submit'
                  styleName={`submit ${isDisabled ? 'disabled' : ''}`}
                  disabled={isDisabled}>
                  {registerState}
                </button>
              </div>
            </form>
            <div styleName='footer'>
              <div styleName='agreement'>点击「注册」代表你已阅读并同意用户使用协议</div>
              <div styleName='btns'>
                <a>下载豆瓣App</a>
              </div>
            </div>
          </div>
    )
  }
  // componentWillMount() {
  //   let { email, history } = this.props
  //   email && history.push('/status')
  // }
  render() {
    let { history } = this.props
    return (
      <div styleName='register-view'>
        <header styleName='header'>
          <span onClick={() => history.go(-1)}>取消</span>
          <span onClick={() => history.push('/login')}>登录</span>
        </header>
        {this.renderContent()}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    email: state.userInfo.currentUser.email
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     updateInfo: userInfo => {
//       dispatch(updateUserInfo(userInfo))
//     }
//   }
// }
const mapDispatchToProps = {
  handleUserInfo: registerApp
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)