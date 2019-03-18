import axios from 'axios'
const comments = {
  state: {
    comments: []
  },
  mutations: {
    getComments(state, comments) {
      state.comments = comments
    },
    addComment(state, comment) {
      state.comments.push(comment)
    },
    delComment(state, id) {
      state.comments = state.comments.filter(e => e.id !== id)
    }
  },
  actions: {
    getComments({ commit }, id) {
      axios.get(` http://localhost:3008/comments?postId=${id}`).then(res => {
        commit('getComments', res.data)
      })
    },
    addComment({ commit }, { newComment, clearInput }) {
      axios.post(`http://localhost:3008/comments`, newComment).then(res => {
        commit('addComment', res.data)
        clearInput()
      })
    },
    delComment({ commit }, id) {
      axios.delete(`http://localhost:3008/comments/${id}`).then(() => {
        commit('delComment', id)
      })
    }
  }
}
export default comments
