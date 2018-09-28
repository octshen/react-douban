import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'

class List extends Component {
  substr = (value) => {
    let newVal = value.replace(/<.*?>/g, '')
    return newVal.slice(0, 30)
  }
  render() {
    let { items, history, mold } = this.props
    return (
      <div styleName='list'>
        {
          mold === 'thumbnail' && items && items.map((item, index) => (
            <div styleName='thumbnail' key={index} onClick={() => history.push(`/pages/detail/id:${item.id}`)}>
              <div styleName='content'>
                <img src={item.image_hlarge} alt='cover' />
                <h3>{item.title}</h3>
                <p>{this.substr(item.content)}</p>
              </div>
              <div styleName='author'>
                <span>{item.category_name}</span>
                {
                  item.subcategory_name && <span styleName='label'>
                    本活动来自栏目 {item.subcategory_name}
                  </span>
                }
              </div>
            </div>
          ))
        }
        {
          mold === 'basic' && <ul styleName='basic'>
            {
              items && items.map((items, index) => (
                <li key={index}>
                  <a>
                    <h3>{item.title}</h3>
                    <div styleName='info'>{item.comments}</div>
                  </a>
                </li>
              ))
            }
          </ul>
        }
      </div>
    )
  }
}

List.defaultProps = {
  mold: 'basic'
}
export default withRouter(List)
