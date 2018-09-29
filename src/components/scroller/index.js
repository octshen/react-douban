import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Rating from '@/components/rating'
import './style.less'

class Scroller extends Component {
  render() {
    let { title, type, items, children, match } = this.props
    return (
      <div styleName='scroller'>
        <div styleName='header'>
          <h2>{title}</h2>
          <a>更多</a>
        </div>
        <div styleName='content'>
          { children }
          {
            type === 'hasCover' && <ul styleName='hasCover'>
              {
                items && items.length !==0 && items.map((item, index) => (
                  <li key={index}>
                    <Link to={`${match.path}/subject/${item.id}`}>
                      { 
                        item.images && <img src={item.images.large} alt='' /> 
                      }
                      <span styleName='title'>{item.title}</span>
                      {
                        item.rating && <Rating rating={item.rating} />
                      }
                    </Link>
                  </li>
                ))
              }
            </ul>
          }
          {
            type === 'onlyString' &&  <ul styleName='onlyString'>
              {
                items && items.length !==0 && items.map((item, index) => (
                  <li style={{borderColor: '#FFAC2D'}} key={index}>
                    {
                      !item.line && <a href={item.href} style={{color: item.color}}>{item.title}</a>
                    }
                  </li>
                ))
              }
            </ul>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Scroller)