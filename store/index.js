export const state = () => ({
  CurrUser: null,
  visibleModalNewvideo: false,
  videos: [],
  selectedVideo: '',
})

export const getters = {
  /* 
      return items from store
    */
  getCurrUser: (state) => state.CurrUser,
  visibleModalNewvideo: (state) => state.visibleModalNewvideo,
  getVideos: (state) => state.videos,
  getSelectedVideo: (state) => state.selectedVideo,
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
  setSelectedVideo: (state, selectedVideo) =>
    (state.selectedVideo = selectedVideo),
  setCurrUser: (state, user) => (state.CurrUser = user),
  setVideos: (state, videos) => (state.videos = videos),
  setvisibleModalNewvideo: (state, isVis) =>
    (state.visibleModalNewvideo = isVis),
}

export const actions = {
  async setVideos(state) {
    const videos = await this.$strapi.find('personalizovane-videas')
    state.commit('setVideos', videos)
  },
}
