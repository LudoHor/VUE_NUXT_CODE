<template>
  <nav class="bg-gray-100">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div>
            <nuxt-link
              to="/"
              href="#"
              class="
                flex
                items-center
                py-5
                px-2
                text-gray-700
                hover:text-gray-900
              "
            >
              <svg
                class="h-6 w-6 mr-1 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <div class="font-bold">Complex Concept</div>
            </nuxt-link>
          </div>

          <!-- primary nav -->
          <div
            v-if="isAuthenticated"
            class="hidden md:flex items-center space-x-1"
          >
            <a href="/videa" class="py-5 px-3 text-gray-700 hover:text-gray-900"
              >Moje Videa</a
            >
            <a
              href="/profile"
              class="py-5 px-3 text-gray-700 hover:text-gray-900"
              >Profil</a
            >
          </div>
        </div>

        <!-- secondary nav -->
        <div class="flex items-center space-x-1">
          <a
            v-if="isAuthenticated"
            href=""
            class="hidden md:flex py-5 px-3"
            @click="logout()"
            >Odhlásiť sa</a
          >
          <a
            v-if="!isAuthenticated"
            href="/login"
            class="
              py-2
              text-bold
              px-3
              bg-indigo-200
              hover:bg-indigo-300
              text-blue-900
              rounded
              transition
              duration-300
              bg-indigo-200
              rounded
              hover:bg-indigo-300
            "
            ><strong> Prihlásiť sa</strong>
          </a>
        </div>

        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center" v-if="isAuthenticated">
          <button class="mobile-menu-button" @click="mobile_menu_f()">
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div
      class="absolute mobile-menu w-full md:hidden bg-gray-100 opacity-90"
      :class="{ hidden: mobile_menu }"
    >
      <a
        href="/videa"
        class="
          block
          py-2
          px-4
          text-sm text-center text-gray-700
          hover:bg-gray-200
        "
        ><strong>Moje Videá</strong></a
      >
      <a
        href="/profile"
        class="
          block
          py-2
          px-4
          text-sm text-center text-gray-700
          hover:bg-gray-200
        "
        ><strong>Profil</strong></a
      >
      <div
        class="
          block
          py-2
          px-4
          text-sm text-center text-gray-700
          hover:bg-gray-200
          cursor-pointer
        "
        @click="logout()"
      >
        <strong>Odhlásiť sa</strong>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      mobile_menu: true,
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  mounted() {},
  methods: {
    async logout(redirect) {
      await this.$auth.logout()

      this.$router.push('/')
      this.mobile_menu_f()
    },
    mobile_menu_f() {
      this.mobile_menu = !this.mobile_menu
    },
  },
}
</script>
