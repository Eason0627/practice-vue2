import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Login from '@/components/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      redirect: '/home/index',
      component: () => import('@/components/home.vue'),
      children: [
        {
          path: 'index',
          component: () => import('@/components/parts/page/index.vue')
        },
        {
          path: 'article',
          component: () => import('@/components/parts/page/article.vue')
        },
        {
          path: 'putArt',
          component: () => import('@/components/parts/page/putArt.vue')
        },
        {
          path: 'message',
          redirect: '/home/message/myComment',
          component: () => import('@/components/parts/page/message.vue'),
          children: [
            {
              path: 'myComment',
              component: () => import("@/components/parts/page/Msgparts/myComment.vue")
            },
            {
              path: 'msgBoard',
              component: () => import('@/components/parts/page/Msgparts/msgBoard.vue')
            },
            {
              path: 'reply',
              component: () => import('@/components/parts/page/Msgparts/reply.vue')
            },
            {
              path: 'secret',
              component: () => import('@/components/parts/page/Msgparts/secret.vue')
            },
            {
              path: 'support',
              component: () => import('@/components/parts/page/Msgparts/support.vue')
            },
            {
              path: 'system',
              component: () => import('@/components/parts/page/Msgparts/system.vue')
            },
          ]
        },
        {
          path: 'setting',
          component: () => import('@/components/parts/page/setting.vue')
        }
      ]
    }
  ],
  mode: "hash"
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const pathArr = ['/home','/home/index','/home/article','/home/putArt','/home/message','/home/message/msgBoard','/home/message/reply','/home/message/secret','/home/message/support','/home/message/system','/home/setting']
  if (pathArr.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router