<template>
  <section class="m-2 text-center">
    <button class="py-5 px-3 text-gold-100" @click="newVideo()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-20 w-20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clip-rule="evenodd"
        />
      </svg>
      Nove Video
    </button>

    <div class="md:container md:mx-auto mini:px-1 md:px-3 max-w-7xl">
      <div class="flex flex-wrap">
        <div
          class="w-full xl:w-1/3/1 md:w-1/2/1 shadow-xl rounded-xl m-1"
          v-for="video in videos"
          :key="video.id"
        >
          <!-- Card -->
          <!-- Card -->
          <div class="bg-white md:p-3 rounded-lg">
            <LazyYoutube
              class="object-cover object-center mb-2 z-0"
              :src="`${video.link}`"
            />

            <div class="text-center">
              <h3
                class="
                  tracking-widest
                  text-gold-100 text-xs
                  font-medium
                  title-font
                "
              >
                {{ video.Typ }}
              </h3>
              <h2 class="text-lg text-gold-500 font-medium title-font mb-2">
                {{ video.Nazov_videa }}
              </h2>

              <div class="text-gold-100 text-left mb-2">
                <div v-if="video.Vseobecny_popis">
                  <p
                    class="ml-7"
                    v-for="(line, i) in video.Vseobecny_popis.split(/\r?\n/)"
                    :key="i"
                  >
                    {{ line }}
                  </p>
                </div>
              </div>

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
                @click="openEditModal(video)"
              >
                Upravit
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
                @click="Delete(video)"
              >
                Vymazat
              </button>
            </div>
          </div>

          <!-- Card -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    videos: [],
  },
  data() {
    return {}
  },
  methods: {
    openEditModal(video) {
      this.$store.commit('setSelectedVideo', video)
      this.$store.commit('setvisibleModalNewvideo', true)
    },
    async Delete(video) {
      await this.$strapi.delete('personalizovane-videas', video.id)

      await this.$store.dispatch('setVideos')
    },
    newVideo() {
      this.$store.commit('setSelectedVideo', null)
      this.$store.commit('setvisibleModalNewvideo', true)
    },
  },
}
</script>
