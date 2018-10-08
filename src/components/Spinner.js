import React, { Component } from 'react'

class Spinner extends React.Component {
  render() {
    return (
      <div className='spinner' style={this.props.style}>
        <img src={require('../assets/img/loading_green.gif')} alt='' />
      </div>
    )
  }
}
export default Spinner