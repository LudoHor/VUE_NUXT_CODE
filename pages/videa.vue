<template>
  <section class="m-2 text-gray-600 text-center">
    <div>
      <select id="week" name="week" v-model="tyzden">
        <option value="1">Týždeň 1</option>
        <option value="2">Týždeň 2</option>
        <option value="3">Týždeň 3</option>
        <option value="4">Týždeň 4</option>
        <option value="5">Týždeň 5</option>
        <option value="6">Týždeň 6</option>
        <option value="7">Týždeň 7</option>
        <option value="8">Týždeň 8</option>
      </select>

      <select id="week" name="week" v-model="den">
        <option>pondelok</option>
        <option>utorok</option>
        <option>streda</option>
        <option>stvrtok</option>
        <option>piatok</option>
        <option>sobota</option>
        <option>nedela</option>
      </select>
    </div>
    <div class="border-black">
      <!-- <NavVideo /> -->
      <div v-if="listOfVideos" class="mt-20">
        <li
          class="mt-20 list-none"
          v-for="video in listOfVideos"
          :key="video.id"
        >
          <div>
            <p>Názov videa: {{ video.personalizovane_videa.Nazov_videa }}</p>
            <div class="flex justify-center m-4">
              <video-player :src="`${video.personalizovane_videa.link}`" />
            </div>
            <p class="m-4">
              Popis videa: {{ video.personalizovane_videa.Vseobecny_popis }}
            </p>
            <p class="m-4">
              Personalizovany popis videa:
              {{ video.Personalizovany_popis }}
            </p>
            <p class="m-4">Typ videa: {{ video.personalizovane_videa.Typ }}</p>
          </div>
        </li>
      </div>
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
  data() {
    return {
      den: 'pondelok',
      tyzden: 1,
    }
  },

  computed: {
    ...mapGetters(['loggedInUser']),

    listOfVideos() {
      const videa = this.$store.state.auth.user.Denny_plan
      const filteredVid = videa.filter(
        (el) => el.Den == this.den && el.Tyzden == this.tyzden
      )
      if (filteredVid.length != 0) {
        return filteredVid[0].Video
      }
      return null
    },
  },
}
</script>
