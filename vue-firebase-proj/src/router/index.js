import Vue from 'vue'
import Router from 'vue-router'
import VueFire from 'vuefire'

import BooksList from '@/components/BooksList'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Book from '@/components/NewBook'

import firebase from 'firebase'

Vue.use(Router)
Vue.use(VueFire)

let router= new Router({
  routes: [
    {
      path: '/hello',
      name: 'BooksList',
      component: BooksList,
      meta : {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser;
//   let requiresAuth = to.matched.some ( record => record.meta.requiresAuth)
//   if (requiresAuth && !currentUser)  next ('login')
//    else if (!requiresAuth && currentUser) next ('hello')
//     else next()
// });


export default router;
