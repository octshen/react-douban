import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'

class Header extends React.Component {
  render() {
    let { history } = this.props
    return (
     <div className='p-5 flex-between h-45' styleName='head'>
        <div onClick={()=> history.go(-1)}>返回</div>
        <div>标题</div>
        <div>菜单</div>
      </div>
    )
  }
}
export default withRouter(Header)