import React from 'react'
import { Switch } from 'react-router-dom'
import { RouteWithSubRoutes } from '@/router/index'
import Header from '@/components/header'

class Pages extends React.Component {
  render () {
    let { routes } = this.props
    return (
      <div>
        <Header />
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </div>
    )
  }
}

export default Pages
