import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'

const Types = () => {
  const items = [
    {
      title: '经典',
      href: 'movie/classic'
    },
    {
      title: '冷门佳片',
      href: 'movie/underrated'
    },
    {
      title: '豆瓣高分',
      href: 'movie/doubantop'
    },
    {
      title: '动作',
      href: 'movie/action'
    },
    {
      title: '喜剧',
      href: 'movie/comedy'
    },
    {
      title: '爱情',
      href: 'movie/love'
    },
    {
      title: '悬疑',
      href: 'movie/mystery'
    },
    {
      title: '恐怖',
      href: 'movie/horror'
    },
    {
      title: '科幻',
      href: 'movie/scifi'
    },
    {
      title: '治愈',
      href: 'movie/sweet'
    },
    {
      title: '文艺',
      href: 'movie/artfilm'
    },
    {
      title: '成长',
      href: 'movie/youth'
    },
    {
      title: '动画',
      href: 'movie/animation'
    },
    {
      title: '华语',
      href: 'movie/chinese'
    },
    {
      title: '欧美',
      href: 'movie/western'
    },
    {
      title: '韩国',
      href: 'movie/korean'
    },
    {
      title: '日本',
      href: 'movie/japanese'
    }
  ]
  const baseUrl = 'https://m.douban.com/'
  return (
    <div styleName='types'>
      <h2>分类浏览</h2>
      <div>
        <ul styleName='type-list'>
        {
          items && items.map((item, index) => (
            <li key={index}>
              <a href={`${baseUrl}${item.href}`}>
                {item.title}<span></span>
              </a>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}

export default withRouter(Types)