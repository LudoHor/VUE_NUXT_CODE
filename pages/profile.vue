<template>
  <div v-if="loggedInUser" class="m-2 text-gray-600 text-center">
    <h2 class="text-xl m-2"><strong>My Profile</strong></h2>
    <div class="content">
      <p>
        <strong>Username:</strong>
        {{ loggedInUser.username }}
      </p>
      <p>
        <strong>Email:</strong>
        {{ loggedInUser.email }}
      </p>
      <p><strong> Meno: </strong> {{ loggedInUser.Meno }}</p>
      <p><strong> Priezvisko: </strong>{{ loggedInUser.Priezvisko }}</p>
      <p><strong> Telefon: </strong>{{ loggedInUser.Telefonne_cislo }}</p>
    </div>

    <div v-for="video in videos" :key="video.Nazov_videa">
      {{ video.id }}
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
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
  },
  mounted() {
    this.$store.dispatch('setVideos')
  },

  async fetch() {
    // this.videos = await this.$strapi.find('personalizovane-videas') // berie len published
  },
  // created() {
  //   axios
  //     .get('http://localhost:1337/owners?users_permissions_user=$loggedInUser.id')
  //     .then((response) => (this.owner = response.data))
  // },
}
</script>
