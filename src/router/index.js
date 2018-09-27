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
    <div>
      <Switch>
        {routes.map((route) => <RouteWithSubRoutes key={route.name} {...route} />)}
        <Redirect exact from='/' to='/login' />
      </Switch>
    </div>
  </HashRouter>
)

export default Router