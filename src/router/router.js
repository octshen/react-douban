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
        name: 'status',
        path: "/pages/status",
        component: Status
      }
    ]
  },
  // {
  //   name: 'home',
  //   path: "/home",
  //   component: Home,
  //   routes: [
  //     {
  //       name: 'detail',
  //       path: "/home/detail",
  //       component: Detail
  //     }
  //   ]
  // }
]