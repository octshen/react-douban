import Loadable from 'react-loadable'
import Login from '../views/login'
import Register from '../views/register'
import Home from '../views/home'
import Pages from '../views/pages'
import Status from '../views/status'
import Detail from '../views/detail'
import Movie from '../views/movie'
import Spinner from '@/components/Spinner'


export const routes = [
  {
    name: 'pages',
    path: "/pages",
    component: Loadable({loader: () => import('../views/pages'), loading: Spinner}),
    // component: Pages,
    routes: [
      {
        name: 'home',
        path: "/pages/home",
        component: Loadable({loader: () => import('../views/home'), loading: Spinner})
        // component: Home
      },
      {
        name: 'status',
        path: "/pages/status",
        component: Loadable({loader: () => import('../views/status'), loading: Spinner})
        // component: Status
      },
      {
        name: 'status',
        path: "/pages/movie",
        component: Loadable({loader: () => import('../views/movie'), loading: Spinner})
        // component: Movie
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