import React from 'react'
import { connect } from 'react-redux'
import { validateLogin } from '@/store/actions/userInfo'
// import { Modal } from 'antd-mobile'
import './style.less'

class Login extends React.Component {
  state = {
    loginState: '登录',
    isDisabled: false,    // Disabled submit button
    isShow: 0,            // Show pwd
    passType: 'password',
    error: '',
    email: '',
    token: ''
  }
  handleLogin = () => {
    this.setState({
      isDisabled: true,
      loginState: '正在登录...'
    })
    let { email, token } = this.state
    let userInfo = {
      email,
      token
    }
    this.props.handleUserInfo(userInfo).then(() => {
      this.onSuccess()
    }, (err) => {
      this.onError(err)
    })
  }
  onSuccess() {
    let { history } = this.props
    history.push('/pages/status')
  }
  onError(err) {
    this.setState({
      error: err,
      loginState: '登录',
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
    let { email, token, error, passType, isDisabled, loginState, isShow } = this.state
    return (
      <form 
        onSubmit={e => {
          e.preventDefault()
          this.handleLogin()
        }}
      >
        {error && <p styleName='tip error'>{error}</p>}
        <div>
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
                  value={token}
                  type='password'
                  name='token'
                  onChange={(e) => this.setState({token: e.target.value})}
                  placeholder='Token' />
              : <input
                  value={token}
                  type='text'
                  name='token'
                  onChange={(e) => this.setState({token: e.target.value})}
                  placeholder='Token' />
            }
            <span styleName={`show-pwd ${isShow ? 'show' : ''}`} onClick={this.showPwd}></span>
          </label>
        </div>
        <div>
          <button
            type='submit'
            styleName={`submit ${isDisabled ? 'disabled' : ''}`}
            disabled={isDisabled}>
            {loginState}
          </button>
        </div>
      </form>
    )
  }
  componentWillMount() {
    let { email, history } = this.props
    email && history.push('/status')
  }
  render() {
    let { history } = this.props
    return (
      <div styleName='login-view'>
        <h1>
          <span onClick={() => history.go(-1)}>取消</span>登录豆瓣
        </h1>
        <div>
          {this.renderContent()}
        </div>
        <div styleName='footer'>
          <div styleName='more-login'>使用其他方式登录 &amp; 找回密码</div>
          <div styleName='btns'>
            {/* <span onClick={() => history.push('/RegisterView')}>注册豆瓣帐号</span> */}
            <span>注册豆瓣帐号</span>
            <span>下载豆瓣App</span>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    email: state.userInfo.email
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
  handleUserInfo: validateLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)