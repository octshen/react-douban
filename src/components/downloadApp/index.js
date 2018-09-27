import React, { Component } from 'react'
import './style.less'
/*eslint-disable*/
// 关闭eslit 否则包凑
export default function downloadApp () {
  return (
    <div styleName="download-app">
      <div styleName="info">
        <img src={require('../../assets/img/douban-app-logo.png')} alt="下载豆瓣" />
        <div styleName="info-content">
          <strong>豆瓣</strong>
          <div>我们的精神角落</div>
        </div>
      </div>
      <span>去 App Store 免费下载 iOS 客户端</span>
    </div>
  )
}
