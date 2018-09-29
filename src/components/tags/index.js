import React, { Component } from 'react'
import './style.less'

const Tags = ({items}) => {
  return (
    <ul styleName='tags'>
      {
        items && items.map((item, index) => (
          <li key={index}>
            <a>{item.name ? item.name : item}</a>
          </li>
        ))
      }
    </ul>
  )
}
export default Tags