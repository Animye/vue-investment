import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './components/Home.vue'
import Project from './components/Project.vue'
import HomePosts from './components/HomePosts.vue'
import ProjectPost from './components/ProjectPost.vue'
import Platform from './components/Platform.vue'
import PlatformVip from './components/PlatformVip.vue'
import PlatformVipDetail from './components/PlatformVipDetail.vue'
import PlatformVipRule from './components/PlatformVipRule.vue'
import PlatformNews from './components/PlatformNews.vue'
import PlatformNewsDetail from './components/PlatformNewsDetail.vue'
import Mine from './components/Mine.vue'
import MineRelease from './components/MineRelease.vue'
import MineAccount from './components/MineAccount.vue'
import MineApplyVip from './components/MineApplyVip.vue'
import MineShare from './components/MineShare.vue'
import MinePartner from './components/MinePartner.vue'
import PlatformCooperation from './components/PlatformCooperation.vue'
import PlatformAbout from './components/PlatformAbout.vue'
import PlatformHelp from './components/PlatformHelp.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: HomePosts
        },
        {
          path: '/:type',
          component: HomePosts
        }
      ]
    },
    {
      path: '/welcome/project',
      component: Project
    },
    {
      path: '/welcome/project/:id',
      component: ProjectPost
    },
    {
      path: '/welcome/platform',
      component: Platform
    },
    {
      path: '/welcome/platform/vip',
      component: PlatformVip
    },
    {
      path: '/welcome/platform/viprule',
      component: PlatformVipRule
    },
    {
      path: '/welcome/platform/vip/:id',
      component: PlatformVipDetail
    },
    {
      path: '/welcome/platform/news',
      component: PlatformNews
    },
    {
      path: '/welcome/platform/news/:id',
      component: PlatformNewsDetail
    },

    {
      path: '/welcome/platform/cooperation',
      component: PlatformCooperation
    },
    {
      path: '/welcome/platform/about',
      component: PlatformAbout
    },
    {
      path: '/welcome/platform/help',
      component: PlatformHelp
    },
    {
      path: '/welcome/mine',
      component: Mine
    },
    {
      path: '/welcome/mine/release',
      component: MineRelease
    },
    {
      path: '/welcome/mine/account',
      component: MineAccount
    },
    {
      path: '/welcome/mine/apply',
      component: MineApplyVip
    },
    {
      path: '/welcome/mine/share',
      component: MineShare
    },
    {
      path: '/welcome/mine/partner',
      component: MinePartner
    }
  ],
  mode: 'history'
})
export default router
