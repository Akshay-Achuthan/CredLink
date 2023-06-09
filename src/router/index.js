import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   const isUser = sessionStorage.getItem('user_id');
//   console.log('user', isUser);

//   if (to.path === '/signin' && isUser) {
//     next('/');
//   } else if (to.path !== '/signin' && !isUser) {
//     next('/signin');
//   } else {
//     next();
//   }
// });


export default router

