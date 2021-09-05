const state = {
  isLoading: false
}

const mutations = {
  getArticleStart(state) {
    console.log('this is mutation in foo module')
    state.isLoading = true
  },
  getArticleSuccess(state) {
    state.isLoading = false
  },
  getArticleFailure(state) {
    state.isLoading = false
  }
}

const actions = {
  getArticle(context) {
    context.commit('getCurrentUserStart')
  }
}

export default {
  mutations,
  actions,
  state,
  namespaced: true
}
