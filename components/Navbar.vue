<template>
  <div class="py-8">
    <nav
      class="bg-gray-100 fixed inset-x-0 top-0 z-50"
      v-click-outside="mobile_menu_close"
    >
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex mini:space-x-4">
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
                <nuxt-img
                  class="h-7 w-7 mr-1 text-blue-400"
                  src="/pic/CC-logo.png"
                  alt=""
                />

                <div class="font-bold text-gold-100">Complex Concept</div>
              </nuxt-link>
            </div>

            <!-- primary nav -->
            <div
              v-if="isAuthenticated"
              class="hidden md:flex items-center space-x-1"
            >
              <a
                href="/videa"
                class="py-5 px-3 text-gold-100 hover:text-gold-500"
                >Môj Plán</a
              >
              <a
                href="/profile"
                class="py-5 px-3 text-gold-100 hover:text-gold-500"
                >Profil</a
              >
            </div>
          </div>

          <!-- secondary nav -->
          <div class="flex items-center space-x-1">
            <a
              v-if="isAuthenticated"
              href=""
              class="hidden md:flex py-5 px-3 text-gold-100"
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
                bg-gold-50
                hover:bg-gold-100
                text-gold-500
                rounded
                transition
                duration-300
              "
              ><strong> Prihlásenie</strong>
            </a>
          </div>

          <!-- mobile button goes here -->
          <div class="md:hidden flex items-center" v-if="isAuthenticated">
            <button class="mobile-menu-button" @click="mobile_menu_f">
              <svg
                class="w-6 h-6 mobile-menu-button text-gold-100"
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
          class="block py-2 px-4 text-center text-gold-100 hover:bg-gray-200"
          ><strong>Môj Plán</strong></a
        >
        <a
          href="/profile"
          class="block py-2 px-4 text-center text-gold-100 hover:bg-gray-200"
          ><strong>Profil</strong></a
        >
        <div
          class="
            block
            py-2
            px-4
            text-center text-gold-100
            hover:bg-gray-200
            cursor-pointer
          "
          @click="logout()"
        >
          <strong>Odhlásiť sa</strong>
        </div>
      </div>
    </nav>
  </div>
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
      this.mobile_menu_close()
    },
    mobile_menu_close(e) {
      if (!this.mobile_menu) {
        this.mobile_menu = !this.mobile_menu
      }
    },

    mobile_menu_f() {
      this.mobile_menu = !this.mobile_menu
    },
  },
}
</script>
