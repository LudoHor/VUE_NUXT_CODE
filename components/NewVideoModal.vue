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
                Video
              </div>

              <div class="mt-10">
                <div class="flex flex-col mb-5">
                  <label class="mb-1 text-xs tracking-wide text-gold-500"
                    >Názov videa:</label
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
                        text-gold-500
                      "
                    >
                      <i class="fas fa-at text-gold-500"></i>
                    </div>

                    <input
                      v-model="Nazov_videa"
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
                      placeholder="vloz nazov videa"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
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
                        text-gold-500
                      "
                    >
                      <span>
                        <i class="fas fa-lock text-gold-500"></i>
                      </span>
                    </div>

                    <input
                      v-model="Link"
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
                      placeholder="vloz link"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
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
                        <i class="fas fa-lock text-gold-500"></i>
                      </span>
                    </div>

                    <select
                      v-model="Typ"
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
                    >
                      <option>Dych</option>
                      <option>Mobility</option>
                      <option>Stability</option>
                      <option>Funkcne_vzorce</option>
                      <option>Myslienka</option>
                      <option>Diastaza</option>
                    </select>
                  </div>
                </div>

                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
                    >Všeobecný popis:</label
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
                      v-model="Vseobecny_popis"
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
                      placeholder=""
                    />
                  </div>
                </div>

                <div class="flex mx-auto items-center justify-center">
                  <button
                    class="
                      hover:text-gold-900
                      text-gold-500
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
      await this.$store.dispatch('setVideos')
      this.closeModal()
    },
  },
}
</script>
