import Login from '../views/login'
import Register from '../views/register'
import Home from '../views/home'
import Pages from '../views/pages'
import Status from '../views/status'
import Detail from '../views/detail'
import Movie from '../views/movie'

export const routes = [
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
      },
      {
        name: 'status',
        path: "/pages/movie",
        component: Movie
      },
      {
        name: 'detail',
        path: "/pages/detail/:id",
        component: Detail
      }
    ]
  },
  {
    name: 'login',
    path: "/login",
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  
]