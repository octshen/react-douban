// import Loadable from 'react-loadable'
// import Loading from './Loading'
import Login from '../views/login'
import Register from '../views/register'
import Home from '../views/home'
import Pages from '../views/pages'
import Status from '../views/status'
import Detail from '../views/detail'
import Movie from '../views/movie'
import Book from '../views/book'
import Group from '../views/group'

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
        component: Home
      },
      {
        name: 'status',
        path: "/pages/status",
        component: Status
      },
      {
        name: 'movie',
        path: "/pages/movie",
        component: Movie
      },
      {
        name: 'book',
        path: "/pages/book",
        component: Book
      },
      {
        name: 'group',
        path: "/pages/group",
        component: Group
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
    name: 'register',
    path: '/register',
    component: Register
  },
  
]