<template>
  <section class="m-2 text-gray-600 text-center">
    <div class="border-black">

      <div class="mt-20" v-for="object in listOfVideos" :key="object.id">
        <li class="mt-20" v-for="video in object.Video" :key="video.id">
         <p>Názov videa: {{ video.personalizovane_videa.Nazov_videa }} </p>
          <div class="flex justify-center m-4">
          <video-player :src="`${video.personalizovane_videa.link}`" />
          </div>
          <p class="m-4">Popis videa: {{ video.personalizovane_videa.Vseobecny_popis}} </p>
          <p class="m-4">Typ videa: {{ video.personalizovane_videa.Typ}} </p>
        </li>
      </div>
    </div>
  </section>

</template>

<script>
import { mapGetters } from 'vuex'
import VideoPlayer from 'nuxt-video-player'

export default {
  middleware: 'auth',
  components: {
    VideoPlayer,
  },
  computed: {
    ...mapGetters(['loggedInUser']),

    listOfVideos () {
      return this.$store.state.auth.user.Zoznam_videi
    }
  },
}
</script>