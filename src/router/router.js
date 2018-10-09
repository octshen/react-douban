import Demo from '../views/AntdDemo'

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

export const routes = [
  {
    name: 'pages',
    path: "/pages",
    component: Pages,
    routes: [
      {
        name: 'home',
        path: "/pages/home",
        exact: true,
        component: Home
      },
      {
        name: 'status',
        path: "/pages/status",
        exact: true,
        component: Status
      },
      {
        name: 'movie',
        path: "/pages/movie",
        exact: true,
        component: Movie
      },
      {
        name: 'book',
        path: "/pages/book",
        exact: true,
        component: Book
      },
      {
        name: 'group',
        path: "/pages/group",
        exact: true,
        component: Group
      },
      {
        name: 'detail',
        path: "/pages/detail/:id",
        exact: false,
        component: Detail
      },
      {
        name: 'subject',
        path: '/pages/:classify/subject/:id',
        exact: false,
        component: Subject
      },
      {
        name: 'search',
        path: '/pages/search/:queryStr',
        exact: false,
        component: Search
      },
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
  
  // antd 组件展示页
  {
    name: 'demo',
    path: '/demo',
    component: Demo
  },
]