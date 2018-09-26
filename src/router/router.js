import Login from '../views/login'
import Home from '../views/home'
import Detail from '../views/detail'

export const routes = [
  {
    name: 'login',
    path: "/login",
    component: Login
  },
  {
    name: 'home',
    path: "/home",
    component: Home,
    routes: [
      {
        name: 'detail',
        path: "/home/detail",
        component: Detail
      }
    ]
  }
]