<template>
  <section class="m-2 text-gray-600 text-center">
    <div class="content">
    <div class="border-black">
    <div v-for="object in loggedInUser.Zoznam_videi" :key="object.id">
      <p>{{object.Video}}</p>
      <li v-for="object1 in object.Video.personalizovane_videa" :key="object1.id">
        <p>{{object1.link}}</p>
      </li>
      </div>
      </div>
      <video-player src="https://www.youtube.com/embed/t0RwGmzFCdA"/>
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
  },
}
</script>