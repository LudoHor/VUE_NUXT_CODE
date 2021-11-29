<template>
  <section class="m-2 text-gray-600 text-center">
    <button class="py-5 px-3 text-gold-100" @click="newVideo()">
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
              <h5 class="text-xl font-semibold mb-2">
                {{ video.Nazov_videa }}
              </h5>
              <h3 class="text-sm font-semibold mb-2">{{ video.Typ }}</h3>

              <p class="mb-4">
                {{ video.Vseobecny_popis }}
              </p>

              <p class="mb-4">
                {{ video.id }}
              </p>

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
                @click="openEditModal(video)"
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
    admin: { default: false },
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

      this.$store.dispatch('setVideos')
    },
    newVideo() {
      this.$store.commit('setSelectedVideo', null)
      this.$store.commit('setvisibleModalNewvideo', true)
    },
  },
}
</script>
