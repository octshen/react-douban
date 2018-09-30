import Loadable from 'react-loadable'
import Login from '../views/login'
import Register from '../views/register'
import Home from '../views/home'
import Pages from '../views/pages'
import Status from '../views/status'
import Detail from '../views/detail'
import Movie from '../views/movie'
import Loading from './Loading'

// 暂时不生效
export const routes = [
  {
    name: 'pages',
    path: "/pages",
    component: Pages,
    routes: [
      {
        name: 'home',
        path: "/pages/home",
        component: Loadable({loader: () => import('../views/home'), loading: Loading})
        // component: Home
      },
      {
        name: 'status',
        path: "/pages/status",
        component: Loadable({loader: () => import('../views/status'), loading: Loading})
        // component: Status
      },
      {
        name: 'status',
        path: "/pages/movie",
        component: Loadable({loader: () => import('../views/movie'), loading: Loading})
        // component: Movie
      },
      {
        name: 'detail',
        path: "/pages/detail/:id",
        component: Loadable({loader: () => import('../views/detail'), loading: Loading})
        // component: Detail
      }
    ]
  },
  {
    name: 'login',
    path: "/login",
    component: Loadable({loader: () => import('../views/login'), loading: Loading, delay: 1000})
    // component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Loadable({loader: () => import('../views/register'), loading: Loading})
    // component: Register
  },
  
]