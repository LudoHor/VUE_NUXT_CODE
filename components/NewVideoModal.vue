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
                {{ id ? id : 'Nove video' }}
              </div>
              <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
                Enter your credentials to access your account s sadsad sad sad
              </div>

              <div class="mt-10">
                <div class="flex flex-col mb-5">
                  <label class="mb-1 text-xs tracking-wide text-gray-600"
                    >Nazov videa:</label
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
                      v-model="Nazov_videa"
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
                      placeholder="vloz nazov videa"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Link:</label
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
                      v-model="Link"
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
                      placeholder="vloz link"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Typ:</label
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
                      v-model="Typ"
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
                      <option>typ1</option>
                      <option>typ2</option>
                    </select>
                  </div>
                </div>

                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Vseobecny popis:</label
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

                    <textarea
                      v-model="Vseobecny_popis"
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
                      placeholder=""
                    />
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
      Vseobecny_popis: '',
      Link: '',
      Nazov_videa: '',
      Typ: '',
      id: '',
    }
  },
  mounted() {
    const video = this.$store.getters.getSelectedVideo
    if (video) {
      this.Vseobecny_popis = video.Vseobecny_popis
      this.Link = video.link
      this.Nazov_videa = video.Nazov_videa
      this.Typ = video.Typ
      this.id = video.id
    } else {
      this.Vseobecny_popis = ''
      this.Link = ''
      this.Nazov_videa = ''
      this.Typ = ''
      this.id = ''
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('setvisibleModalNewvideo', false)
    },
    async saveVideo() {
      if (this.id) {
        await this.$strapi.update('personalizovane-videas', this.id, {
          Vseobecny_popis: this.Vseobecny_popis,
          link: this.Link,
          Nazov_videa: this.Nazov_videa,
          Typ: this.Typ,
        })
      } else {
        await this.$strapi.create('personalizovane-videas', {
          Vseobecny_popis: this.Vseobecny_popis,
          link: this.Link,
          Nazov_videa: this.Nazov_videa,
          Typ: this.Typ,
        })
      }
      this.$store.dispatch('setVideos')
      this.closeModal()
    },
  },
}
</script>
