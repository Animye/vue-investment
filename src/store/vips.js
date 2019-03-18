import axios from 'axios'
const vips = {
  state: {
    vips: [],
    vip: null
  },
  mutations: {
    getVips(state, vips) {
      state.vips = vips
    },
    getVip(state, vip) {
      state.vip = vip
    }
  },
  actions: {
    getVips({ commit }) {
      axios.get('http://localhost:3008/vips').then(res => {
        commit('getVips', res.data)
      })
    },
    getVip({ commit }, id) {
      axios.get(`http://localhost:3008/vips/${id}`).then(res => {
        commit('getVip', res.data)
      })
    }
  }
}
export default vips
