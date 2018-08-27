import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'

import login from '@/components/home/login/login'
import register from '@/components/home/register/register'
import add from '@/components/home/add/add'
import bookList from '@/components/home/bookList/bookList'
import videoList from '@/components/home/videoList'
import videoPlay from '@/components/home/videoPlay'
import management from '@/components/home/management/management'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          redirect: 'login',
          component: login
        },
        {
          path: 'bookList',
          name: 'bookList',
          component: bookList
        },
        {
          path: 'videoList',
          name: 'videoList',
          component: videoList
        },
        {
          path: 'videoPlay',
          name: 'videoPlay',
          component: videoPlay
        },
        {
          path: 'login',
          component: login
        },
        {
          path: 'register',
          component: register
        },
        {
          path: 'add',
          component: add
        },
        {
          path: 'management',
          component: management
        }
      ]
    }
  ]
})
