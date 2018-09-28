import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import { routes } from './router'

export const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}
  
const Router = () => (
  <HashRouter>
    <Switch>
      {routes.map((route) => <RouteWithSubRoutes key={route.name} {...route} />)}
      <Redirect exact from='/' to='/pages/home' />
    </Switch>
  </HashRouter>
)

export default Router