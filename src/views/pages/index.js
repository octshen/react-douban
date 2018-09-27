import React from 'react'

import { RouteWithSubRoutes } from '@router/index'
import Header from '@components/header'

class Pages extends React.Component {
  render () {
    let { routes } = this.props
    return (
      <div>
        <Header />
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    )
  }
}

export default Pages
