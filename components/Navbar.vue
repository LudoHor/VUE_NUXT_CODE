<template>
  <div>
    <header class="mb-8">
      <div
        class="p-2 border-b-4 border-gray-600 flex flex-col items-center xl:flex-row"
      >
        <h1
          class="bg-indigo-100 inline-block p-3 uppercase text-blue-900 text-2xl rounded-xl ml-4"
        >
          <nuxt-link to="/"> Fit app</nuxt-link>
        </h1>
        
        <nav
          v-if="isAuthenticated"
          class="px-6 mt-4 flex-1 flex xl:mt-0 xl:justify-end p-4"
        >
          <p class="px-6 text-gray-600 border-r-2 border-gray-500">Welcome {{ loggedInUser.username }}</p>
          
          <a class="px-6 text-gray-600 border-r-2 border-gray-500" href="/videa">Moje Videa</a>
          
          <a class="px-6 text-gray-600 border-r-2 border-gray-500" href="/profile">My Profile</a>
          
          <button class="px-6 text-gray-600" @click="logout">Logout</button>
        </nav>
        <nav
          v-if="!isAuthenticated"
          class="px-6 mt-4 flex-1 flex xl:mt-0 xl:justify-end p-4"
        >
          <nuxt-link class="px-6 text-gray-600" to="/register">
            <strong>Register</strong>
          </nuxt-link>
          <nuxt-link class="px-6 text-gray-600" to="/login"> Log in </nuxt-link>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  mounted() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
