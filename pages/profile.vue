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
    loggedInUser() {
      return this.$strapi.user
    },
  },
}
</script>
