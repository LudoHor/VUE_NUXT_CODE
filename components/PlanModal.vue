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
              "
            >
              <div
                class="
                  font-medium
                  self-center
                  text-xl
                  sm:text-3xl
                  text-gold-500
                  mb-6
                "
              >
                Video
              </div>

              <SelectSearch
                :video="video.personalizovane_videa"
                @changeVid="changeVid($event)"
              />
              <div class="mt-10">
                <div class="flex flex-col mb-6">
                  <label
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
                    >Personalizovaný popis:</label
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

                    <textarea
                      v-model="personalizovany_popis"
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
                      placeholder=""
                    />
                  </div>
                </div>

                <div class="flex w-full">
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
import SelectSearch from '~/components/SelectSearch'
export default {
  components: { SelectSearch },
  props: {
    video: { default: {} },
    user: {},
    day: '',
    week: 0,
  },
  data() {
    return {
      id: '',
      video_id: '',
      personalizovany_popis: '',
    }
  },
  mounted() {
    if (this.video) {
      this.personalizovany_popis = this.video.personalizovany_popis
      this.id = this.video.id
      this.video_id = this.video.personalizovane_videa.id
    }

    // const video = this.$store.getters.getSelectedVideo
    // if (video) {
    //   this.Vseobecny_popis = video.Vseobecny_popis
    //   this.Link = video.link
    //   this.Nazov_videa = video.Nazov_videa
    //   this.Typ = video.Typ
    //   this.id = video.id
    // } else {
    //   this.Vseobecny_popis = ''
    //   this.Link = ''
    //   this.Nazov_videa = ''
    //   this.Typ = ''
    //   this.id = ''
    // }
  },
  methods: {
    changeVid(e) {
      this.video_id = e.id
    },
    closeModal() {
      this.$store.commit('setvisibleModalPlan', false)
    },
    async saveVideo() {
      let updated_videa = [...this.user.Denny_plan]
      let curent_videa = []

      if (
        !updated_videa.filter(
          (v) => v.Den === this.day && v.Tyzden == this.week
        )[0]
      ) {
        updated_videa.push({
          Den: this.day,
          Tyzden: this.week,
          Video: [],
        })
      }

      curent_videa = updated_videa.filter(
        (v) => v.Den === this.day && v.Tyzden == this.week
      )[0].Video

      if (this.id) {
        curent_videa = updated_videa.filter(
          (v) => v.Den === this.day && v.Tyzden == this.week
        )[0].Video

        curent_videa.filter((v) => v.id == this.id)[0].personalizovane_videa =
          this.video_id

        curent_videa.filter((v) => v.id == this.id)[0].personalizovany_popis =
          this.personalizovany_popis
      } else if (!this.id) {
        curent_videa.push({
          personalizovane_videa: this.video_id,
          personalizovany_popis: this.personalizovany_popis,
        })
      }
      await this.$strapi.update('users', this.user.id, {
        Denny_plan: updated_videa,
      })
      this.$emit('refresh')
      this.closeModal()
    },
  },
}
</script>
