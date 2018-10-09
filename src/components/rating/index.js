import React, { Component } from 'react'
import './style.less'

class Rating extends Component {
  render() {
    let { rating, children } = this.props
    let average = rating.average
    let full = parseInt(average / 2, 10)
    let half = average % 2 === 0 ? 0 : 1
    let gray = 5 - full - half
    let arrFull = Array(full).fill(1)
    let arrhalf = Array(half).fill(1)
    let arrGray = Array(gray).fill(1)
    return (
      <div styleName='rating'>
        {
          full === 0 
            ? <span>暂无评分</span>
            : <React.Fragment>
                {arrFull.map((item, index) => (<span key={index} styleName='star-full'></span>))}
                {arrhalf.map((item, index) => (<span key={index} styleName='star-half'></span>))}
                {arrGray.map((item, index) => (<span key={index} styleName='star-gray'></span>))}
                <span styleName='average'>{average}</span>
                {children}
              </React.Fragment>
        }
      </div>
    )
  }
}

export default Rating