import React, { Component } from 'react'
import './style.less'

class Banner extends Component {
  render() {
    let { adImg, title } = this.props
    return (
      <div styleName='banner'>
        {adImg
          ? <div styleName='banner-bg ad'>
              <img src={adImg} alt='ad' />
              <span>广告</span>
            </div>
          : <div>
              <div styleName='banner-bg'>
                <img src={require('../../assets/img/promotion_bg.jpg')} alt='cover' />
              </div>
              <div styleName='content'>
                <span styleName='title'>{title}</span>
                <div>
                  <span styleName='download'>极速下载</span>
                  <span styleName='open'>打开</span>
                </div>
              </div>
            </div>
        }
      </div>
    )
  }
}
Banner.defaultProps = {
  title: '打开App, 浏览更多',
  adImg: ''
}
export default Banner