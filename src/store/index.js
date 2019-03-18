import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts'
import comments from './comments'
import vips from './vips'
import news from './news'
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: { posts, comments, vips, news }
})
export default store
