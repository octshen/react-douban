import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import { routes } from './router'
import { show, hide } from '@/store/mainReducer'
function RouteWrapperComponent(RouteComponent) {
  return class Wrapper extends React.Component {
    componentDidMount() {
      show()
    }
    render() {
      return <RouteComponent {...this.props}></RouteComponent>
    }
    componentWillUnmount() {
      hide()
    }
  }
}

export const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => {
        const Ec = RouteWrapperComponent(route.component)
        return <Ec {...props} routes={route.routes} />
      }}
      // render={props => (
      //   // pass the sub-routes down to keep nesting
      //   <route.component {...props} routes={route.routes} />
      // )}
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