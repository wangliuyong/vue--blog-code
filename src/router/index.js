import Vue from 'vue'
import Router from 'vue-router'
/* import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Edit from '@/pages/Edit/template.vue'
import Create from '@/pages/Create/template.vue'
import Register from '@/pages/Register/template.vue'
import User from '@/pages/User/template.vue'
import My from '@/pages/My/template.vue' */

import store from '../store/index'


Vue.use(Router)

/* const router= new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/detail/:blogId',
      component: Detail
    },
    {
      path: '/edit/:blogId',
      component: Edit,
      meta:{requiresAuth:true}
    },
    {
      path: '/create',
      component: Create,
      meta:{requiresAuth:true}
    },
    {
      path: '/user/:userId',
      component: User
    },
    {
      path: '/my',
      component: My,
      meta:{requiresAuth:true}
    },
    
  ]
}) */

//打包，异步加载对应的模块，避免了同时加载所有模块导致打包后文件过大
const router= new Router({
  routes: [
    {
      path: '/',
      component: ()=>{return import('@/pages/Index/template.vue')}
    },
    {
      path: '/login',
      component: ()=>{return import('@/pages/Login/template.vue')}
    },
    {
      path: '/register',
      component: ()=>{return import('@/pages/Register/template.vue')}
    },
    {
      path: '/detail/:blogId',
      component: ()=>{return import('@/pages/Detail/template.vue')}
    },
    {
      path: '/edit/:blogId',
      component: ()=>{return import('@/pages/Edit/template.vue')},
      meta:{requiresAuth:true}
    },
    {
      path: '/create',
      component: ()=>{return import('@/pages/Create/template.vue')},
      meta:{requiresAuth:true}
    },
    {
      path: '/user/:userId',
      component: ()=>{return import('@/pages/User/template.vue')}
    },
    {
      path: '/my',
      component: ()=>{return import('@/pages/My/template.vue')},
      meta:{requiresAuth:true}
    },
    
  ]
})

//每当路由切换之后，就会执行下面函数
router.beforeEach((to, from, next) => {
  //匹配当前切换的路由的meta.requiresAuth,为true就执行下一步
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    store.dispatch('checkLogin').then((res)=>{
      let isLogin=store.getters.isLogin;
      //如果没有登录，则跳转到登录页面
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})



export default router;