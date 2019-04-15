import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Article from './views/inputs/Article'
import Some from './views/inputs/Some'
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
      name: 'article',
      component: Article
    },
    {
      path: '/some',
      name: 'some',
      component: Some
    }
  ]
})
