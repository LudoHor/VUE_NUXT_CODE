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
              class="
                flex flex-col
                bg-white
                px-4
                sm:px-6
                md:px-8
                lg:px-10
                py-8
                w-full
                sm:w-3/4
              "
            >
              <div
                class="
                  font-medium
                  self-center
                  text-xl
                  sm:text-3xl
                  text-gold-500
                "
              >
                {{ username ? username : 'Nový užívateľ' }}
              </div>

              <div class="mt-10">
                <div class="flex flex-col mb-5">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
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
                        text-gold-500
                      "
                    >
                      <i class="fas fa-at text-gold-500"></i>
                    </div>

                    <input
                      v-model="username"
                      class="
                        text-sm
                        placeholder-gold-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gold-500
                        w-full
                        py-2
                        focus:outline-none focus:border-gold-500
                      "
                      placeholder="vloz uzivatelske meno"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
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
                        text-gold-500
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-gold-500"></i>
                      </span>
                    </div>

                    <input
                      v-model="email"
                      class="
                        text-sm
                        placeholder-gold-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gold-500
                        w-full
                        py-2
                        focus:outline-none focus:border-gold-500
                      "
                      placeholder="vloz email"
                    />
                  </div>
                </div>

                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
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
                        text-gold-500
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-gold-500"></i>
                      </span>
                    </div>

                    <input
                      v-model="meno"
                      class="
                        text-sm
                        placeholder-gold-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gold-500
                        w-full
                        py-2
                        focus:outline-none focus:border-gold-500
                      "
                      placeholder="vloz meno"
                    />
                  </div>
                </div>

                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
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
                        text-gold-500
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-gold-500"></i>
                      </span>
                    </div>

                    <input
                      v-model="priezvisko"
                      class="
                        text-sm
                        placeholder-gold-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gold-500
                        w-full
                        py-2
                        focus:outline-none focus:border-gold-500
                      "
                      placeholder="vloz priezvisko"
                    />
                  </div>
                </div>

                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
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
                        text-gold-500
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-gold-500"></i>
                      </span>
                    </div>

                    <input
                      v-model="password"
                      type="password"
                      class="
                        text-sm
                        placeholder-gold-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gold-500
                        w-full
                        py-2
                        focus:outline-none focus:border-gold-500
                      "
                      placeholder="vloz heslo"
                    />
                  </div>
                </div>

                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
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
                        text-gold-500
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-gold-500"></i>
                      </span>
                    </div>

                    <select
                      v-model="terapeut"
                      class="
                        text-sm
                        placeholder-gold-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gold-100
                        w-full
                        py-2
                        focus:outline-none focus:border-gold-500
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
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
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
                        text-gold-500
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-gold-500"></i>
                      </span>
                    </div>

                    <select
                      v-model="program"
                      class="
                        text-sm
                        placeholder-gold-500
                        pl-4
                        pr-4
                        rounded-2xl
                        border border-gold-100
                        w-full
                        py-2
                        focus:outline-none focus:border-gold-500
                      "
                    >
                      <option>Complex_Concept</option>
                      <option>Complex_Concept_Diva</option>
                      <option>Complex_Concept_Deti</option>
                    </select>
                  </div>
                  <div class="mb-6">
                    <label
                      class="
                        mb-1
                        text-xs
                        sm:text-sm
                        tracking-wide
                        text-gold-500
                      "
                      >Objektívny popis:</label
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
                          text-gold-500
                        "
                      >
                        <span>
                          <i class="fas fa-lock text-gold-500"></i>
                        </span>
                      </div>

                      <textarea
                        v-model="ob_popis"
                        class="
                          text-sm
                          placeholder-gold-500
                          pl-4
                          pr-4
                          rounded-2xl
                          border border-gold-100
                          py-2
                          focus:outline-none focus:border-gold-500
                          w-full
                          h-40
                        "
                        placeholder=""
                      />
                    </div>
                    <div class="mb-6">
                      <label
                        class="
                          mb-1
                          text-xs
                          sm:text-sm
                          tracking-wide
                          text-gold-500
                        "
                        >Subjektívny popis:</label
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
                            text-gold-500
                          "
                        >
                          <span>
                            <i class="fas fa-lock text-gold-500"></i>
                          </span>
                        </div>

                        <textarea
                          v-model="sub_popis"
                          class="
                            text-sm
                            placeholder-gold-500
                            pl-4
                            pr-4
                            rounded-2xl
                            border border-gold-100
                            py-2
                            focus:outline-none focus:border-gold-500
                            w-full
                            h-40
                          "
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex w-full justify-center mx-auto">
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
                    @click="closeModal()"
                  >
                    Zatvoriť
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
                    @click="saveVideo()"
                  >
                    Uložiť zmeny
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
      ob_popis: '',
      sub_popis: '',
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
      this.ob_popis = user.OB_popis
      this.sub_popis = user.Sub_popis
    } else {
      this.id = ''
      this.username = ''
      this.email = ''
      this.password = ''
      this.meno = ''
      this.priezvisko = ''
      this.terapeut = ''
      this.program = ''
      this.ob_popis = ''
      this.sub_popis = ''
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
          OB_popis: this.ob_popis,
          Sub_popis: this.sub_popis,
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
          OB_popis: this.ob_popis,
          Sub_popis: this.sub_popis,
        })
      }
      this.$store.dispatch('setUsers')
      this.closeModal()
    },
  },
}
</script>
