const state = {
  isSubmitting: false
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  }
}

const actions = {
  register(context) {
    context.commit('registerStart')
    setTimeout(() => {
      context.commit('registerSuccess')
    }, 1000)
  }
}

export default {
  state,
  actions,
  mutations
  // getters
}
