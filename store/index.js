export const state = () => ({
  CurrUser: null,
  isAuthenticated: true,
  videos: [],
})

export const getters = {
  /* 
      return items from store
    */
  getCurrUser: (state) => state.CurrUser,
  isAuthenticated: (state) => state.isAuthenticated,
  getVideos: (state) => state.videos,
}
// export const actions = {
//   async addItemToCart({ commit }, cartItem) {
//     await commit('setCartItem', cartItem)
//   },
//   async deleteCartItem({ commit }, id) {
//     await commit('removeCartItem', id)
//   },
// }
export const mutations = {
  setCurrUser: (state, user) => (state.CurrUser = user),
  setVideos: (state, videos) => (state.videos = videos),
  setIsAuth: (state, isAuth) => (state.isAuthenticated = isAuth),
}

export const actions = {
  async setVideos(state) {
    const videos = await this.$strapi.find('personalizovane-videas')
    state.commit('setVideos', videos)
  },
}
