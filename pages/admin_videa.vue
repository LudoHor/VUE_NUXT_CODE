<template>
  <div>
    <VideoComp :videos="videos" v-if="videos" />
    <NewVideoModal v-if="visibleModal" />
  </div>
</template>

<script>
// import axios from 'axios'

import NewVideoModal from '~/components/NewVideoModal'
import VideoComp from '~/components/VideoComp'

export default {
  components: {
    NewVideoModal,
    VideoComp,
  },
  middleware: 'auth',
  computed: {},
  data() {
    return {}
  },
  computed: {
    videos() {
      return this.$store.getters.getVideos
    },
    loggedInUser() {
      return this.$strapi.user
    },
    visibleModal() {
      return this.$store.getters.visibleModalNewvideo
    },
  },
  mounted() {
    this.$store.dispatch('setVideos')
  },

  methods: {
    newVideo() {
      this.$store.commit('setSelectedVideo', null)
      this.$store.commit('setvisibleModalNewvideo', true)
    },
  },
}
</script>
