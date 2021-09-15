<template>
  <section class="m-2 text-gray-600 text-center">
    <div class="border-black">
      <NavVideo />
      <div class="mt-5" v-for="object in listOfVideos" :key="object.id">
        
        <li class="mt-5 list-none" v-for="video in object.Video" :key="video.id">
          
          <div v-if="object.Den == 'utorok' && object.Tyzden == '2'">
         <p>Názov videa: {{ video.personalizovane_videa.Nazov_videa }} </p>
         <p>{{ object.Tyzden }}</p>
          <div class="flex justify-center m-4">
          <video-player :src="`${video.personalizovane_videa.link}`" />
          </div>
          <p class="m-4">Popis videa: {{ video.personalizovane_videa.Vseobecny_popis}} </p>
          <p class="m-4">Typ videa: {{ video.personalizovane_videa.Typ}} </p>
          </div>
        </li>
      </div>
        
      </div>
      <div>
        <p>{{weekNr}}</p>
      </div>
  </section>

</template>

<script>
import { mapGetters } from 'vuex'
import VideoPlayer from 'nuxt-video-player'
import NavVideo from '~/components/NavBarVideo'

export default {
  middleware: 'auth',
  components: {
    VideoPlayer,
    NavVideo,
  },
  computed: {
    ...mapGetters(['loggedInUser']),

    listOfVideos () {
      return this.$store.state.auth.user.Zoznam_videi
    }
  },
}
</script>