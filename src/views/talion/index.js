import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'
import SubNav from '@/components/subNav'

class Talion extends Component {
  state = {
    queryStr: ''
  }
  closeTalion = () => {
    this.props.closeTalion()
  }
  pressEnter(charCode) {
    if (charCode === 13) {
      let { history } = this.props  
      history.push(`/pages/search/${this.state.queryStr}`)
    }
  }
  render() {
    let { queryStr } = this.state
    return (
      <div styleName='talion-view'>
      <div styleName='header-bar'>
        <span styleName='close-talion' onClick={this.closeTalion}>关闭</span>
        <div styleName='search'>
          <input
            type='search'
            name='query'
            value={queryStr}
            onChange={e => this.setState({queryStr: e.target.value})}
            onKeyPress={e => this.pressEnter(e.charCode)} />
        </div>
      </div>
      <ul className='has-header'>
        <li>
          <div>
            <a>
              <strong style={{color: 'rgb(35, 132, 232)'}}>电影</strong>
              <span>影院热映</span>
            </a>
            <a>
              <strong style={{color: 'rgb(230, 70, 126)'}}>同城</strong>
              <span>周末活动</span>
            </a>
            <a>
              <strong style={{color: 'rgb(159, 120, 96)'}}>阅读</strong>
              <span>电子书</span>
            </a>
            <a>
              <strong style={{color: 'rgb(225, 100, 77)'}}>东西</strong>
              <span>心爱之物</span>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a>
              <strong style={{color: 'rgb(122, 106, 219)'}}>电视</strong>
              <span>正在热播</span>
            </a>
            <a>
              <strong style={{color: 'rgb(42, 184, 204)'}}>小组</strong>
              <span>志趣相投</span>
            </a>
            <a>
              <strong style={{color: 'rgb(87, 116, 197)'}}>游戏</strong>
              <span>虚拟世界</span>
            </a>
            <a>
              <strong style={{color: 'rgb(64, 207, 169)'}}>FM</strong>
              <span>红心歌单</span>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a>
              <strong style={{color: 'rgb(159, 120, 96)'}}>图书</strong>
              <span>畅销排行</span>
            </a>
            <a>
              <strong style={{color: 'rgb(244, 143, 46)'}}>音乐</strong>
              <span>新碟榜</span>
            </a>
            <a>
              <strong style={{color: 'rgb(89, 108, 221)'}}>应用</strong>
              <span>玩手机</span>
            </a>
            <a>
              <strong style={{color: 'rgb(66, 189, 86)'}}>市集</strong>
              <span>购买原创</span>
            </a>
          </div>
        </li>
      </ul>
      <SubNav mold='navBottom' />
    </div>
    )
  }
}

export default withRouter(Talion)