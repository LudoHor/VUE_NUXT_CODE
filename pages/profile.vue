<template>
  <section class="m-2 text-gray-600 text-center">
    <h2 class="text-xl m-2"><strong>My Profile</strong></h2>
    <div class="content">
      <p>
        <strong>Username:</strong>
        {{ loggedInUser.username }}
      </p>
      <p class="w-1/2 md:w-full">
        <strong>Email:</strong>
        {{ loggedInUser.email }}
      </p>
      <p><strong> Meno: </strong> {{loggedInUser.Meno}}</p>
      <p><strong> Priezvisko: </strong>{{loggedInUser.Priezvisko}}</p>
      <p><strong> Telefon: </strong>{{loggedInUser.Telefonne_cislo}}</p>
      <p><strong>List of properties:</strong></p>
      <div class="border-black">
      <li class="list-none" v-for="object in owner" :key="object.id">
        <p class="items-start" v-for="objectflat in object.flats" :key="objectflat.id">
          <nuxt-link to="/"><strong>Address:</strong>  {{ objectflat.address }} </nuxt-link> <br />
          <strong>Monthly rent:</strong> {{ objectflat.rent }} <br />
          <strong>Additional info: </strong> {{ objectflat.info }}
        </p>
      </li>
      <p>{{loggedInUser}}</p>
      <p>{{ age }}</p>
      </div>
      </div>
  </section>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser']),
    age () {
            return this.$store.state.auth.user.email
        },
  },
  data() {
    return {
      owner: [],
    }
  },
  // created() {
  //   axios
  //     .get('http://localhost:1337/owners?users_permissions_user=$loggedInUser.id')
  //     .then((response) => (this.owner = response.data))
  // },
}
</script>
