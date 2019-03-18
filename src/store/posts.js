import axios from 'axios'
const posts = {
  state: {
    posts: [],
    post: null
  },
  mutations: {
    getPosts(state, posts) {
      state.posts = posts
    },
    getProjectPosts(state, posts) {
      state.posts = posts
    },
    getPost(state, post) {
      state.post = post
    }
  },
  actions: {
    getPosts({ commit }, tab) {
      axios.get(`http://localhost:3008/posts?tab=${tab}`).then(res => {
        commit('getPosts', res.data)
      })
    },
    getProjectPosts({ commit }) {
      axios.get(`http://localhost:3008/posts`).then(res => {
        commit('getPosts', res.data)
      })
    },
    getPost({ commit }, id) {
      axios.get(`http://localhost:3008/posts/${id}`).then(res => {
        commit('getPost', res.data)
      })
    }
  }
}
export default posts
