import React from 'react'
import { Switch } from 'react-router-dom'
import { RouteWithSubRoutes } from '@/router/index'
import Header from '@/components/header'
import Talion from '@/views/talion'

class Pages extends React.Component {
  state ={
    talion: ''
  }
  closeTalion = () => {
    this.setState({
      talion: ''
    })
  }
  openTalion =() => {
    this.setState({
      talion: 'open'
    })
  }
  render () {
    let { routes } = this.props
    return (
      <div>
        <Header openTalion={this.openTalion}/>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
        {
          this.state.talion && <Talion closeTalion={this.closeTalion}/>
        }
      </div>
    )
  }
}

export default Pages
