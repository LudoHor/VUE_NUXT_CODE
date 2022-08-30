export const state = () => ({
  CurrUser: null,
  visibleModalNewvideo: false,
  visibleModalNewUser: false,
  visibleModalPlan: false,
  videos: [],
  selectedVideo: '',
  users: [],
  selectedUser: [],
  selectedPlanVideo: '',
})

export const getters = {
  /* 
      return items from store
    */
  getUsers: (state) => state.users,
  getCurrUser: (state) => state.CurrUser,
  visibleModalNewvideo: (state) => state.visibleModalNewvideo,
  visibleModalPlan: (state) => state.visibleModalPlan,
  visibleModalNewUser: (state) => state.visibleModalNewUser,
  getVideos: (state) => state.videos,
  getSelectedVideo: (state) => state.selectedVideo,
  getSelectedUser: (state) => state.selectedUser,
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
  setUsers: (state, users) => (state.users = users),
  setSelectedVideo: (state, selectedVideo) =>
    (state.selectedVideo = selectedVideo),
  setSelectedUser: (state, selectedUser) => (state.selectedUser = selectedUser),
  setCurrUser: (state, user) => (state.CurrUser = user),
  setVideos: (state, videos) => (state.videos = videos),
  setvisibleModalNewvideo: (state, isVis) =>
    (state.visibleModalNewvideo = isVis),
  setvisibleModalNewUser: (state, isVis) => (state.visibleModalNewUser = isVis),
  setvisibleModalPlan: (state, isVis) => (state.visibleModalPlan = isVis),
}

export const actions = {
  async setVideos(state) {
    const videos = await this.$strapi.find('personalizovane-videas', {
      _limit: -1,
    })
    state.commit('setVideos', videos)
  },
  async setUsers(state) {
    const users = await this.$strapi.find('users', {
      'role.name': 'Authenticated',
    })
    // const fil_users = users.filter((user) => user.role.name != 'Admin')
    state.commit('setUsers', users)
  },
}
