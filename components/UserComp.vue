<template>
  <section class="m-2 text-gray-600 text-center">
    <button class="py-5 px-3 text-gold-100" @click="newUser()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-20 w-20 mx-auto"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clip-rule="evenodd"
        />
      </svg>
      Nový Užívateľ
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
            <header
              class="
                text-2xl
                font-extrabold
                py-4
                px-4
                text-center text-gold-500
              "
            >
              {{ user.Meno + ' ' + user.Priezvisko }}
            </header>
            <div>
              <ul class="text-center font-semibold text-gold-100">
                <li>{{ user.Program }}</li>
                <li>{{ user.email }}</li>
                <li>Terapeut: {{ user.Terapeut }}</li>
              </ul>
            </div>
            <!--Card Footer-->
            <footer class="text-center py-3 px-8">
              <button
                class="
                  bg-gold-50
                  hover:bg-gold-100
                  text-gold-500
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
                Upraviť
              </button>
              <button
                class="
                  bg-gold-50
                  hover:bg-gold-100
                  text-gold-500
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
                Vymazať
              </button>
              <button
                class="
                  bg-gold-50
                  hover:bg-gold-100
                  text-gold-500
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
                @click="plan(user.id)"
              >
                Plán
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
    plan(id) {
      this.$router.push(`/admin_plan/${id}`)
    },
    async Delete(user) {
      if (confirm('Naozaj chceš vymazať?')) {
        await this.$strapi.delete('users', user.id)
      }
      this.$store.dispatch('setUsers')
    },
    newUser() {
      this.$store.commit('setSelectedUser', null)
      this.$store.commit('setvisibleModalNewUser', true)
    },
  },
}
</script>
