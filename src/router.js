import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Editor from './components/input/editor/Editor'
import newArticle from './views/newArticle'
import Some from './views/Some'
import HelloWorld from './components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/article/new',
      name: 'newArticle',
      component: newArticle
    },
    {
      path: '/article/editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/some',
      name: 'some',
      component: Some
    }
  ]
})
