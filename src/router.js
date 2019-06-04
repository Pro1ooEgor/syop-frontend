import Vue from 'vue'
import Router from 'vue-router'
import Editor from './components/input/editor/Editor'
import newArticle from './views/newArticle'
import Articles from './views/Articles'
import Article from './views/Article'
import Home from './views/Home'
import Register from './views/login/register'
import Login from './views/login/login'
import Profile from './views/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/article/new', name: 'newArticle', component: newArticle },
    { path: '/article/editor', name: 'Editor', component: Editor },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    { path: '/articles', name: 'articles', component: Articles },
    { path: '/article/:id', name: 'article', component: Article },
    { path: '/profile', name: 'profile', component: Profile }
  ]
})
