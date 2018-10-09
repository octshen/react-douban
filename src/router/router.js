// import Login from '../views/login'
// import Register from '../views/register'
// import Home from '../views/home'
// import Pages from '../views/pages'
// import Status from '../views/status'
// import Detail from '../views/detail'
// import Movie from '../views/movie'
// import Book from '../views/book'
// import Group from '../views/group'
// import Subject from '../views/subject'
// import Search from '../views/search'
import Loadable from 'react-loadable'
import React, { Component } from 'react'

const Login = () => import('../views/login')
const Register = () => import('../views/register')
const Home = () => import('../views/home')
const Pages = () => import('../views/pages')
const Status = () => import('../views/status')
const Detail = () => import('../views/detail')
const Movie = () => import('../views/movie')
const Book = () => import('../views/book')
const Group = () => import('../views/group')
const Subject = () => import('../views/subject')
const Search = () => import('../views/search')

const loading = () => {
  return (
    <div></div>
  )
}
export const routes = [
  {
    name: 'pages',
    path: "/pages",
    // component: Pages,
    component: Loadable({ loader: Pages, loading: loading}),
    routes: [
      {
        name: 'home',
        path: "/pages/home",
        exact: true,
        // component: Home,
        component: Loadable({ loader: Home, loading: loading }),
      },
      {
        name: 'status',
        path: "/pages/status",
        exact: true,
        // component: Status,
        component: Loadable({ loader: Status, loading: loading }),
      },
      {
        name: 'movie',
        path: "/pages/movie",
        exact: true,
        // component: Movie
        component: Loadable({ loader: Movie, loading: loading }),
      },
      {
        name: 'book',
        path: "/pages/book",
        exact: true,
        // component: Book
        component: Loadable({ loader: Book, loading: loading }),
      },
      {
        name: 'group',
        path: "/pages/group",
        exact: true,
        // component: Group
        component: Loadable({ loader: Group, loading: loading }),
      },
      {
        name: 'detail',
        path: "/pages/detail/:id",
        exact: false,
        // component: Detail
        component: Loadable({ loader: Detail, loading: loading }),
      },
      {
        name: 'subject',
        path: '/pages/:classify/subject/:id',
        exact: false,
        // component: Subject
        component: Loadable({ loader: Subject, loading: loading }),
      },
      {
        name: 'search',
        path: '/pages/search/:queryStr',
        exact: false,
        // component: Search
        component: Loadable({ loader: Search, loading: loading }),
      },
    ]
  },
  {
    name: 'login',
    path: "/login",
    // component: Login
    component: Loadable({ loader: Login, loading: loading }),

  },
  {
    name: 'register',
    path: '/register',
    // component: Register
    component: Loadable({ loader: Register, loading: loading }),
  }
]