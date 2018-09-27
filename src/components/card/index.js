import React, { Component } from 'react'
import './style.less'

class Card extends Component {
  
  render() {
    let { mold } = this.props
    return (
      <div styleName='card'>
        <div styleName='desc'>
          <span>
            <img src={require('../../assets/img/douban-app-logo.png')} alt='' />
          </span>
          <span>
            <div styleName='user-info'>
              <strong>
                豆瓣{mold && <span>写了日记</span> }
              </strong>
              <div styleName='timestamp'>2017-03-01 19:30:41</div>
            </div>
          </span>
        </div>
        {
          mold === 'quote' && <div styleName='article-card'>
            <div styleName='title'>
              豆瓣App 4.12.0 主要更新
            </div>
            <div styleName='detail'>
              - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
            </div>
          </div>
        }
        { 
          mold === 'comment' && <p styleName='comment'>
            可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你
          </p>
        }
        <div styleName='info'>
          <span styleName='btn like'><i>4</i></span>
          {mold === 'quote' && <span styleName='btn comment'><i>0</i></span>}
          {mold === 'quote' && <span styleName='btn retweet'><i>0</i></span>}
          <span styleName='btn more'></span>
        </div>
      </div>
    )
  }
}

export default Card