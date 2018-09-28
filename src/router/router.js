import Login from '../views/login'
import Home from '../views/home'
import Pages from '../views/pages'
import Status from '../views/status'

export const routes = [
  {
    name: 'login',
    path: "/login",
    component: Login
  },
  {
    name: 'pages',
    path: "/pages",
    component: Pages,
    routes: [
      {
        name: 'home',
        path: "/pages/home",
        component: Home
      },
      {
        name: 'status',
        path: "/pages/status",
        component: Status
      }
    ]
  },
  
]