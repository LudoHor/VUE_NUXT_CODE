<template>
  <section class="m-2 text-gray-600 text-center">
    <button class="py-5 px-3 text-gold-100" @click="newUser()">
      Novy Uzivatel
    </button>

    <div class="md:container md:mx-auto mini:px-1 md:px-3 max-w-7xl">
      <div class="flex flex-wrap">
        <div
          class="w-full xl:w-1/3/1 md:w-1/2/1 shadow-xl rounded-xl m-1"
          v-for="user in users"
          :key="user.id"
        >
          <!-- Card -->
          <!-- Card -->
          <div class="">
            <nuxt-img
              src="/pic/CC-logo.png"
              alt=""
              class="rounded-full p-4 h-40 mx-auto"
            />
            <!--Card Header-->
            <header class="text-2xl font-extrabold py-4 px-4 text-center">
              {{ user.Meno + ' ' + user.Priezvisko }}
            </header>
            <div>
              <ul class="text-gray-500 text-center font-semibold">
                <li>{{ user.Program }}</li>
                <li>{{ user.email }}</li>
                <li>Terapeut: {{ user.Terapeut }}</li>
              </ul>
            </div>
            <!--Card Footer-->
            <footer class="text-center py-3 px-8 text-gray-500">
              <button
                class="
                  bg-purple-500
                  text-white
                  active:bg-purple-600
                  font-bold
                  uppercase
                  text-xs
                  px-4
                  py-2
                  rounded
                  shadow
                  hover:shadow-md
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
                @click="openEditModal(user)"
              >
                Upravit
              </button>
              <button
                class="
                  bg-purple-500
                  text-white
                  active:bg-purple-600
                  font-bold
                  uppercase
                  text-xs
                  px-4
                  py-2
                  rounded
                  shadow
                  hover:shadow-md
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
                @click="Delete(user)"
              >
                Vymazat
              </button>
            </footer>
          </div>
        </div>
      </div>

      <!-- Card -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    users: [],
    admin: { default: false },
  },
  data() {
    return {}
  },
  methods: {
    openEditModal(user) {
      this.$store.commit('setSelectedUser', user)
      this.$store.commit('setvisibleModalNewUser', true)
    },
    async Delete(user) {
      await this.$strapi.delete('users', user.id)

      this.$store.dispatch('setUsers')
    },
    newUser() {
      this.$store.commit('setSelectedUser', null)
      this.$store.commit('setvisibleModalNewUser', true)
    },
  },
}
</script>
