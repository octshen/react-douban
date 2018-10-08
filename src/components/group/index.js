import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './style.less'
import Rating from '@/components/rating'

const GroupC = ({title, items, children}) => {
  return (
    <div styleName='group'>
      <div>
        <h2>{title}</h2>
      </div>
      <ul styleName='content'>
        {
          items && items.length > 0 && items.map((item, ind) => <li key={ind}>
            <Link to={`/pages/${item.subtype ? item.subtype : 'book'}/subject/${item.id}`}>
              <div styleName='group-meta'>
                {
                  item.images.small && <img src={item.images.small} alt='cover' />
                }
                <div styleName='group-info'>
                  <span>{item.title}</span>
                  {
                    item.rating && <rating rating='item.rating' />
                  }
                </div>
                {
                  item.group_member && <span styleName='group-member'>{item.group_member}人</span>
                }
              </div>
              {
                item.group_topic && <div styleName='group-topic'>
                  <span>{item.group_topic.time}</span>
                  <span>{item.group_topic.title}</span>
                </div>
              }
            </Link>
          </li>)
        }
      </ul>
      {children}
    </div>
  )
}

export default GroupC