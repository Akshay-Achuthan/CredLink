import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignIn.vue')
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   const isUser = sessionStorage.getItem('user_id');
//   if (!isUser && to.path !== '/signin') {
//     next('/signin'); 
//   } else {
//     next(); 
//   }
// });
export default router
