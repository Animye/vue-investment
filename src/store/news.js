import axios from 'axios'
const news = {
  state: {
    news: [],
    oneNew: null
  },
  mutations: {
    getNews(state, news) {
      state.news = news
    },
    getOneNew(state, oneNew) {
      state.oneNew = oneNew
    }
  },
  actions: {
    getNews({ commit }) {
      axios.get('http://localhost:3008/news').then(res => {
        commit('getNews', res.data)
      })
    },
    getOneNew({ commit }, id) {
      axios.get(`http://localhost:3008/news/${id}`).then(res => {
        commit('getOneNew', res.data)
      })
    }
  }
}
export default news
