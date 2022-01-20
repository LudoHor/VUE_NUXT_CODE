<template>
  <div>
    <div
      class="
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
      "
      id="modal-example-small"
    >
      <div class="relative w-auto my-14 mx-auto max-w-2xl">
        <!--content-->
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
          "
        >
          <!--header-->

          <!--body-->
          <div class="flex flex-col items-center justify-center">
            <div
              class="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8"
            >
              <div
                class="
                  font-medium
                  self-center
                  text-xl
                  sm:text-3xl
                  text-gray-800
                "
              >
                {{ username ? username : 'Novy uzivatel' }}
              </div>
              <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
                Uzivatel
              </div>

              <div class="mt-10">
                <div class="flex flex-col mb-5">
                  <label class="mb-1 text-xs tracking-wide text-gray-600"
                    >Uzivatelske meno:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-15
                        text-gray-400
                      "
                    >
                      <i class="fas fa-at text-blue-500"></i>
                    </div>

                    <input
                      v-model="username"
                      class="
                        text-sm
                        placeholder-gray-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gray-400
                        w-full
                        py-2
                        focus:outline-none focus:border-blue-400
                      "
                      placeholder="vloz uzivatelske meno"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Email:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-10
                        text-gray-400
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-blue-500"></i>
                      </span>
                    </div>

                    <input
                      v-model="email"
                      class="
                        text-sm
                        placeholder-gray-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gray-400
                        w-full
                        py-2
                        focus:outline-none focus:border-blue-400
                      "
                      placeholder="vloz email"
                    />
                  </div>
                </div>

                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Meno:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-10
                        text-gray-400
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-blue-500"></i>
                      </span>
                    </div>

                    <input
                      v-model="meno"
                      class="
                        text-sm
                        placeholder-gray-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gray-400
                        w-full
                        py-2
                        focus:outline-none focus:border-blue-400
                      "
                      placeholder="vloz meno"
                    />
                  </div>
                </div>

                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Priezvisko:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-10
                        text-gray-400
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-blue-500"></i>
                      </span>
                    </div>

                    <input
                      v-model="priezvisko"
                      class="
                        text-sm
                        placeholder-gray-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gray-400
                        w-full
                        py-2
                        focus:outline-none focus:border-blue-400
                      "
                      placeholder="vloz priezvisko"
                    />
                  </div>
                </div>

                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Heslo:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-10
                        text-gray-400
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-blue-500"></i>
                      </span>
                    </div>

                    <input
                      v-model="password"
                      type="password"
                      class="
                        text-sm
                        placeholder-gray-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gray-400
                        w-full
                        py-2
                        focus:outline-none focus:border-blue-400
                      "
                      placeholder="vloz heslo"
                    />
                  </div>
                </div>

                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Terapeut:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-10
                        text-gray-400
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-blue-500"></i>
                      </span>
                    </div>

                    <select
                      v-model="terapeut"
                      class="
                        text-sm
                        placeholder-gray-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gray-400
                        w-full
                        py-2
                        focus:outline-none focus:border-blue-400
                      "
                    >
                      <option>Dida</option>
                      <option>Lenka</option>
                      <option>Zuzka</option>
                      <option>Janci</option>
                      <option>Sasa</option>
                    </select>
                  </div>
                </div>

                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Program:</label
                  >
                  <div class="relative">
                    <div
                      class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-10
                        text-gray-400
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-blue-500"></i>
                      </span>
                    </div>

                    <select
                      v-model="program"
                      class="
                        text-sm
                        placeholder-gray-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gray-400
                        w-full
                        py-2
                        focus:outline-none focus:border-blue-400
                      "
                    >
                      <option>Complex_Concept</option>
                      <option>Complex_Concept_Diva</option>
                      <option>Complex_Concept_Deti</option>
                    </select>
                  </div>
                </div>

                <div class="flex w-full">
                  <button
                    class="
                      text-purple-500
                      background-transparent
                      font-bold
                      uppercase
                      px-6
                      py-2
                      text-sm
                      outline-none
                      focus:outline-none
                      mr-1
                      mb-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                    @click="closeModal()"
                  >
                    Close
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
                    @click="saveVideo()"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--footer-->
        </div>
      </div>
    </div>
    <div
      class="opacity-25 fixed inset-0 z-40 bg-black"
      id="modal-example-small-backdrop"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      username: '',
      email: '',
      password: '',
      meno: '',
      priezvisko: '',
      terapeut: '',
      program: '',
    }
  },
  mounted() {
    const user = this.$store.getters.getSelectedUser
    if (user) {
      this.id = user.id
      this.username = user.username
      this.email = user.email
      this.password = user.password
      this.meno = user.Meno
      this.priezvisko = user.Priezvisko
      this.terapeut = user.Terapeut
      this.program = user.Program
    } else {
      this.id = ''
      this.username = ''
      this.email = ''
      this.password = ''
      this.meno = ''
      this.priezvisko = ''
      this.terapeut = ''
      this.program = ''
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('setvisibleModalNewUser', false)
    },
    async saveVideo() {
      if (this.id) {
        await this.$strapi.update('users', this.id, {
          username: this.username,
          email: this.email,
          password: this.password,
          Meno: this.meno,
          Priezvisko: this.priezvisko,
          Terapeut: this.terapeut,
          Program: this.program,
        })
      } else {
        await this.$strapi.create('users', {
          username: this.username,
          email: this.email,
          password: this.password,
          Meno: this.meno,
          Priezvisko: this.priezvisko,
          Terapeut: this.terapeut,
          Program: this.program,
          confirmed: true,
          blocked: false,
        })
      }
      this.$store.dispatch('setUsers')
      this.closeModal()
    },
  },
}
</script>
