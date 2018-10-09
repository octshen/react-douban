import React, { Component } from 'react'
import './style.less'

const Marking = ({children}) => {
  return (
    <div styleName='marking'>
      {children}
    </div>
  )
}
export default Marking